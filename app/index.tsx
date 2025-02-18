import { StyleSheet, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

const icon = require("../assets/images/ImagenRecetas.jpg");

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={icon} style={{ width: 410, height: 730 }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
