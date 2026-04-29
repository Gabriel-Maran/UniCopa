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
    borderWidth: 1,
    backgroundColor: "#072341",
    borderColor: "#2c4664",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  textDia: {
    color: "#F0C62D",
    fontSize: 18,
    fontWeight: "700",
    width: "100%",
    alignSelf: "center",
    paddingBottom: 15,
    paddingTop: 10,
    paddingHorizontal: 5,
  },
});
