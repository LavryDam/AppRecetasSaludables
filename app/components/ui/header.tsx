import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const img = require("../../../assets/images/splash.png");

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={img}
        style={{ width: 130, height: 90, borderRadius: 20 }}
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
    paddingLeft: "20%",
    paddingRight: "30%",
    marginTop: 5,
  },
  title: {
    fontSize: 20,
  },
  regular: {
    fontFamily: "Montserrat-Regular",
  },
});

export default Header;
