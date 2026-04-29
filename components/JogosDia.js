import { StyleSheet, Text, View } from "react-native";
import Jogo from "./Jogo.js";

export default function JogosPorDia({ jogos }) {
  const [ano, mes, dia] = jogos[0].data_brasilia.split("-");
  return (
    <View style={styles.container}>
      <Text style={styles.textDia}>
        {dia}/{mes}
      </Text>
      {jogos.map((item) => (
        <Jogo key={item.id.toString()} item={item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  textDia: {
    color: "#F0C62D",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },
});
