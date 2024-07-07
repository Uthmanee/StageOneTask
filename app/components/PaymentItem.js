import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";

import colors from "../config/colors";
import RowContainer from "./RowContainer";

export default function PaymentItem({ item, itemIsSelected }) {
  return (
    <RowContainer
      style={[
        styles.container,
        itemIsSelected ? styles.mediaObjectContainerActive : null,
      ]}
    >
      <Image style={styles.image} source={item.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.text}>{item.body}</Text>
      </View>
    </RowContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 7,
    padding: 18,
    paddingVertical: 14,
  },
  image: {
    height: 30,
    width: 30,
    marginRight: 10,
    resizeMode: "contain",
    width: 45,
  },
  mediaObjectContainerActive: {
    borderWidth: 0.5,
    borderColor: colors.primary,
  },
  text: {
    fontSize: 16,
  },
  textContainer: {
    flexGrow: 1,
    marginHorizontal: 5,
  },
});
