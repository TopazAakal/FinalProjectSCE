import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const LabeledInput = ({ label, value, onChangeText, ...props }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          props.multiline ? styles.multilineInput : {},
          props.multiline && styles.adjustForMultiline, // Adjust style for multiline
        ]}
        value={value}
        onChangeText={onChangeText}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    marginBottom: 10,
  },
  label: {
    marginBottom: 5,
    fontWeight: "bold",
    color: "#2E7D32",
    textAlign: "right",
    fontSize: 18,
  },
  input: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    color: "#333",
    borderColor: "#C8E6C9",
    borderWidth: 1,
    textAlign: "right",
  },
  multilineInput: {
    height: 120,
    textAlignVertical: "top",
  },
});

export default LabeledInput;
