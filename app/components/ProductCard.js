import React from "react";
import { Image, StyleSheet, View } from "react-native";

function ProductCard({ image }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    height: 160,
    overflow: "hidden",
    width: 150,
  },
  image: {
    height: "100%",
    objectFit: "cover",
    width: "100%",
  },
});

export default ProductCard;
