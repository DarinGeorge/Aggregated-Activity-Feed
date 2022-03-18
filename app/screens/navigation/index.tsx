// Package Imports
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screen Imports
import Home from "../Home";
import ActivityModal from "../ActivityModal";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="You have new activity!" component={Home} />

        <Stack.Group
          screenOptions={{ presentation: "modal", orientation: "portrait_up" }}
        >
          <Stack.Screen name="Activity" component={ActivityModal} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
