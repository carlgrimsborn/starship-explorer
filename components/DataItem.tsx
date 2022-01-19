import React from "react";
import { View, StyleSheet } from "react-native";
import BasicText from "./BasicText";

type Props = {
  index: number;
  title: string;
  text: any;
};

const DataItem: React.FC<Props> = ({ index, title, text }) => {
  return (
    <View style={[styles.box, index === 0 ? { borderTopWidth: 1 } : null]}>
      <BasicText style={{ flex: 1 }}>{title + ":"}</BasicText>
      <View style={{ flex: 1, alignItems: "center" }}>
        <BasicText style={{ textAlign: "center" }}>{text}</BasicText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    paddingVertical: 15,
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    justifyContent: "space-between",
    minHeight: 60,
  },
});

export default DataItem;
