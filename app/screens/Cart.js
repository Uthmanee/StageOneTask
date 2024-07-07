import React, { useContext } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import AppButton from "../components/AppButton";
import BottomTab from "../components/BottomTab";
import CartContext from "../context/cartContext";
import CartItem from "../components/CartItem";
import colors from "../config/colors";
import Screen from "../components/Screen";
import RowContainer from "../components/RowContainer";
import useTab from "../hooks/useTab";

function CartScreen({ navigate, data }) {
  const [activeTab, handleTabPress] = useTab(2);

  const { cart, totalPrice, totalQuantity } = useContext(CartContext);

  return (
    <Screen style={styles.screen}>
      <RowContainer style={{ marginBottom: 20, marginTop: 5 }}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigate(data.prevScreen, data)}
        >
          <Image
            style={{ height: 12, width: 18 }}
            source={require("../assets/images/leftArrow.png")}
          />
        </TouchableOpacity>
      </RowContainer>
      <Text style={styles.myCart}>My Cart</Text>
      {cart.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Feather
            style={styles.cartIcon}
            name="shopping-cart"
            size={140}
            color={colors.secondaryTextColor}
          />
          <Text style={styles.emptyCartText}>No items in Cart</Text>
          <AppButton
            style={styles.shoppingButton}
            onPress={() => navigate("products")}
          >
            Continue Shopping
          </AppButton>
        </View>
      ) : (
        <FlatList
          data={cart}
          renderItem={({ item }) => <CartItem item={item} />}
          keyExtractor={(item) => item.id}
        />
      )}
      <RowContainer style={styles.inputFieldContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="Enter promo code"
          placeholderTextColor={colors.ash}
        />
        <AppButton style={styles.applyButton}>Apply</AppButton>
      </RowContainer>
      <RowContainer style={styles.totalPriceContainer}>
        <Text style={styles.totalQuantity}>Total ({totalQuantity} item):</Text>
        <Text style={styles.totalPrice}>$ {totalPrice}</Text>
      </RowContainer>
      <TouchableOpacity
        disabled={cart.length === 0}
        style={[styles.button, cart.length === 0 && styles.disabledButton]}
        onPress={() => navigate("checkout", data)}
      >
        <Text style={styles.checkoutText}>Proceed to Checkout</Text>
        <View
          style={{
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: 5,
            height: 25,
            justifyContent: "center",
            width: 25,
          }}
        >
          <Image
            style={styles.buttonIcon}
            source={require("../assets/images/rightArrow.png")}
          />
        </View>
      </TouchableOpacity>
      {cart.length === 0 && (
        <Text style={{ color: colors.secondaryTextColor }}>
          Note that you can't proceed to checkout when cart is empty
        </Text>
      )}
      <BottomTab
        activeTab={activeTab}
        navigate={navigate}
        onHomeTabPress={() => handleTabPress(1)}
        onCheckoutTabPress={() => handleTabPress(2)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  applyButton: {
    borderRadius: 10,
    paddingHorizontal: 20,
    width: "auto",
  },
  back: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 35,
    height: 35,
    justifyContent: "center",
    width: 35,
  },
  brandName: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    paddingVertical: 11,
  },
  buttonIcon: {
    height: 10,
    width: 15,
  },
  checkoutText: {
    color: "#fff",
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
  },
  detail: {
    color: colors.secondary,
  },
  disabledButton: {
    backgroundColor: "rgba(0,0,0, 0.6)",
  },
  emptyContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  emptyCartText: {
    color: colors.secondaryTextColor,
    fontSize: 22,
    fontWeight: "600",
    marginVertical: 10,
    textAlign: "center",
  },
  inputField: {
    flexGrow: 1,
    marginLeft: 10,
    width: 0,
  },
  inputFieldContainer: {
    backgroundColor: "#fff",
    borderRadius: 11,
    marginTop: 28,
    marginBottom: 10,
    padding: 8,
    width: "100%",
  },
  myCart: {
    fontWeight: "600",
    fontSize: 22,
    marginBottom: 15,
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
  screen: {
    backgroundColor: "#F3F3F3",
    paddingBottom: 55,
  },
  shoppingButton: {
    marginTop: 5,
    paddingVertical: 12,
    width: "60%",
  },
  sizeField: {
    fontWeight: "600",
  },
  sizeValue: {
    color: colors.secondaryTextColor,
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: "600",
  },
  totalPriceContainer: {
    marginVertical: 20,
  },
  totalQuantity: {
    color: colors.secondaryTextColor,
    fontSize: 18,
  },
});

export default CartScreen;
