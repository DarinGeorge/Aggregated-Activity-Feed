// Package Imports
import { DataStore, SortDirection } from "aws-amplify";

// Local Imports
import { Activity } from "../models";

export default function userActivityMethods() {
  const getActivity = async () => {
    return await DataStore.query(Activity, undefined, {
      sort: (s) => s.createdAt(SortDirection.DESCENDING),
    });
  };

  return { getActivity };
}
