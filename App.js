import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddRecipeScreen from "./screens/AddRecipeScreen";
import RecipeDeatailScreen from "./screens/RecipeDetailScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="AddRecipe"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#2E7D32",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="AddRecipe"
            component={AddRecipeScreen}
            options={{ title: "הוספת מתכון" }}
          />
          <Stack.Screen
            name="RecipeDisplay"
            component={RecipeDeatailScreen}
            options={{ title: "פרטי המתכון" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
