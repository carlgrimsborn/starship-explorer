import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BasicButton from "../components/BasicButton";
import BasicText from "../components/BasicText";
import DataItem from "../components/DataItem";
import { useOvermindState } from "../overmind";

const About: React.FC = () => {
  const { selectedStarShip } = useOvermindState();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {Object.entries(selectedStarShip!).map((value, i) => {
          if (value[0] === "pilotConnection" || value[0] === "filmConnection") {
            return (
              <BasicButton
                style={{
                  marginTop: 20,
                }}
                title={value[0] === "pilotConnection" ? "pilots" : "films"}
                onPress={() => {}}
              ></BasicButton>
            );
          } else {
            return (
              <DataItem
                index={i}
                title={value[0]}
                text={value[1]}
                key={i}
              ></DataItem>
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
});

export default About;
