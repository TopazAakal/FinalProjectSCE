import React, { useState } from "react";
import { View, TextInput, ScrollView, Text, StyleSheet } from "react-native";
import LabeledInput from "../components/UI/LabeledInput";
import CustomButton from "../components/UI/CustomButton";
import RadioButtonGroup from "../components/UI/RadioButtonGroup";
import Ionicons from "react-native-vector-icons/Ionicons";
import ImagePicker from "../components/UI/ImagePicker";
import { useNavigation } from "@react-navigation/native";
import Recipe from "../models/Recipe";

function RecipeForm({}) {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState("");
  const [category, setCategory] = useState("");
  const [totalTime, setTotalTime] = useState("");
  const [recipeImage, setRecipeImage] = useState(null);
  const [ingredientName, setIngredientName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [selectedUnit, setSelectedUnit] = useState("");

  const unitOptions = [
    { label: 'מ"ל', value: "מיליליטר" },
    { label: "ליטר", value: "ליטר" },
    { label: 'מ"ג', value: "מיליגרם" },
    { label: "גרם", value: "גרם" },
    { label: 'ק"ג', value: "קילוגרם" },
    { label: "כוס", value: "כוס" },
    { label: "כף", value: "כף" },
    { label: "כפית", value: "כפית" },
  ];

  function takeImageHandler(imageUri) {
    setRecipeImage(imageUri);
  }

  const addIngredient = () => {
    setIngredients([
      ...ingredients,
      { name: ingredientName, quantity, unit: selectedUnit },
    ]);
    resetIngredientFields();
  };

  const removeIngredient = (index) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(index, 1);
    setIngredients(updatedIngredients);
  };

  const resetIngredientFields = () => {
    setIngredientName("");
    setQuantity("");
    setSelectedUnit("");
  };

  const resetForm = () => {
    setTitle("");
    setIngredients([]);
    setInstructions("");
    setCategory("");
    setTotalTime("");
    setRecipeImage(null);
    resetIngredientFields();
  };

  const saveRecipe = () => {
    console.log("Recipe saved");
    const newRecipe = new Recipe(
      title,
      ingredients,
      instructions,
      recipeImage,
      category,
      totalTime
    );
    navigation.replace("RecipeDisplay", { recipe: newRecipe });
    resetForm();
  };

  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.form}>
        <LabeledInput
          label="כותרת"
          value={title}
          onChangeText={setTitle}
          placeholder="שם המתכון"
          placeholderTextColor="#666"
        />

        <Text style={styles.title}>תמונת מתכון</Text>
        <ImagePicker onTakeImage={takeImageHandler} />

        <Text style={styles.title}>מרכיבים</Text>
        <View style={styles.ingredientSection}>
          <TextInput
            style={styles.input}
            placeholder="שם המרכיב"
            placeholderTextColor="#666"
            value={ingredientName}
            onChangeText={setIngredientName}
          />
          <TextInput
            style={styles.input}
            placeholder="כמות"
            placeholderTextColor="#666"
            value={quantity}
            onChangeText={(text) => setQuantity(text.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
          />
        </View>
        <RadioButtonGroup
          options={unitOptions}
          selectedValue={selectedUnit}
          onSelect={setSelectedUnit}
        />
        <View style={styles.iconButton}>
          <Ionicons
            name="add-circle"
            size={40}
            color="#1d3e1f"
            onPress={addIngredient}
          />
        </View>

        <View style={styles.displayedIngredients}>
          {ingredients.map((ingredient, index) => (
            <View key={index} style={{ flexDirection: "row-reverse" }}>
              <Ionicons
                name="trash"
                size={20}
                color="#1d3e1f"
                onPress={removeIngredient.bind(this, index)}
              />
              <Text style={styles.displayedIngredientsText}>
                {ingredient.quantity} {ingredient.unit} {ingredient.name}
              </Text>
            </View>
          ))}
        </View>

        <LabeledInput
          label="הוראות הכנה"
          value={instructions}
          onChangeText={setInstructions}
          multiline
        />

        <LabeledInput
          label="קטגוריה"
          value={category}
          onChangeText={setCategory}
        />

        <LabeledInput
          label="זמן הכנה כולל"
          value={totalTime}
          onChangeText={setTotalTime}
        />

        <CustomButton title="שמור מתכון" onPress={saveRecipe} />
      </View>
    </ScrollView>
  );
}

export default RecipeForm;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#E8F5E9",
    padding: 10,
  },
  form: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E7D32",
    textAlign: "right",
  },
  recipeImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  ingredientSection: {
    flexDirection: "row-reverse",
    alignItems: "right",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 10,
    marginRight: 5,
    borderRadius: 5,
    borderColor: "#C8E6C9",
    borderWidth: 1,
    fontSize: 16,
    textAlign: "right",
  },
  iconButton: {
    alignItems: "center",
    marginBottom: 10,
  },
  displayedIngredients: {
    marginBottom: 10,
  },
  displayedIngredientsText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    paddingRight: 5,
    marginBottom: 10,
  },
});
