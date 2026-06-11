import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        style={styles.background}
        contentContainerStyle={styles.container}
      >
        <Text style={styles.titulo}>1MD2</Text>

        <View style={styles.card}>
          <Text style={styles.subtitulo}>Primeiro Ano</Text>
          <Text style={styles.descricao}>
            Auxiliar Técnico em Desenvolvimento de Sistemas.
          </Text>
        </View>

        <Text style={styles.textoFundo}>Arraste para ver mais</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#4f398a",
  },
  container: {
    flexGrow: 1,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  titulo: {
    color: "#1d0627",
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 2,
    marginBottom: 10,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 20,
    borderRadius: 15,
    width: "100%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#291955",
  },
  subtitulo: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "600",
  },
  descricao: {
    color: "#ccc",
    textAlign: "center",
    marginTop: 10,
    lineHeight: 22,
  },
  textoFundo: {
    color: "#0a0000",
    fontSize: 12,
    marginTop: 20,
    textTransform: "uppercase",
  },
});
