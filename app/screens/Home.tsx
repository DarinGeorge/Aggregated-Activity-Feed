import React from "react";
import { View, Text } from "react-native";

export default function ActivityModal() {
  React.useEffect(() => {
    onMount();
  }, []);

  React.useEffect(() => {
    // mark activity seen in backend
  }, []);

  const onMount = () => {
    // Get Activity..
    // Group the activity by the verb
  };

  return (
    <View>
      <Text>Activity Screen</Text>
    </View>
  );
}
