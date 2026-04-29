import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import Jogo from "../components/Jogo";
import JogosDia from "../components/JogosDia";
import { getDadosCopa, getJogosDiarios } from "../controller/PaisController.js";

export default function App() {
  const [dadosCopa, setDadosCopa] = useState([]);
  const [jogosDiarios, setJogosDiarios] = useState([]);
  const [nomeImagePais, setNomeImagePais] = useState([]);
  useEffect(() => {
    const dados = getDadosCopa();
    setDadosCopa(dados);
    const jogosPorDia = getJogosDiarios();
    setJogosDiarios(jogosPorDia);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/unicopa.png")}
          style={styles.imageUniCopa}
        />
      </View>
      <View style={styles.main}>
        <Text style={styles.textCalendario}>CALENDÁRIO</Text>
        <FlatList
          data={Object.values(jogosDiarios)}
          renderItem={({ item }) => {
            return <JogosDia jogos={item} />;
          }}
          keyExtractor={(item) => item[0].data_brasilia}
          style={styles.listaJogos}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D253F",
    alignItems: "center",
    width: "100%",
  },
  header: {
    marginTop: 40,
  },
  imageUniCopa: {
    width: 180,
    height: 54,
  },
  main: {
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 15,
    alignItems: "center",
  },
  listaJogos: {
    width: "97%",
    marginTop: 20,
  },
  textCalendario: {
    fontWeight: "700",
    color: "#fff",
    fontSize: 26,
  },
});
