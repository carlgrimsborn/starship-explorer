import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BasicButton from "../components/BasicButton";
import BasicText from "../components/BasicText";
import { useOvermindState } from "../overmind";
import { StarShip } from "../overmind/state";

const About: React.FC = () => {
  const { selectedStarShip } = useOvermindState();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {Object.entries(selectedStarShip!).map((value) => {
          if (value[0] === "pilotConnection" || value[0] === "filmConnection") {
            return (
              <BasicButton
                style={{
                  marginVertical: 10,
                }}
                title={value[0] === "pilotConnection" ? "pilots" : "films"}
                onPress={() => {}}
              ></BasicButton>
            );
          } else {
            return (
              <View style={styles.box}>
                <BasicText>{value[0] + ":"}</BasicText>
                <BasicText>{value[1]}</BasicText>
              </View>
            );
          }
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: -40,
  },
  box: {
    marginVertical: 10,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
  },
});

export default About;
