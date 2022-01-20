import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { StarShip } from "../overmind/state";
import BasicText from "./BasicText";
import { useTheme } from "@react-navigation/native";

type Props = {
  title: String;
  onPress: () => void;
};

const ListItem: React.FC<Props> = ({ title, onPress }) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      style={[styles.item, { backgroundColor: colors.primary }]}
      onPress={onPress}
    >
      <BasicText>{title}</BasicText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 75,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default ListItem;
