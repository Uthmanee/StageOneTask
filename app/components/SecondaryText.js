import React from "react";
import { StyleSheet, Text } from "react-native";

import colors from "../config/colors";

function SecondaryText({ children, color = colors.secondaryTextColor, style }) {
  return <Text style={[styles.text, color, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {},
});

export default SecondaryText;
