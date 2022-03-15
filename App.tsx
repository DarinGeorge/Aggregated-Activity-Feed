import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// Amplify Configuration
import { Amplify } from "@aws-amplify/core";
import awsconfig from "./app/aws-exports";
import Navigation from "./app/screens/navigation";
import { ActivityProvider } from "./app/context";
Amplify.configure(awsconfig);

export default function App() {
  return (
    <ActivityProvider>
      <StatusBar style="auto" />
      <Navigation />
    </ActivityProvider>
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
