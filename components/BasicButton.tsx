import React from "react";
import { TouchableOpacity, StyleSheet, ViewStyle } from "react-native";
import BasicText from "./BasicText";
import { useTheme } from "@react-navigation/native";

type Props = {
  onPress: () => void;
  title: string;
  style?: ViewStyle;
};

const BasicButton: React.FC<Props> = ({ onPress, title, style }) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      style={[
        style ? [style, styles.buttonContainer] : styles.buttonContainer,
        { backgroundColor: colors.primary },
      ]}
      onPress={onPress}
    >
      <BasicText> {title} </BasicText>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "lightblue",
    borderRadius: 25,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  text: { fontSize: 20 },
});
export default BasicButton;
