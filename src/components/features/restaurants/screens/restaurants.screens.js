import React from "react";
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantsInfo } from "../components/restaurant-info.components";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
 flex: 1;
 ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`
const SearchWrap = styled.View`
  padding: ${(props) => props.theme.space[3]}
`;

const RestaurantsInfoWrap = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]}
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

