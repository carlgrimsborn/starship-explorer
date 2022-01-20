import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BasicText from "../components/BasicText";
import DataItem from "../components/DataItem";
import { useOvermindState } from "../overmind";

const Movies = () => {
  const { starShips, selectedStarShipIndex } = useOvermindState();
  const films =
    selectedStarShipIndex !== null
      ? starShips![selectedStarShipIndex].filmConnection.films
      : null;
  return (
    <SafeAreaView style={styles.container}>
      {films ? (
        <ScrollView>
          {films.map((film, i) => (
            <DataItem
              index={i}
              key={i}
              title={film.title}
              text={film.director}
            ></DataItem>
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

export default Movies;
