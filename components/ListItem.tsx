import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { StarShip } from "../overmind/state";
import BasicText from "./BasicText";

type Props = {
  title: String;
  onPress: () => void;
};

const ListItem: React.FC<Props> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <BasicText>{title}</BasicText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 75,
    backgroundColor: "lightblue",
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default ListItem;
