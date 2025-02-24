import { StyleSheet, View } from "react-native";
import Header from "../app/components/ui/header";
import RecipeCard from "../app/components/ui/recipeCard";

//const icon = require("../assets/images/ImagenRecetas.jpg");

export default function HomeScreen() {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <RecipeCard />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0F8E0",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
  },
});
