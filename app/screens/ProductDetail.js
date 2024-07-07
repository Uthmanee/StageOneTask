import React, { useContext, useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import AppButton from "../components/AppButton";
import BottomTab from "../components/BottomTab";
import colors from "../config/colors";
import idGenerator from "../helper/idGenerator";
import RowContainer from "../components/RowContainer";
import SecondaryText from "../components/SecondaryText";
import useQuantity from "../hooks/useQuantity";
import Screen from "../components/Screen";
import sizes from "../data/sizes";
import SizePicker from "../components/SizePicker";
import QuantityChange from "../components/QuantityChange";
import useTab from "../hooks/useTab";
import CartContext from "../context/cartContext";

function ProductDetail({ navigate, data }) {
  const [state, increaseQuantity, decreaseQuantity] = useQuantity({
    price: data.price,
    quantity: data.quantity,
  });

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedSizeId, setSelectedSizeId] = useState(null);

  const [activeTab, handleTabPress] = useTab(1);

  const cartCtx = useContext(CartContext);

  return (
    <Screen style={styles.screen}>
      <View style={styles.imageBackgroundContainer}>
        <ImageBackground style={styles.imageBackground} source={data.image}>
          <RowContainer style={styles.navBar}>
            <TouchableOpacity
              style={styles.back}
              onPress={() => navigate("products")}
            >
              <Image
                style={{ height: 12, width: 18 }}
                source={require("../assets/images/leftArrow.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cart}
              onPress={() =>
                navigate("cart", {
                  ...data,
                  price: state.price,
                  quantity: state.quantity,
                  prevScreen: "productdetail",
                })
              }
            >
              {cartCtx.totalQuantity > 0 && (
                <View style={styles.cartIconContainer}>
                  <Text style={{ color: "#fff" }}>{cartCtx.totalQuantity}</Text>
                </View>
              )}
              <Image
                style={styles.cartIcon}
                source={require("../assets/images/bag.png")}
              />
            </TouchableOpacity>
          </RowContainer>
        </ImageBackground>
      </View>
      <View style={styles.body}>
        <RowContainer>
          <View>
            <Text style={styles.brandName}>{data.brandName}</Text>
            <SecondaryText style={styles.detail}>
              {data.productDetail}
            </SecondaryText>
          </View>
          <QuantityChange
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
            quantity={state.quantity}
          />
        </RowContainer>
        <RowContainer style={styles.ratingContainer}>
          <RowContainer>
            <AntDesign name="star" size={18} color="#FFAB07" />
            <AntDesign name="star" size={18} color="#FFAB07" />
            <AntDesign name="star" size={18} color="#FFAB07" />
            <AntDesign name="star" size={18} color="#FFAB07" />
            <AntDesign name="star" size={18} color="#FFAB07" />
          </RowContainer>
          <Text style={styles.available}>Available in stock</Text>
        </RowContainer>
        <View style={styles.sizePickerContainer}>
          <Text style={styles.subject}>Size</Text>
          <ScrollView horizontal>
            {sizes.map((item) => {
              return (
                <SizePicker
                  key={item.id}
                  item={item}
                  isSelected={selectedSizeId === item.id}
                  setSelectedSize={setSelectedSize}
                  setSelectedSizeId={setSelectedSizeId}
                />
              );
            })}
          </ScrollView>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.subject}>Description</Text>
          <SecondaryText>
            Get a little lift from these Sam Edelman sandals featuring ruched
            straps and leather lace-up ties, while a braided jute sole makes a
            fresh statement for summer.
          </SecondaryText>
        </View>
        <RowContainer style={styles.priceContainer}>
          <View>
            <SecondaryText>Total Price</SecondaryText>
            <Text style={styles.price}>$ {state.price}</Text>
          </View>
          <AppButton
            style={styles.button}
            image={require("../assets/images/lock.png")}
            onPress={() =>
              cartCtx.addToCart({
                ...data,
                id: idGenerator(),
                price: state.price,
                quantity: state.quantity,
              })
            }
          >
            Add to cart
          </AppButton>
        </RowContainer>
      </View>
      <BottomTab
        activeTab={activeTab}
        data={{
          ...data,
          price: state.price,
          quantity: state.quantity,
          prevScreen: "productdetail",
        }}
        navigate={navigate}
        onHomeTabPress={() => handleTabPress(1)}
        onCheckoutTabPress={() => handleTabPress(2)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  available: {
    fontWeight: "600",
  },
  back: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 35,
    height: 35,
    justifyContent: "center",
    width: 35,
  },
  body: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    bottom: 0,
    height: "50%",
    padding: 25,
    paddingBottom: 55,
    position: "absolute",
    width: "100%",
  },
  button: {
    borderRadius: 25,
    paddingVertical: 12,
    width: "55%",
  },
  brandName: {
    fontSize: 22,
    fontWeight: "600",
  },
  cart: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 35,
    height: 35,
    justifyContent: "center",
    width: 35,
  },
  cartIcon: {
    height: 12,
    width: 13,
  },
  cartIconContainer: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 17,
    height: 17,
    justifyContent: "center",
    position: "absolute",
    top: -6,
    right: -1,
    width: 17,
  },
  detail: {
    color: colors.secondaryTextColor,
    fontSize: 14,
  },
  imageBackground: {
    flex: 1,
    objectFit: "contain",
  },
  imageBackgroundContainer: {
    height: "54%",
  },
  navBar: { padding: 25, paddingTop: 30 },
  price: {
    fontSize: 22,
    fontWeight: "800",
  },
  priceContainer: {
    marginTop: 20,
  },
  ratingContainer: {
    marginVertical: 10,
  },
  screen: {
    padding: 0,
    paddingTop: 0,
  },
  sizePickerContainer: {
    marginBottom: 10,
  },
  subject: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
});

export default ProductDetail;
