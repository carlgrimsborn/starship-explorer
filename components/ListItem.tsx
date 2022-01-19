import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { StarShip } from "../overmind/state";
import BasicText from "./BasicText";

type Props = {
  starShip: StarShip;
  onPress: () => void;
};

const ListItem: React.FC<Props> = ({ starShip, onPress }) => {
  return (
    <TouchableOpacity style={styles.ship} onPress={onPress}>
      <BasicText>{starShip.name}</BasicText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ship: {
    flex: 1,
    height: 75,
    backgroundColor: "lightblue",
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default ListItem;
