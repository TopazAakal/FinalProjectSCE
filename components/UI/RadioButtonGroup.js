import { View, StyleSheet } from "react-native";
import RadioButton from "./RadioButton";

function RadioButtonGroup({ options, onSelect, selectedValue }) {
  return (
    <View style={styles.radioButtonGroup}>
      {options.map((option) => (
        <RadioButton
          key={option.value}
          label={option.label}
          selected={selectedValue === option.value}
          onPress={() => onSelect(option.value)}
        />
      ))}
    </View>
  );
}

export default RadioButtonGroup;

const styles = StyleSheet.create({
  radioButtonGroup: {
    flexDirection: "row-reverse",
    marginBottom: 10,
  },
});
