import React from "react";
import { SectionList, ListRenderItemInfo } from "react-native";
import { ActivityContext } from "../context";
import { GroupedActivity, SectionedActivity } from "../../types";
import ActivityItem from "../components/containers/ActivityItem";

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

  if (!activity) return null;
  return <SectionList {...{ renderItem }} sections={activity} />;
}
