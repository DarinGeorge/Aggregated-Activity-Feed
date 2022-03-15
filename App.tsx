import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// Amplify Configuration
import { Amplify } from "@aws-amplify/core";
import awsconfig from "./app/aws-exports";
Amplify.configure(awsconfig);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
