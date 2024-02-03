import {
  Alert,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import {
  launchCameraAsync,
  launchImageLibraryAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useState } from "react";

function ImagePicker({ onTakeImage }) {
  const [pickedImage, setPickedImage] = useState();

  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  async function verifyPermissions() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permissions to use this app."
      );
      return false;
    }

    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    if (!image.canceled) {
      const uri = image.assets[0].uri;
      setPickedImage(uri);
      onTakeImage(uri);
    }
  }

  async function pickImageHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const result = await launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    if (!result.canceled) {
      const selectedImage = result.assets[0];
      setPickedImage(selectedImage.uri);
      onTakeImage(selectedImage.uri);
    }
  }

  let imagePreview = <Text>לא נבחרה תמונה</Text>;

  if (pickedImage) {
    imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={takeImageHandler} style={styles.button}>
          <Text style={styles.textButton}>צילום תמונה</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={pickImageHandler} style={styles.button}>
          <Text style={styles.textButton}>בחירה מהגלריה</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    overflow: "hidden",
    backgroundColor: "#a9e4b2",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  buttons: {
    flexDirection: "row-reverse",
    justifyContent: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#367238",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    marginHorizontal: 5,
  },
  textButton: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});
