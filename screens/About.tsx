import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BasicButton from "../components/BasicButton";
import BasicText from "../components/BasicText";
import DataItem from "../components/DataItem";
import { useOvermindActions, useOvermindState } from "../overmind";

const About: React.FC = () => {
  const { starShips, selectedStarShipIndex } = useOvermindState();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {selectedStarShipIndex ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          {Object.entries(starShips![selectedStarShipIndex]).map((value, i) => {
            if (
              value[0] === "pilotConnection" ||
              value[0] === "filmConnection"
            ) {
              if (
                (value[0] === "pilotConnection" &&
                  starShips![selectedStarShipIndex].pilotConnection.pilots
                    .length >= 1) ||
                (value[0] === "filmConnection" &&
                  starShips![selectedStarShipIndex].filmConnection.films
                    .length >= 1)
              ) {
                return (
                  <BasicButton
                    key={i}
                    style={{
                      marginTop: 20,
                    }}
                    title={value[0] === "pilotConnection" ? "pilots" : "films"}
                    onPress={() => {
                      if (value[0] === "pilotConnection") {
                        navigation.navigate("Pilots");
                      } else {
                        navigation.navigate("Movies");
                      }
                    }}
                  ></BasicButton>
                );
              } else {
                return;
              }
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
      ) : (
        <BasicText>error</BasicText>
      )}
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
