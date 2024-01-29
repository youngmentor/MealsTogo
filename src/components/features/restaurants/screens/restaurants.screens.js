import React from "react";
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from 'react-native-paper';
import { RestaurantsInfo } from "../components/restaurant-info.components";

export const RestaurantScreens = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container1}>
      <Searchbar />
    </View>
    <View style={styles.container2}>
      <RestaurantsInfo/>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container1: {
    backgroundColor: "green",
    padding: 16,
  },
  container2: {
    flex: 1,
    backgroundColor: "blue",
    padding: 16,
  },
});
