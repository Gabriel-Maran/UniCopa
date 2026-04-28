import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import Jogo from "./components/Jogo";

//<Image source={require("./assets/abkhazia.png")}/>
export default function App() {
  const [dadosCopa, setDadosCopa] = useState([]);
  const [jogosDiarios, setJogosDiarios] = useState([]);

  useEffect(() => {
    const dados = require("./data/copa_mundo_2026_jogos_brasilia_com_estadios.json");
    setDadosCopa(dados);
    //Tratar dados por dia...
    let mapDias = {};
    let jogos = dados.jogos;
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("./assets/unicopa.png")}
          style={styles.imageUniCopa}
        />
      </View>
      <View style={styles.main}>
        <Text
          style={{
            fontWeight: "700",
            color: "#fff",
            fontSize: 26,
          }}
        >
          CALENDÁRIO
        </Text>
        <FlatList
          data={dadosCopa.jogos}
          renderItem={({ item }) => {
            return <Jogo item={item} />;
          }}
          keyExtractor={(item) => item.id}
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
    width: "90%",
    alignItems: "center",
  },
  listaJogos: {
    width: "90%",
  },
});
