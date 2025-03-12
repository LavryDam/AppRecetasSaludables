import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  SafeAreaView,
} from "react-native";
import Header from "./components/ui/header";
import { Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const LoginScreen = () => {
  const handleGoogleSignIn = () => {
    console.log("Iniciar sesión con Google");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <SafeAreaView>
        <Pressable>
          <Feather
            name="arrow-left"
            size={30}
            color="black"
            style={{ position: "absolute", right: 130, bottom: -68 }}
            onPress={() => router.replace("/")}
          />
        </Pressable>
      </SafeAreaView>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#aaa"
        secureTextEntry
      />

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>

      <Text style={styles.orText}>O inicia sesión con:</Text>
      <Pressable style={styles.iconButton} onPress={handleGoogleSignIn}>
        <Ionicons name="logo-google" size={25} color="black" />
      </Pressable>

      <Pressable>
        <Text style={styles.signupText}>¿No tienes cuenta? Regístrate</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#E0F8E0",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    marginTop: "10%",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFDAB9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText: {
    color: "#333",
    fontSize: 18,
    fontWeight: "bold",
  },
  orText: {
    fontSize: 16,
    color: "#333",
    marginVertical: 10,
  },
  iconButton: {
    width: 60,
    height: 60,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  icon: {
    resizeMode: "contain",
  },
  signupText: {
    color: "#333",
    fontSize: 16,
  },
  header: {
    marginRight: "45%",
    marginLeft: "20%",
  },
});
