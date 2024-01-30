import React from "react-native";
import { Card } from "react-native-paper";
import { Text, View, Image } from "react-native";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../../assets/star";
import open from "../../../../../assets/open";
import { Spacer } from "../../../spacer/spacer";
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
const OpenTag = styled.View`
  flex-direction: row;
  align-items: center;
`;
const StarAndOpenTag = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const RestaurantsInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
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
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red", fontSize: 12 }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </Spacer>
          </OpenTag>
        </StarAndOpenTag>
        <Address>{address}</Address>
      </Info>
    </RestuarantsCard>
  );
};
