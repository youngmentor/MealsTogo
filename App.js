import { StatusBar as ExpoStatusBar} from "expo-status-bar";
import { RestaurantScreens } from "./src/components/features/restaurants/screens/restaurants.screens";
import {  StyleSheet } from "react-native";

export default function App() {
  return (
    <>
      <RestaurantScreens/>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
