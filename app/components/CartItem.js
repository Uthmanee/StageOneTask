import React, { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

import CartContext from "../context/cartContext";
import colors from "../config/colors";
import RowContainer from "./RowContainer";
import useQuantity from "../hooks/useQuantity";
import QuantityChange from "./QuantityChange";

function CartItem({ item }) {
  const [state, increaseQuantity, decreaseQuantity] = useQuantity({
    price: item.price,
    quantity: item.quantity,
  });

  const cartCtx = useContext(CartContext);
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.productImageContainer}>
          <Image style={styles.productImage} source={item.image} />
        </View>
        <View
          style={{
            justifyContent: "space-between",
            flexGrow: 1,
          }}
        >
          <RowContainer>
            <View>
              <Text style={styles.brandName}>{item.brandName}</Text>
              <Text style={styles.detail}>{item.productDetail}</Text>
            </View>
            <TouchableOpacity onPress={() => cartCtx.removeFromCart(item.id)}>
              <FontAwesome name="close" size={24} color="#828282" />
            </TouchableOpacity>
          </RowContainer>
          <RowContainer>
            <Text style={styles.price}>$ {state.price}</Text>
            <QuantityChange
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              quantity={state.quantity}
            />
          </RowContainer>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  brandName: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 10,
    padding: 10,
  },
  detail: {
    color: colors.secondaryTextColor,
  },
  price: {
    fontSize: 18,
    fontWeight: "800",
  },
  productImage: {
    height: "100%",
    width: "100%",
  },
  productImageContainer: {
    borderRadius: 15,
    height: 100,
    marginRight: 10,
    overflow: "hidden",
    width: 100,
  },
  sizeField: {
    fontWeight: "600",
  },
  sizeValue: {
    color: colors.secondaryTextColor,
  },
});

export default CartItem;
