// Package Imports
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Lottie from "lottie-react-native";

// Local Imports
import { RootStackParamList } from "../../types";

export default function Home() {
  const bellRef = React.useRef<Lottie>(null);
  const nav = useNavigation<RootStackParamList>();

  React.useEffect(() => {
    setTimeout(() => {
      bellRef.current?.play();
    }, 100);
  }, []);

  const onPress = () => {
    nav.navigate("Activity");
  };

  const bell = require("../../assets/lotties/bell.json");

  return (
    <View style={styles.container}>
      <TouchableOpacity {...{ onPress }}>
        <Lottie
          ref={bellRef}
          source={bell}
          style={{ width: 300, height: 300 }}
          speed={2}
          autoPlay
        />
      </TouchableOpacity>
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
