// Package Imports
import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Local Imports
import { styles } from "./styles";

export default function ActivityFooter() {
  const { bottom } = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingBottom: bottom + 50 }]}>
      <Text style={styles.text}>All Caught Up!</Text>
      <Feather name="check-circle" size={24} color="lightgreen" />
    </View>
  );
}
