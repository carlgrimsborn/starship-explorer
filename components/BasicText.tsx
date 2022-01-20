import React from "react";
import { Text, TextProps, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

const BasicText: React.FC<TextProps> = (props) => {
  const { colors } = useTheme();
  return (
    <Text
      {...props}
      style={[
        { color: colors.text },
        props.style ? [styles.text, props.style] : styles.text,
      ]}
    >
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
