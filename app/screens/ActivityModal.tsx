// Package Imports
import React from "react";
import {
  SectionList,
  ListRenderItemInfo,
  View,
  StyleSheet,
} from "react-native";

// Local Imports
import { ActivityContext } from "../context";
import { GroupedActivity, SectionedActivity } from "../../types";
import ActivityItem from "../components/containers/ActivityItem";
import ActivityFooter from "../components/containers/ActivityFooter";
import { Activity } from "../models";

export default function ActivityModal() {
  const { getActivity, groupActivity } = React.useContext(ActivityContext);
  const [activity, setData] = React.useState<SectionedActivity[]>();

  React.useEffect(() => {
    onMount();
  }, []);

  React.useEffect(() => {
    // TODO: Next feature - mark activity seen in backend
  }, []);

  const onMount = async () => {
    // Get activity from the backend and then group it by verb and set to state.
    await getActivity().then(
      async (response) => await groupActivity(response).then(setData)
    );
  };

  const renderItem = ({ item }: ListRenderItemInfo<GroupedActivity>) => {
    return <ActivityItem key={item.id} {...{ item }} />;
  };

  const ListFooterComponent = () => <ActivityFooter />;

  const keyExtractor = (item: Activity) => item.id;

  if (!activity) return null;
  return (
    <View style={styles.sectionContainer}>
      <SectionList
        {...{ renderItem, ListFooterComponent, keyExtractor }}
        sections={activity}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: { flex: 1, backgroundColor: "white" },
});
