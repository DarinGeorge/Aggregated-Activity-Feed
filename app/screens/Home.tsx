import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types";
import Lottie from "lottie-react-native";

export default function Home() {
  const bellRef = React.useRef<Lottie>(null);
  const nav = useNavigation<RootStackParamList>();

  React.useEffect(() => {
    bellRef.current?.play();
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
