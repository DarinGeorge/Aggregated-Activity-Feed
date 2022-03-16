import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Activity, ActivityStatus, ActivityVerbs } from "./app/models";

export type RootStackParamList = NativeStackNavigationProp<{
  Home: undefined;
  Activity: undefined;
}>;

export type SectionedActivity = {
  title: ActivityStatus | keyof typeof ActivityStatus | undefined;
  data: GroupedActivity[];
  orderNumber: number;
};

export type GroupedActivity = {
  id: string;
  group: string;
  actions: Activity[];
  verb: ActivityVerbs | keyof typeof ActivityVerbs | undefined;
};
