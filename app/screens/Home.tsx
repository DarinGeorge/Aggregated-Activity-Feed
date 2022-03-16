import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types";

export default function Home() {
  const nav = useNavigation<RootStackParamList>();

  const onPress = () => {
    nav.navigate("Activity");
  };

  return (
    <View style={styles.container}>
      <Button onPress={onPress} title="View Activity" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
