import React from "react";
import { StyleSheet, View } from "react-native";

function HorizontalPadding({ children, style }) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});

export default HorizontalPadding;
