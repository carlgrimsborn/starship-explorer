import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BasicText from "../components/BasicText";
import DataItem from "../components/DataItem";
import { useOvermindState } from "../overmind";

const Pilot: React.FC = () => {
  const { starShips, selectedStarShipIndex, selectedPilotIndex } =
    useOvermindState();

  const pilot =
    selectedStarShipIndex !== null && selectedPilotIndex !== null
      ? starShips![selectedStarShipIndex].pilotConnection.pilots[
          selectedPilotIndex
        ]
      : null;
  return (
    <SafeAreaView style={styles.container}>
      {pilot ? (
        <ScrollView>
          {Object.entries(pilot).map((value, i) => {
            if (value[0] === "species") {
              if (value[1] === null) {
                return;
              }
              return (
                <DataItem
                  key={i}
                  index={i}
                  title="species"
                  text={pilot.species.name}
                ></DataItem>
              );
            }
            if (value[0] === "homeworld") {
              if (value[1] === null) {
                return;
              }
              return (
                <DataItem
                  key={i}
                  index={i}
                  title="homeworld"
                  text={pilot.homeworld.name}
                ></DataItem>
              );
            }
            return (
              <DataItem
                key={i}
                index={i}
                title={value[0]}
                text={value[1]}
              ></DataItem>
            );
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

export default Pilot;
