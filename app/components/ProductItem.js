import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import ProductCard from "./ProductCard";

function ProductItem({ item, onPress = { onPress } }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <ProductCard image={item.image} />
      <Text style={styles.brandName}>{item.brandName}</Text>
      <Text style={styles.detail}>{item.productDetail}</Text>
      <Text style={styles.price}>${item.price}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  brandName: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
  },
  container: {
    alignItems: "center",
  },
  detail: {
    color: colors.secondaryTextColor,
  },
  price: {
    fontWeight: "600",
    marginBottom: 15,
  },
});

export default ProductItem;
