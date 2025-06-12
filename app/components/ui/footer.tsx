import React from "react";
import { View, StyleSheet, Pressable, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Definición de las rutas y sus respectivos iconos
  const routes: {
    route: string;
    icon:
      | "home-outline"
      | "search"
      | "add-circle-outline"
      | "heart"
      | "person-outline";
  }[] = [
    { route: "/", icon: "home-outline" },
    { route: "/BuscarRecetas", icon: "search" },
    { route: "/CrearReceta", icon: "add-circle-outline" },
    { route: "/GuardarRecetas", icon: "heart" },
    { route: "/Auth", icon: "person-outline" },
  ];

  const handleNavigation = (
    route:
      | string
      | { pathname: `/BuscarRecetas` }
      | { pathname: `/CrearReceta` }
      | { pathname: `/DetallesRecetas` }
      | { pathname: `/GuardarRecetas` }
      | { pathname: `/` }
      | { pathname: `/Auth` },
  ) => {
    if (pathname !== route) {
      router.replace(
        route as
          | "/"
          | "/BuscarRecetas"
          | "/CrearReceta"
          | "/GuardarRecetas"
          | "/Auth",
      );
    }
  };

  return (
    <View style={styles.footer}>
      {routes.map(({ route, icon }) => (
        <Pressable key={route} onPress={() => handleNavigation(route)}>
          <Ionicons
            style={styles.icon}
            name={icon}
            size={24}
            color={pathname === route ? "#FF6347" : "black"} // Cambia color si está activa
          />
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: Platform.OS === "ios" ? "space-evenly" : "space-around",
    alignItems: "center",
    backgroundColor: "#FFDAB9",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    position: "absolute",
    bottom: 0,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  icon: {
    marginBottom: Platform.OS === "ios" ? 10 : 0,
  },
});

export default Footer;
