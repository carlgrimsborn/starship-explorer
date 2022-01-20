import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BasicText from "../components/BasicText";
import ListItem from "../components/ListItem";
import { useOvermindActions, useOvermindState } from "../overmind";

const Pilots = () => {
  const { starShips, selectedStarShipIndex } = useOvermindState();
  const { setSelectedPilotIndex } = useOvermindActions();
  const navigation = useNavigation();
  const pilots =
    selectedStarShipIndex !== null
      ? starShips![selectedStarShipIndex].pilotConnection.pilots
      : null;

  return (
    <SafeAreaView style={styles.container}>
      {pilots ? (
        <ScrollView>
          {pilots?.map((pilot, i) => (
            <ListItem
              key={i}
              title={pilot.name}
              onPress={() => {
                setSelectedPilotIndex(i);
                navigation.navigate("Pilot", { title: pilot.name });
              }}
            />
          ))}
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

export default Pilots;
