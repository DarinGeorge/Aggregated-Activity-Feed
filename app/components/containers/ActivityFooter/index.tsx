import { View, Text } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";

export default function ActivityFooter() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>All Caught Up!</Text>
      <Feather name="check-circle" size={24} color="lightgreen" />
    </View>
  );
}
