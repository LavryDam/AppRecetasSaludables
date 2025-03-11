import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const img = require("../../../assets/images/splash.png");

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={img}
        style={{ width: 110, height: 80, borderRadius: 20 }}
      />
      <Text style={[styles.title, styles.regular]}>
        Recetas Saludables e Internacionales
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "10%",
    paddingRight: "25%",
    marginTop: 55,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  regular: {
    fontFamily: "Montserrat-Regular",
  },
});

export default Header;
