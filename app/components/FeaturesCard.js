import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import AppButton from "./AppButton";

function FeaturesCard({ item }) {
  // 260 X 160
  return (
    <TouchableOpacity style={{ marginRight: 10 }}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../assets/images/background 01.png")}
      >
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>{item.name} sales </Text>
            <Text style={styles.percentage}>Up to {item.percentage}% off</Text>
          </View>
          <AppButton style={styles.button}>Shop Now</AppButton>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: 160,
    width: 260,
  },
  button: {
    width: "35%",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 10,
    paddingVertical: 12,
  },
  text: {
    fontSize: 25,
    fontWeight: "600",
    marginBottom: 5,
  },
  percentage: {
    fontSize: 25,
  },
});

export default FeaturesCard;
