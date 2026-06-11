import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        style={styles.background}
        contentContainerStyle={styles.container}
      >
        <Text style={styles.titulo}>ETEC Adolpho Berezin</Text>

        <View style={styles.card}>
          <Text style={styles.subtitulo}>Desenvolvimento de Sistemas</Text>
          <Text style={styles.descricao}>
            Curso completo para desenvolvedores desktop, web e mobile
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
    backgroundColor: "#001a33",
  },
  container: {
    flexGrow: 1,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  titulo: {
    color: "#00d4ff",
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
    borderColor: "#00d4ff",
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
    color: "#555",
    fontSize: 12,
    marginTop: 20,
    textTransform: "uppercase",
  },
});
