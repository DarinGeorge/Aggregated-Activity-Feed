// Package Imports
import React from "react";

// Local Imports
import { SectionedActivity } from "../../types";
import { Activity } from "../models";
import userActivityMethods from "./activity";

interface ActivityMethods {
  getActivity(): Promise<Activity[]>;
  groupActivity(array: Activity[]): Promise<SectionedActivity[]>;
}

export const ActivityContext = React.createContext<ActivityMethods>({
  getActivity: async () => [],
  groupActivity: async () => [],
});

interface AuthProps {
  children: React.ReactNode;
}

export const ActivityProvider = ({ children }: AuthProps) => {
  const value = userActivityMethods();

  return (
    <ActivityContext.Provider {...{ value }}>
      {children}
    </ActivityContext.Provider>
  );
};
