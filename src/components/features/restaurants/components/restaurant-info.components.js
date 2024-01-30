import React from "react-native";
import { Card } from "react-native-paper";
import { Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
const RestuarantsCard = styled(Card)`
  background-color: white;
`;
const RestuarantsCardCover = styled(Card.Cover)`
  background-color: white;
  padding: 20px;
`;
const Title = styled.Text`
  color: gold;
  padding: 16px;
`;
export const RestaurantsInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestuarantsCard elevation={5} >
      <RestuarantsCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestuarantsCard>
  );
};

