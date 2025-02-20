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
          title: " ",
        }}
      />
      <StatusBar style="auto" />
    </>
  );
}
