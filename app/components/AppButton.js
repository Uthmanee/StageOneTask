import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AppButton = ({
  backgroundColor = "#000",
  children,
  image,
  onPress,
  style,
  textColor = "#fff",
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor }, style]}
    >
      {image && <Image style={styles.image} source={image} />}
      <Text style={[{ color: textColor }, styles.text]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderColor: "#cccccc",
    borderRadius: 20,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 6,
  },
  image: {
    height: 15,
    marginRight: 10,
    width: 15,
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
  },
});

export default AppButton;
