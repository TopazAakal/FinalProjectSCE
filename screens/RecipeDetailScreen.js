import { View, Text, Image, StyleSheet } from "react-native";

function RecipeDeatailScreen({ route }) {
  const { recipe } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.recipeTitle}>{recipe.title}</Text>
      <Image source={{ uri: recipe.image }} style={styles.recipeImage} />
      <Text style={styles.title}>מרכיבים</Text>
      <View>
        {recipe.ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.subTitle}>
            {index + 1}. {ingredient.quantity} {ingredient.unit}{" "}
            {ingredient.name}
          </Text>
        ))}
      </View>
      <Text style={styles.title}>הוראות הכנה</Text>
      <Text style={styles.subTitle}>{recipe.instructions}</Text>
      <Text style={styles.title}>קטגוריה</Text>
      <Text style={styles.subTitle}>{recipe.category}</Text>
      <Text style={styles.title}>זמן הכנה</Text>
      <Text style={styles.subTitle}>{recipe.totalTime}</Text>
    </View>
  );
}

export default RecipeDeatailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F5E9",
    padding: 16,
  },
  recipeTitle: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#002e1a",
    textAlign: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2E7D32",
    textAlign: "right",
    marginBottom: 10,
  },
  recipeImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E7D32",
    textAlign: "right",
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    color: "black",
    marginBottom: 5,
    textAlign: "right",
  },
  instructions: {
    fontSize: 16,
    color: "black",
    textAlign: "right",
  },
});
