import React, { useEffect } from "react";
import { Button, View, StyleSheet, FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListItem from "../components/ListItem";
import { useOvermindActions, useOvermindState } from "../overmind";
import { StarShip } from "../overmind/state";

const Home: React.FC = () => {
  const { getStarships } = useOvermindActions();
  const { starShips } = useOvermindState();

  useEffect(() => {
    const doAsync = async () => {
      await getStarships();
    };
    doAsync();
  }, []);

  const renderItem = ({ item }: { item: StarShip }) => (
    <ListItem starShip={item} key={item.name} onPress={() => {}}></ListItem>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={starShips}
        renderItem={renderItem}
        horizontal={false}
      ></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 10 },
});

export default Home;
