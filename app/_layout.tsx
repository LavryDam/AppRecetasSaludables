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
          headerShown: true, // Mostrar encabezado
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BuscarRecetas"
          options={{
            title: "",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CrearReceta"
          options={{
            title: "",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DetallesRecetas"
          options={{
            title: "",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="GuardarRecetas"
          options={{
            title: "",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="loginScreen"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
