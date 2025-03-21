import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  SafeAreaView,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const LoginScreen = () => {
  const handleGoogleSignIn = () => {
    alert("Google Sign In");
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.backContainer}>
        <Pressable onPress={() => router.replace("/")}>
          <Feather name="arrow-left" size={30} color="black" />
        </Pressable>
        <Text style={styles.backText}>Volver</Text>
      </SafeAreaView>
      <Text style={styles.title}>Hola Yummy</Text>
      <Text style={styles.subtitle}>Inicia sesión para continuar</Text>
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
        <Text style={styles.buttonText}>Iniciar</Text>
      </Pressable>
      <Text style={styles.orText}>O inicia sesión con:</Text>
      <Pressable style={styles.googleButton} onPress={handleGoogleSignIn}>
        <Ionicons name="logo-google" size={20} color="#fff" />
        <Text style={styles.googleButtonText}>Continuar con Google</Text>
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
    backgroundColor: "#E0F8E0",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 80,
  },
  backContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 20,
    left: 20,
  },
  backText: {
    fontSize: 20,
    marginLeft: 8,
    color: "#333",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 15,
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
    marginBottom: 20,
  },
  buttonText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    fontSize: 16,
    color: "#333",
    marginVertical: 10,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
    backgroundColor: "#DB4437",
    borderRadius: 8,
    marginBottom: 20,
  },
  googleButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 10,
  },
  signupText: {
    color: "#007BFF",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
