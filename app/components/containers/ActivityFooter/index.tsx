import { View, Text } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ActivityFooter() {
  const { bottom } = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingBottom: bottom + 50 }]}>
      <Text style={styles.text}>All Caught Up!</Text>
      <Feather name="check-circle" size={24} color="lightgreen" />
    </View>
  );
}
