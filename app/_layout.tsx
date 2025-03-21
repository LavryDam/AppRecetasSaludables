import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen
          name="index"
          options={{ title: "", headerShown: false }}
        />
        <Stack.Screen
          name="BuscarRecetas"
          options={{
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: "#FFDAB9" },
          }}
        />
        <Stack.Screen
          name="CrearReceta"
          options={{
            title: "Nueva receta",
            headerShown: true,
            headerStyle: { backgroundColor: "#FFDAB9" },
            headerTintColor: "#333",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="DetallesRecetas"
          options={{ title: "Nueva Receta", headerShown: false }}
        />
        <Stack.Screen
          name="GuardarRecetas"
          options={{ title: "", headerShown: false }}
        />
        <Stack.Screen
          name="loginScreen"
          options={{
            title: "Inicio sesión",
            headerShown: true,
            headerStyle: { backgroundColor: "#FFDAB9" },
            headerTintColor: "#333",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
          }}
        />
      </Stack>
    </>
  );
}
