import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const CardButton = ({ children, onPress, style }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#dddddd" : "",
        },
        styles.button,
        style,
      ]}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {},
});

export default CardButton;
