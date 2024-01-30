import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantScreens } from "./src/components/features/restaurants/screens/restaurants.screens";
import { StyleSheet } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/components/intrastructure/theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreens />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
