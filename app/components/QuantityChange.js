import React from "react";
import { StyleSheet, Text } from "react-native";

import Decrease from "./Decrease";
import Increase from "./Increase";
import RowContainer from "./RowContainer";

function QuantityChange({ decreaseQuantity, increaseQuantity, quantity }) {
  return (
    <RowContainer style={styles.quantityContainer}>
      <Decrease onPress={decreaseQuantity} />
      <Text style={styles.quantity}>{quantity}</Text>
      <Increase onPress={increaseQuantity} />
    </RowContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
  quantity: {
    fontSize: 18,
    marginHorizontal: 7,
  },
  quantityContainer: {
    alignItems: "center",
    backgroundColor: "#EEEEEE",
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 6,
  },
});

export default QuantityChange;
