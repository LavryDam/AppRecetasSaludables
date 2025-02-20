import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const img = require("../../../assets/images/libroCocina.jpg");

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={img}
        style={{ width: 100, height: 100, borderRadius: 20 }}
      />
      <Text style={[styles.title, styles.regular]}>Yummy Yummy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    gap: 15,
  },
  title: {
    fontSize: 24,
  },
  regular: {
    fontFamily: "Montserrat-Regular",
  },
});

export default Header;
