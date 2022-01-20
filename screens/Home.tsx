import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  Button,
  View,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListItem from "../components/ListItem";
import { useOvermindActions, useOvermindState } from "../overmind";
import { StarShip } from "../overmind/state";

const Home: React.FC = () => {
  const { getStarships, setSelectedStarshipIndex } = useOvermindActions();
  const { starShips, loading } = useOvermindState();
  const navigation = useNavigation();

  useEffect(() => {
    const doAsync = async () => {
      await getStarships();
    };
    doAsync();
  }, []);

  const renderItem = ({ item, index }: { item: StarShip; index: number }) => (
    <ListItem
      title={item.name}
      key={item.name}
      onPress={() => {
        setSelectedStarshipIndex(index);
        navigation.navigate("About", { title: item.name });
      }}
    ></ListItem>
  );

  if (loading) {
    return (
      <View style={styles.indicatorView}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={starShips}
          renderItem={renderItem}
          horizontal={false}
          showsVerticalScrollIndicator={false}
        ></FlatList>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    paddingTop: -40,
  },
  indicatorView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
