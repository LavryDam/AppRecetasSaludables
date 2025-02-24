import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#FFDAB9",
          },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontSize: 18,
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen
          name="BuscarRecetas"
          options={{ title: "BuscarRecetas" }}
        />
        <Stack.Screen
          name="DetallesRecetas"
          options={{ title: "DetallesRecetas" }}
        />
        <Stack.Screen
          name="GuardarRecetas"
          options={{ title: "GuardarRecetas" }}
        />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
