import React from "react";
import { View, StyleSheet, Pressable, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";

const Footer = () => {
  const router = useRouter(); // obtiene el router
  const pathname = usePathname(); // obtiene la ruta actual

  const handleNavigation = (
    route: "/" | "/BuscarRecetas" | "/GuardarRecetas",
  ) => {
    if (pathname !== route) {
      // Navega solo si no estás ya en la ruta actual
      router.replace(route);
    }
  };

  return (
    <View style={styles.footer}>
      <Pressable onPress={() => handleNavigation("/")}>
        <Ionicons
          style={styles.icon}
          name="home-outline"
          size={25}
          color="black"
        />
      </Pressable>
      <Pressable onPress={() => handleNavigation("/BuscarRecetas")}>
        <Ionicons style={styles.icon} name="search" size={25} color="black" />
      </Pressable>
      <Pressable onPress={() => handleNavigation("/GuardarRecetas")}>
        <Ionicons style={styles.icon} name="heart" size={25} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#FFDAB9",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: Platform.OS === "ios" ? "8%" : "6%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Para dispositivos Android, para que la sombra se vea
  },
  icon: {
    marginBottom: Platform.OS === "ios" ? 10 : -1,
  },
});

export default Footer;
