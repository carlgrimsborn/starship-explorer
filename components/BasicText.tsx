import React from "react";
import { Text, TextProps, StyleSheet } from "react-native";

const BasicText: React.FC<TextProps> = (props) => {
  return (
    <Text style={props.style ? [props.style, styles.text] : styles.text}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: "Verdana",
  },
});

export default BasicText;
