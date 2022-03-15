import React from "react";
import { View, Text } from "react-native";
import { ActivityContext } from "../context";
import { Activity } from "../models";

export default function ActivityModal() {
  const { getActivity } = React.useContext(ActivityContext);
  const [activity, setData] = React.useState<Activity[]>();

  React.useEffect(() => {
    onMount();
  }, []);

  React.useEffect(() => {
    // mark activity seen in backend
  }, []);

  const onMount = async () => {
    await getActivity().then(setData);
    // Group the activity by the verb
  };

  return (
    <View>
      <Text>{JSON.stringify(activity)}</Text>
    </View>
  );
}
