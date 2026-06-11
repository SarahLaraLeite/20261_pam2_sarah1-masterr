import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        style={styles.background}
        contentContainerStyle={styles.container}
      >
        <Text style={styles.titulo}>3MD2</Text>

        <View style={styles.card}>
          <Text style={styles.subtitulo}>Terceiro Ano</Text>
          <Text style={styles.descricao}>
            Técnico em Desenvolvimento de Sistemas.
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
    backgroundColor: "#d6c879",
  },
  container: {
    flexGrow: 1,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  titulo: {
    color: "#08001d",
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
    borderColor: "#ac9d47",
  },
  subtitulo: {
    color: "#290000",
    fontSize: 20,
    fontWeight: "600",
  },
  descricao: {
    color: "#1b0000",
    textAlign: "center",
    marginTop: 10,
    lineHeight: 22,
  },
  textoFundo: {
    color: "#140000",
    fontSize: 12,
    marginTop: 20,
    textTransform: "uppercase",
  },
});
