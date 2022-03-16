import { DataStore } from "aws-amplify";
import { format } from "date-fns";
import React from "react";
import { View, Text, SectionList } from "react-native";
import { ActivityContext } from "../context";
import { ActivityVerbs } from "../models";
import { ActivityStatus } from "../models";
import { Activity } from "../models";
import uuid from "react-native-uuid";

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

  return <SectionList sections={activity} />;
}
