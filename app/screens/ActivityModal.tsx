import React from "react";
import { SectionList, ListRenderItemInfo, View } from "react-native";
import { ActivityContext } from "../context";
import { GroupedActivity, SectionedActivity } from "../../types";
import ActivityItem from "../components/containers/ActivityItem";
import ActivityFooter from "../components/containers/ActivityFooter";

export default function ActivityModal() {
  const { getActivity, groupActivity } = React.useContext(ActivityContext);
  const [activity, setData] = React.useState<SectionedActivity[]>();

  React.useEffect(() => {
    onMount();
  }, []);

  React.useEffect(() => {
    // mark activity seen in backend
  }, []);

  const onMount = async () => {
    // Get activity from the backend and then group it by verb and set to state.
    await getActivity().then(
      async (response) => await groupActivity(response).then(setData)
    );
  };

  const renderItem = ({ item }: ListRenderItemInfo<GroupedActivity>) => {
    return <ActivityItem {...{ item }} />;
  };

  const ListFooterComponent = () => <ActivityFooter />;

  if (!activity) return null;
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <SectionList
        {...{ renderItem, ListFooterComponent }}
        sections={activity}
      />
    </View>
  );
}
