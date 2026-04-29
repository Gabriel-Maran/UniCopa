import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import FLAGS from "../data/countryImages.js";
import PaisJogo from "./PaisJogo.js";

//<Image source={require("./assets/abkhazia.png")}/>
export default function Jogo({ item }) {
  const [nomeImagePais, setNomeImagePais] = useState([]);
  useEffect(() => {
    const dados = require("../data/copa_mundo_2026_jogos_brasilia_com_estadios.json");
    setNomeImagePais(dados);
  }, []);
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", width: "100%" }}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 5,
    padding: 15,
  },
  textTop: {
    color: "#92A9B9",
    fontSize: 11,
    fontWeight: "700",
  },
  viewPais: {
    flexDirection: "row",
    width: "100%",
    padding: 10,
  },
  textHorarioJogo: {
    flex: 1,
  },
  textJogoCenter: {
    color: "#fff",
    textAlign: "center",
  },
});
