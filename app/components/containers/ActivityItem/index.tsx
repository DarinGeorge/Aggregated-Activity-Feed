import { View, Text } from "react-native";
import React from "react";
import { GroupedActivity } from "../../../../types";
import { Activity, ActivityVerbs } from "../../../models";
import { styles } from "./styles";

interface ActivityItemProps {
  item: GroupedActivity;
}

type ActivityItemState = ActivityItemProps & {
  text: string;
  image: string | string[];
};

/** Class Components to make the list item compatible with animations
 * like createAnimatedComponent() for list animation or for use in older applications.
 */

export default class ActivityItem extends React.Component<
  ActivityItemProps,
  ActivityItemState
> {
  constructor(props: ActivityItemProps) {
    super(props);
    this.state = {
      item: props.item,
      text: "",
      image: "",
    };
  }

  renderActivity(item: GroupedActivity) {
    const actions: Activity[] = item.actions;
    const users: (string | undefined)[] = actions.map(
      (a: Activity) => a.actor?.alias
    );
    const singleUserAction: boolean = actions.length === 1;
    const singleAction: Activity = actions[0];

    if (!actions || actions.length === 0) return;

    switch (item.verb) {
      case ActivityVerbs.FOLLOW: {
        // Only 1 Action in the array
        if (singleUserAction) {
          return (
            <View style={styles.activityRow}>
              <Text>
                {singleAction.actor?.alias} {singleAction.verb?.toLowerCase()}ed
                you.
              </Text>
            </View>
          );
        }

        // Multiple Actions in the array
        return (
          <View style={styles.activityRow}>
            <Text>{`${users[0]} and ${
              actions.length > 3 ? "3+" : actions.length
            } others ${item.verb.toLowerCase()}ed you.`}</Text>
          </View>
        );
      }

      case ActivityVerbs.DIRECT_MESSAGE: {
        // Only 1 Action in the array
        if (singleUserAction) {
          return (
            <View style={styles.activityRow}>
              <Text>{singleAction.actor?.alias} sent a new message.</Text>
            </View>
          );
        }

        // Multiple Actions in the array
        return (
          <View style={styles.activityRow}>
            <Text>{`${users[0]} sent ${
              actions.length > 3 ? "3+" : actions.length
            } new messages.`}</Text>
          </View>
        );
      }

      case ActivityVerbs.COLLAB: {
        // Only 1 Action in the array
        if (singleUserAction) {
          return (
            <View style={styles.activityRow}>
              <Text>
                {singleAction.actor?.alias} wants to collaborate with you.
              </Text>
            </View>
          );
        }

        // Multiple Actions in the array
        return (
          <View style={styles.activityRow}>
            <Text>{`${users[0]} sent ${
              actions.length > 3 ? "3+" : actions.length
            } new collaboration requests.`}</Text>
          </View>
        );
      }

      case ActivityVerbs.EVENT: {
        // Only 1 Action in the array
        if (singleUserAction) {
          return (
            <View style={styles.activityRow}>
              <Text>
                {singleAction.actor?.alias} posted an event. Want to go?
              </Text>
            </View>
          );
        }

        // Multiple Actions in the array
        return (
          <View style={styles.activityRow}>
            <Text>{`${users[0]} sent ${
              actions.length > 3 ? "3+" : actions.length
            } new collaboration requests.`}</Text>
          </View>
        );
      }

      case ActivityVerbs.LIKE: {
        // Only 1 Action in the array
        if (singleUserAction) {
          return (
            <View style={styles.activityRow}>
              <Text>{singleAction.actor?.alias} liked your post.</Text>
            </View>
          );
        }

        // Multiple Actions in the array
        return (
          <View style={styles.activityRow}>
            <Text>
              {actions.length == 2
                ? `${users[0]} and ${
                    users[1]
                  } ${item.verb.toLowerCase()}d your post.`
                : actions.length > 2 &&
                  `${users[0]}, ${users[1]} and ${
                    actions.length - 2
                  }+ others ${item.verb.toLowerCase()}d your post.`}
            </Text>
          </View>
        );
      }

      case ActivityVerbs.SUCCESSFUL_UPLOAD_POST: {
        // Only 1 Action in the array
        if (singleUserAction) {
          return (
            <View style={styles.activityRow}>
              <Text>Your post was uploaded successfully.</Text>
            </View>
          );
        }

        // Multiple Actions in the array
        return (
          <View style={styles.activityRow}>
            <Text>Your posts were uploaded successfully.</Text>
          </View>
        );
      }

      case ActivityVerbs.FAILED_UPLOAD_POST: {
        // Only 1 Action in the array
        if (singleUserAction) {
          return (
            <View style={styles.activityRow}>
              <Text>Your post failed to upload. Tap to retry.</Text>
            </View>
          );
        }

        // Multiple Actions in the array
        return (
          <View style={styles.activityRow}>
            <Text>Your posts failed to upload. Tap to retry.</Text>
          </View>
        );
      }

      case ActivityVerbs.TICKET_PUCHASE: {
        // Only 1 Action in the array
        if (singleUserAction) {
          return (
            <View style={styles.activityRow}>
              <Text>
                You purchased a ticket to {singleAction.actor?.alias}'s event.
              </Text>
            </View>
          );
        }

        // Multiple Actions in the array
        return (
          <View style={styles.activityRow}>
            <Text>{`You purchased ${
              actions.length > 3 ? "3+" : actions.length
            } tickets to an event.`}</Text>
          </View>
        );
      }
      default:
        break;
    }
  }

  render(): React.ReactNode {
    return (
      <View style={styles.wrapper}>{this.renderActivity(this.state.item)}</View>
    );
  }
}
