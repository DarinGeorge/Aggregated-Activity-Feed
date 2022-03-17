import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
  },
  activityRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionText: {
    fontSize: 17,
    fontWeight: "400",
    marginLeft: 10,
  },
  btn: {
    paddingHorizontal: 15,
    backgroundColor: "lightblue",
    borderRadius: 7,
  },
  timeDistance: {
    alignSelf: "flex-start",
    marginLeft: 11,
    fontSize: 13,
    color: "#999",
  },
});
