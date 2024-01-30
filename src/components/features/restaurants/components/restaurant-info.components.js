import React from "react-native";
import { Card } from "react-native-paper";
import { Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../../assets/star";
import open from "../../../../../assets/open";

const RestuarantsCard = styled(Card)`
  background-color: white;
`;
const RestuarantsCardCover = styled(Card.Cover)`
  background-color: white;
  padding: 20px;
`;
const Address = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
const Rating = styled.View`
  flex-direction: row;
  /* justify-content: space-between; */
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const Title = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSizes.title};
`;
const OpenTag = styled.View``;
const StarAndOpenTag = styled.View`
  flex-direction: row;
  justify-content: space-between;
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

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestuarantsCard elevation={5}>
      <RestuarantsCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <StarAndOpenTag>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <OpenTag>
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          </OpenTag>
        </StarAndOpenTag>
        <Address>{address}</Address>
      </Info>
    </RestuarantsCard>
  );
};
