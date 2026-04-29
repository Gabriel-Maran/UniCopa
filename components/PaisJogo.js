import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import FLAGS from "../data/countryImages.js";

export default function PaisJogo({ sigla }) {
  return (
    <View style={styles.paisJogo}>
      <Image source={FLAGS[sigla]} style={styles.imageUniCopa} />
      <Text style={styles.textPais}>{sigla}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imageUniCopa: {
    width: 35,
    height: 35,
  },
  paisJogo: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
  },
  textPais: {
    color: "#fff",
    textAlign: "center",
    width: "70%",
    alignSelf: "center",
  },
});
