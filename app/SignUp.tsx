import React, { useEffect, useState } from "react";
import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Platform,
} from "react-native";
import { Input, Button } from "@rneui/themed";
import { Feather } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialIcons";
import { router } from "expo-router";
import supabase from "./utils/supabase";
import { useLocalSearchParams } from "expo-router"; // Import for handling query parameters

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const params = useLocalSearchParams();

  const handleBackPress = () => router.replace("/Auth");

  const handleSignUp = async () => {
    if (!name || !email || !password) {
      Alert.alert("Error", "Por favor, completa todos los campos.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert("Error", "Introduce un correo electrónico válido.");
      return;
    }

    if (password.length < 6 || password.length > 20) {
      Alert.alert("Error", "La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (!/\d/.test(password)) {
      Alert.alert("Error", "La contraseña debe incluir al menos un número.");
      return false;
    }

    if (!/[A-Z]/.test(password)) {
      Alert.alert(
        "Error",
        "La contraseña debe incluir al menos una letra mayúscula.",
      );
      return false;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      Alert.alert(
        "Error",
        "La contraseña debe incluir al menos un carácter especial.",
      );
      return false;
    }

    if (/\s/.test(password)) {
      Alert.alert(
        "Error",
        "La contraseña no debe contener espacios en blanco.",
      );
      return false;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: "com.ars://Auth?confirm=true", // URL de redirección después de la confirmación del correo
        },
      });

      if (error) {
        throw error;
      }

      Alert.alert("¡Éxito!", "Tu cuenta ha sido creada con éxito.");
      router.replace("/Auth"); // Redirige a la pantalla de inicio de sesión
    } catch (error) {
      const errorMessage =
        error && typeof error === "object" && "message" in error
          ? (error as { message?: string }).message
          : "No se pudo crear tu cuenta.";
      Alert.alert("Error", errorMessage || "No se pudo crear tu cuenta.");
    } finally {
      setLoading(false);
    }
  };

  // Show success alert if email confirmation is successful
  useEffect(() => {
    if (params?.confirm === "true") {
      Alert.alert("¡Éxito!", "Tu correo ha sido confirmado correctamente.");
    }
  }, [params]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Pressable
          onPress={handleBackPress}
          style={styles.backButton}
          accessibilityLabel="Volver a la pantalla principal"
        >
          <Feather name="arrow-left" size={24} color="black" />
        </Pressable>
      </SafeAreaView>
      <View style={styles.content}>
        <Text style={styles.title}>¡Es hora de cocinar!</Text>
        <Text style={styles.subtitle}>Crea una cuenta para empezar</Text>
        <Icon name="person" size={20} color="#888" style={styles.icon} />
        <Input
          style={{ left: 20 }}
          onChangeText={setName}
          value={name}
          placeholder="Nombre"
          autoComplete="name"
        />
        <Icon name="email" size={20} color="#888" style={styles.icon} />
        <Input
          style={{ left: 20 }}
          onChangeText={setEmail}
          value={email}
          placeholder="Correo electrónico"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Icon name="lock" size={20} color="#888" style={styles.icon} />
        <Input
          style={{ left: 20 }}
          onChangeText={setPassword}
          value={password}
          secureTextEntry
          placeholder="Contraseña"
          autoCapitalize="none"
        />
        <Button
          title="Registrar"
          disabled={loading}
          onPress={handleSignUp}
          containerStyle={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    paddingTop: Platform.OS === "ios" ? 20 : 60,
    backgroundColor: "#FFDAB9",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 3 },
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#333",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    marginVertical: 10,
    borderRadius: 8,
  },
  icon: {
    top: 33,
    left: 10,
  },
});
