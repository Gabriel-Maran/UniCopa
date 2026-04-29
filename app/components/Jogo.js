import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import PaisJogo from "./PaisJogo.js";

export default function Jogo({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.viewTextTop}>
        <Text style={[styles.textTop, { marginRight: 15 }]}>
          GRUPO {item.grupo}
        </Text>
        <Text style={styles.textTop}>{item.confronto}</Text>
      </View>
      <View style={styles.viewPais}>
        <PaisJogo sigla={item.sigla_casa} />
        <View style={styles.textHorarioJogo}>
          <Text style={styles.textJogoCenter}>{item.hora_et}</Text>
          <Text style={styles.textJogoCenter}>VS</Text>
        </View>
        <PaisJogo sigla={item.sigla_fora} />
      </View>
      <View style={styles.detalhesJogo}>
        <Text style={[styles.textInfoJogo, { width: "35%" }]}>
          {item.estadio}
        </Text>

        <Text
          style={[styles.textInfoJogo, { textAlign: "right", width: "65%" }]}
        >
          {item.cidade} • {item.pais}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 5,
    borderTopWidth: 1,
    borderTopColor: "#2e4c6e",
  },
  textTop: {
    color: "#92A9B9",
    fontSize: 11,
    fontWeight: "700",
  },
  viewPais: {
    flexDirection: "row",
    width: "100%",
    padding: 11,
  },
  textHorarioJogo: {
    flex: 1,
  },
  textJogoCenter: {
    color: "#fff",
    textAlign: "center",
  },
  detalhesJogo: {
    flexDirection: "row",
    width: "100%",
  },
  textInfoJogo: {
    borderTopWidth: 1,
    borderTopColor: "#2e4c6e",
    paddingTop: 5,
    paddingHorizontal: 5,
    color: "#92A9B9",
    fontSize: 10,
    fontWeight: "700",
    flex: 1,
  },
  viewTextTop: {
    flexDirection: "row",
    width: "100%",
    padding: 8,
  },
});
