import React from "react";
import { Activity } from "../models";
import userActivityMethods from "./activity";

interface ActivityMethods {
  getActivity(): Promise<Activity[]>;
}

export const ActivityContext = React.createContext<ActivityMethods>({
  getActivity: async () => [],
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
