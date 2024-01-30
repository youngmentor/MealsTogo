import React from "react";
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantsInfo } from "../components/restaurant-info.components";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
 flex: 1;
 margin-top: ${StatusBar.currentHeight}px;
`
const SearchWrap = styled.View`
  padding: 16px;
`;

const RestaurantsInfoWrap = styled.View`
  flex: 1;
  padding: 16px;
`;
export const RestaurantScreens = () => (
  <SafeArea style={{ flex: 1 }}>
    <SearchWrap>
      <Searchbar />
    </SearchWrap>
    <RestaurantsInfoWrap>
      <RestaurantsInfo />
    </RestaurantsInfoWrap>
  </SafeArea>
);

