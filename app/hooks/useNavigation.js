import React, { useState } from "react";
import { StyleSheet } from "react-native";

function useNavigation(props) {
  const [currentScreen, setCurrentScreen] = useState("products");
  const [screenData, setScreenData] = useState({});

  const navigate = (screen, data) => {
    setCurrentScreen(screen);
    setScreenData(data);
  };
  return { navigate, currentScreen, screenData };
}

const styles = StyleSheet.create({
  container: {},
});

export default useNavigation;
