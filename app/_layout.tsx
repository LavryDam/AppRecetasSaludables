import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
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
          options={{ title: "", headerShown: false }}
        />
        <Stack.Screen
          name="CrearReceta"
          options={{ title: "", headerShown: true }}
        />
        <Stack.Screen
          name="DetallesRecetas"
          options={{ title: "", headerShown: false }}
        />
        <Stack.Screen
          name="GuardarRecetas"
          options={{ title: "", headerShown: false }}
        />
        <Stack.Screen
          name="loginScreen"
          options={{ title: "", headerShown: false }}
        />
      </Stack>
    </>
  );
}
