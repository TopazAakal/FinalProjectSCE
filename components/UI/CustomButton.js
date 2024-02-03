import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

function CustomButton({ onPress, title }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  button: {
    backgroundColor: "#1d3e1f",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default CustomButton;
