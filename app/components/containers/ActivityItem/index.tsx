import { View, Text, Button } from "react-native";
import React from "react";
import { GroupedActivity } from "../../../../types";
import { Activity, ActivityActor, ActivityVerbs } from "../../../models";
import { styles } from "./styles";
import Avatar from "../../Avatar";
import { FontAwesome } from "@expo/vector-icons";
import { formatDistanceToNow } from "date-fns";

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

  private removeActorDuplicatesAndGetURI(array: Activity[]) {
    const actors = array.map((a: Activity) => a.actor);
    const filteredActors: (ActivityActor | undefined)[] = [];

    actors.filter((item) => {
      const found = filteredActors.find((a) => a?.alias === item?.alias);

      if (found) return;
      else filteredActors.push(item);
    });

    return filteredActors.map((fa) => fa?.profileImage);
  }

  private renderActivity(item: GroupedActivity) {
    const actions: Activity[] = item.actions;
    const names: (string | undefined)[] = actions.map(
      (a: Activity) => a.actor?.alias
    );
    const images = this.removeActorDuplicatesAndGetURI(actions);
    const singleUserAction: boolean = actions.length === 1;
    const singleAction: Activity = actions[0];

    if (!actions || actions.length === 0) return;

    switch (item.verb) {
      case ActivityVerbs.FOLLOW: {
        // Only 1 Action in the array
        if (singleUserAction) {
          return (
            <View style={styles.activityRow}>
              <View style={styles.left}>
                <Avatar uri={images[0]} />
                <View>
                  <Text style={styles.actionText}>
                    {singleAction.actor?.alias}{" "}
                    {singleAction.verb?.toLowerCase()}
                    ed you.
                  </Text>
                  <Text style={styles.timeDistance}>
                    {singleAction.createdAt &&
                      formatDistanceToNow(new Date(singleAction.createdAt), {
                        addSuffix: true,
                      })}
                  </Text>
                </View>
              </View>
            </View>
          );
        }

        // Multiple Actions in the array
        return (
          <View style={styles.activityRow}>
            <View style={styles.left}>
              <Avatar uri={images} />
              <View>
                <Text style={styles.actionText}>{`${names[0]} and ${
                  actions.length > 3 ? "3+" : actions.length
                } others ${item.verb.toLowerCase()}ed you.`}</Text>
                <Text style={styles.timeDistance}>
                  {actions[0].createdAt &&
                    formatDistanceToNow(new Date(actions[0].createdAt), {
                      addSuffix: true,
                    })}
                </Text>
              </View>
            </View>
          </View>
        );
      }

      case ActivityVerbs.DIRECT_MESSAGE: {
        // Only 1 Action in the array
        if (singleUserAction) {
          return (
            <View style={styles.activityRow}>
              <Avatar uri={images[0]} />
              <View>
                <Text style={styles.actionText}>
                  {singleAction.actor?.alias} sent a new message.
                </Text>
                <Text style={styles.timeDistance}>
                  {singleAction.createdAt &&
                    formatDistanceToNow(new Date(singleAction.createdAt), {
                      addSuffix: true,
                    })}
                </Text>
              </View>
              <View style={styles.btn}>
                <Button onPress={() => null} title="VIEW" color="black" />
              </View>
            </View>
          );
        }

        // Multiple Actions in the array
        return (
          <View style={styles.activityRow}>
            <Avatar uri={images} disableBorders />
            <View>
              <Text style={styles.actionText}>{`${names[0]} sent ${
                actions.length > 3 ? "3+" : actions.length
              } new messages.`}</Text>
              <Text style={styles.timeDistance}>
                {actions[0].createdAt &&
                  formatDistanceToNow(new Date(actions[0].createdAt), {
                    addSuffix: true,
                  })}
              </Text>
            </View>
            <View style={styles.btn}>
              <Button onPress={() => null} title="VIEW" color="black" />
            </View>
          </View>
        );
      }

      case ActivityVerbs.COLLAB: {
        // Only 1 Action in the array
        if (singleUserAction) {
          return (
            <View style={styles.activityRow}>
              <View style={styles.left}>
                <Avatar uri={images[0]} />
                <View>
                  <Text style={styles.actionText}>
                    {singleAction.actor?.alias} wants to collaborate.
                  </Text>
                  <Text style={styles.timeDistance}>
                    {singleAction.createdAt &&
                      formatDistanceToNow(new Date(singleAction.createdAt), {
                        addSuffix: true,
                      })}
                  </Text>
                </View>
              </View>
              <View style={styles.btn}>
                <Button onPress={() => null} title="VIEW" color="black" />
              </View>
            </View>
          );
        }

        // Multiple Actions in the array
        return (
          <View style={styles.activityRow}>
            <View style={styles.left}>
              <Avatar uri={images} />
              <View>
                <Text style={styles.actionText}>{`${names[0]} sent ${
                  actions.length > 3 ? "3+" : actions.length
                } new collaboration requests.`}</Text>
                <Text style={styles.timeDistance}>
                  {actions[0].createdAt &&
                    formatDistanceToNow(new Date(actions[0].createdAt), {
                      addSuffix: true,
                    })}
                </Text>
              </View>
            </View>
            <View style={styles.btn}>
              <Button onPress={() => null} title="VIEW" color="black" />
            </View>
          </View>
        );
      }

      case ActivityVerbs.EVENT: {
        // Only 1 Action in the array
        if (singleUserAction) {
          return (
            <View style={styles.activityRow}>
              <View style={styles.left}>
                <Avatar uri={images[0]} />
                <View>
                  <Text style={styles.actionText}>
                    {singleAction.actor?.alias} posted an event. Want to go?
                  </Text>
                  <Text style={styles.timeDistance}>
                    {singleAction.createdAt &&
                      formatDistanceToNow(new Date(singleAction.createdAt), {
                        addSuffix: true,
                      })}
                  </Text>
                </View>
              </View>
              <View style={styles.btn}>
                <Button onPress={() => null} title="VIEW" color="black" />
              </View>
            </View>
          );
        }

        // Multiple Actions in the array
        return (
          <View style={styles.activityRow}>
            <View style={styles.left}>
              <Avatar uri={images} />
              <Text style={styles.actionText}>{`${names[0]} sent ${
                actions.length > 3 ? "3+" : actions.length
              } new collaboration requests.`}</Text>
              <Text style={styles.timeDistance}>
                {actions[0].createdAt &&
                  formatDistanceToNow(new Date(actions[0].createdAt), {
                    addSuffix: true,
                  })}
              </Text>
            </View>
            <View style={styles.btn}>
              <Button onPress={() => null} title="VIEW" color="black" />
            </View>
          </View>
        );
      }

      case ActivityVerbs.LIKE: {
        // Only 1 Action in the array
        if (singleUserAction) {
          return (
            <View style={styles.activityRow}>
              <Avatar uri={images[0]} />
              <View>
                <Text style={styles.actionText}>
                  {singleAction.actor?.alias} liked your post.
                </Text>
                <Text style={styles.timeDistance}>
                  {singleAction.createdAt &&
                    formatDistanceToNow(new Date(singleAction.createdAt), {
                      addSuffix: true,
                    })}
                </Text>
              </View>
            </View>
          );
        }

        // Multiple Actions in the array
        return (
          <View style={styles.activityRow}>
            <View style={styles.left}>
              <Avatar uri={images} />
              <View>
                <Text style={styles.actionText}>
                  {actions.length == 2
                    ? `${names[0]} and ${
                        names[1]
                      } ${item.verb.toLowerCase()}d your post.`
                    : actions.length > 2 &&
                      `${names[0]}, ${names[1]} and ${
                        actions.length - 2
                      }+ others ${item.verb.toLowerCase()}d your post.`}
                </Text>
                <Text style={styles.timeDistance}>
                  {actions[0].createdAt &&
                    formatDistanceToNow(new Date(actions[0].createdAt), {
                      addSuffix: true,
                    })}
                </Text>
              </View>
            </View>
          </View>
        );
      }

      case ActivityVerbs.SUCCESSFUL_UPLOAD_POST: {
        // Only 1 Action in the array
        if (singleUserAction) {
          return (
            <View style={styles.activityRow}>
              <View style={styles.left}>
                <FontAwesome name="check" size={33} color="black" />
                <View>
                  <Text style={styles.actionText}>
                    Your post was uploaded successfully.
                  </Text>
                  <Text style={styles.timeDistance}>
                    {singleAction.createdAt &&
                      formatDistanceToNow(new Date(singleAction.createdAt), {
                        addSuffix: true,
                      })}
                  </Text>
                </View>
              </View>
            </View>
          );
        }

        // Multiple Actions in the array
        return (
          <View style={styles.activityRow}>
            <View style={styles.left}>
              <FontAwesome name="check" size={33} color="lightgreen" />
              <View>
                <Text style={styles.actionText}>
                  Your posts were uploaded successfully.
                </Text>
                <Text style={styles.timeDistance}>
                  {actions[0].createdAt &&
                    formatDistanceToNow(new Date(actions[0].createdAt), {
                      addSuffix: true,
                    })}
                </Text>
              </View>
            </View>
          </View>
        );
      }

      case ActivityVerbs.FAILED_UPLOAD_POST: {
        // Only 1 Action in the array
        if (singleUserAction) {
          return (
            <View style={styles.activityRow}>
              <View style={styles.left}>
                <FontAwesome name="close" size={40} color="red" />
                <View>
                  <Text style={styles.actionText}>
                    Your post failed to upload. Tap to retry.
                  </Text>
                  <Text style={styles.timeDistance}>
                    {singleAction.createdAt &&
                      formatDistanceToNow(new Date(singleAction.createdAt), {
                        addSuffix: true,
                      })}
                  </Text>
                </View>
              </View>
            </View>
          );
        }

        // Multiple Actions in the array
        return (
          <View style={styles.activityRow}>
            <View style={styles.left}>
              <FontAwesome name="close" size={40} color="red" />
              <View>
                <Text style={styles.actionText}>
                  Your posts failed to upload. Tap to retry.
                </Text>
                <Text style={styles.timeDistance}>
                  {actions[0].createdAt &&
                    formatDistanceToNow(new Date(actions[0].createdAt), {
                      addSuffix: true,
                    })}
                </Text>
              </View>
            </View>
          </View>
        );
      }

      case ActivityVerbs.TICKET_PUCHASE: {
        // Only 1 Action in the array
        if (singleUserAction) {
          return (
            <View style={styles.activityRow}>
              <View style={styles.left}>
                <FontAwesome name="ticket" size={34} color="black" />
                <View>
                  <Text style={styles.actionText}>
                    You purchased a ticket to {singleAction.actor?.alias}'s
                    event.
                  </Text>
                  <Text style={styles.timeDistance}>
                    {singleAction.createdAt &&
                      formatDistanceToNow(new Date(singleAction.createdAt), {
                        addSuffix: true,
                      })}
                  </Text>
                </View>
              </View>
              <View style={styles.btn}>
                <Button onPress={() => null} title="VIEW" color="black" />
              </View>
            </View>
          );
        }

        // Multiple Actions in the array
        return (
          <View style={styles.activityRow}>
            <View style={styles.left}>
              <FontAwesome name="ticket" size={34} color="black" />
              <View>
                <Text style={styles.actionText}>{`You purchased ${
                  actions.length > 3 ? "3+" : actions.length
                } tickets to an event.`}</Text>
                <Text style={styles.timeDistance}>
                  {actions[0].createdAt &&
                    formatDistanceToNow(new Date(actions[0].createdAt), {
                      addSuffix: true,
                    })}
                </Text>
              </View>
            </View>
            <View style={styles.btn}>
              <Button onPress={() => null} title="VIEW" color="black" />
            </View>
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
