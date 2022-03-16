import { View, Text } from "react-native";
import React from "react";
import { Activity } from "../../models";

interface ActivityItemProps {
  item: Activity;
}

type ActivityItemState = ActivityItemProps;

/** Class Components to make the list item compatible with animations
 * like createAnimatedComponent() or for use in older applications.
 */

export default class ActivityItem extends React.Component<
  ActivityItemProps,
  ActivityItemState
> {
  constructor(props: ActivityItemProps) {
    super(props);
    this.state = {
      item: props.item,
    };
  }

  render(): React.ReactNode {
    return (
      <View>
        <Text>{this.state.item}</Text>
      </View>
    );
  }
}
