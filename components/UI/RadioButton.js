import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

function RadioButton({ label, onPress, selected }) {
  const radioButtonTextContainerStyle = selected
    ? styles.radioButtonTextContainerSelected
    : styles.radioButtonTextContainer;

  const radioButtonTextStyle = selected
    ? styles.radioButtonTextSelected
    : styles.radioButtonText;

  return (
    <TouchableOpacity style={styles.radioButton} onPress={onPress}>
      <View style={radioButtonTextContainerStyle}>
        <Text style={radioButtonTextStyle}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default RadioButton;

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  radioButtonTextContainer: {
    backgroundColor: "#367238",
    borderRadius: 10,
  },
  radioButtonTextContainerSelected: {
    backgroundColor: "#c5e6c7",
    borderRadius: 10,
  },
  radioButtonText: {
    color: "white",
    fontSize: 16,
    padding: 6,
    textAlign: "center",
  },
  radioButtonTextSelected: {
    color: "#1d3e1f",
    fontSize: 16,
    padding: 6,
    textAlign: "center",
  },
});
