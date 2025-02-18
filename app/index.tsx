import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Footer from "./components/ui/footer";
import { Text } from "react-native";

//const icon = require("../assets/images/ImagenRecetas.jpg");

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio</Text>
      <StatusBar style="auto" />
      <Footer />
    </View>
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
    fontWeight: "bold",
  },
});
