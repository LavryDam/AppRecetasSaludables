import React, { useEffect, useState } from "react";
import {
  Alert,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { supabase } from "./utils/supabase";
import { Button, Input } from "@rneui/themed";
import { Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Session } from "@supabase/supabase-js";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState<Session | null>(null);

  // Initialize session state and listen for auth state changes
  // This will set the session when the component mounts and update it on auth state changes
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const handleBackPress = () => router.replace("/");

  const handleSignIn = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) Alert.alert("Error", error.message);
    setLoading(false);
  };

  const handleSignUp = async () => {
    router.push("/SignUp");
  };

  type SocialButtonProps = {
    onPress: () => void;
    icon: React.ReactNode;
    label: string;
    color: string;
  };

  const SocialButton: React.FC<SocialButtonProps> = ({
    onPress,
    icon,
    label,
    color,
  }) => (
    <Pressable
      style={[styles.socialButton, { backgroundColor: color }]}
      onPress={onPress}
      accessibilityRole="button"
    >
      {icon}
      <Text style={styles.socialButtonText}>{label}</Text>
    </Pressable>
  );

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
        <Text style={styles.title}>Hola Yummy</Text>
        <Text style={styles.subtitle}>Inicia sesión para continuar</Text>
        <Icon name="email" size={20} color="#888" style={styles.icon} />
        {session && session.user && <Text>{session.user.id}</Text>}
        <Input
          style={{ left: 20 }}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          autoComplete="email"
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
          title="Iniciar Sesión"
          disabled={loading}
          onPress={handleSignIn}
          containerStyle={styles.button}
        />
        <Button
          title="Registrarse"
          disabled={loading}
          onPress={handleSignUp}
          containerStyle={styles.button}
        />
        <Text style={styles.orText}>O inicia sesión con:</Text>
        <SocialButton
          onPress={() => Alert.alert("Google Sign In")}
          icon={<Ionicons name="logo-google" size={20} color="#fff" />}
          label="Continuar con Google"
          color="#DB4437"
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
  orText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginVertical: 15,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  socialButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 10,
  },
  icon: {
    top: 33,
    left: 10,
  },
});
