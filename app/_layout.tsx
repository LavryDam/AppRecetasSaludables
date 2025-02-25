import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import Footer from "../app/components/ui/footer";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" options={{ title: "" }} />
        <Stack.Screen name="BuscarRecetas" options={{ title: "" }} />
        <Stack.Screen name="DetallesRecetas" options={{ title: "" }} />
        <Stack.Screen name="GuardarRecetas" options={{ title: "" }} />
      </Stack>
      <Footer />
    </>
  );
}
