// Package Imports
import { DataStore, SortDirection } from "aws-amplify";
import { GroupedActivity, SectionedActivity } from "../../types";
import { ActivityStatus } from "../models";

// Local Imports
import { Activity } from "../models";
import uuid from "react-native-uuid";

export default function userActivityMethods() {
  const getActivity = async () => {
    return await DataStore.query(Activity, undefined, {
      sort: (s) => s.createdAt(SortDirection.DESCENDING),
    });
  };

  const groupActivity = async (array: Activity[]) => {
    const result = array.reduce<SectionedActivity[]>((grouped, current) => {
      let statusGroup = grouped.find((sa) => sa.title === current.status);
      let verbGroup = statusGroup?.data.find(
        (ga) => ga?.group === current.group
      );

      if (!statusGroup) {
        statusGroup = {
          title: current.status,
          data: [],
          orderNumber:
            current.status === ActivityStatus.UNSEEN
              ? 0
              : current.status === ActivityStatus.SEEN
              ? 1
              : 2,
        };

        grouped.push(statusGroup);
      }

      if (statusGroup && !verbGroup && current.group) {
        verbGroup = {
          id: uuid.v4().toString(),
          group: current.group,
          actions: [],
          verb: current.verb,
        };

        statusGroup.data.push(verbGroup);
      }

      if (verbGroup) {
        const verbs = verbGroup as GroupedActivity;
        verbs.actions.push(current);
        verbs.actions.sort((a, b) =>
          // if a & b createdAt exists then sort by them, else return -1
          a.createdAt && b.createdAt
            ? a.createdAt < b.createdAt
              ? -1
              : a.createdAt > b.createdAt
              ? 1
              : 0
            : -1
        );
      }

      grouped.sort((a, b) => a.orderNumber - b.orderNumber);

      return grouped;
    }, []);

    return result;
  };

  return { getActivity, groupActivity };
}
