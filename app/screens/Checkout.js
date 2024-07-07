import React, { useContext, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import AppActivityIndicator from "../components/AppActivityIndicator";
import AppButton from "../components/AppButton";
import BottomTab from "../components/BottomTab";
import CartContext from "../context/cartContext";
import colors from "../config/colors";
import paymentMethods from "../data/paymentMethods";
import OrderModal from "../components/OrderModal";
import PaymentItem from "../components/PaymentItem";
import RowContainer from "../components/RowContainer";
import Screen from "../components/Screen";
import useTab from "../hooks/useTab";

function CheckoutScreen({ navigate, data }) {
  const [loading, setLoading] = useState(false);

  const [selectedPaymentId, setSelectedPaymentId] = useState(null);

  const [modalVisible, SetModalVisible] = useState(false);

  const [activeTab, handleTabPress] = useTab(2);

  const cartCtx = useContext(CartContext);

  const handleOrder = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      SetModalVisible(true);
    }, 3000);
  };

  const onCloseModal = () => {
    SetModalVisible(false);
    navigate("cart");
  };

  return (
    <Screen style={styles.screen}>
      <AppActivityIndicator loading={loading} />
      <OrderModal modalVisible={modalVisible} handleCloseModal={onCloseModal} />
      <View style={styles.screenContent}>
        <RowContainer style={{ marginBottom: 10, marginTop: 0 }}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigate("cart", data)}
          >
            <Image
              style={{ height: 12, width: 18 }}
              source={require("../assets/images/leftArrow.png")}
            />
          </TouchableOpacity>
        </RowContainer>
        <Text style={styles.deliveryAddress}>Delivery Address</Text>
        <View style={styles.addressContainer}>
          <Text style={styles.field}>
            Street: <Text style={styles.value}>3512 Pearl Street</Text>
          </Text>
          <Text style={styles.field}>
            City: <Text style={styles.value}>Detroit</Text>
          </Text>
          <Text style={styles.field}>
            State/province/area: <Text style={styles.value}>Michigan</Text>
          </Text>
          <Text style={styles.field}>
            Phone number: <Text style={styles.value}>8870523416</Text>
          </Text>
          <Text style={styles.field}>
            Zip Code: <Text style={styles.value}>95814</Text>
          </Text>
        </View>
        <FlatList
          data={paymentMethods}
          keyExtractor={(paymentItem) => paymentItem.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                if (selectedPaymentId === item.id) return;
                else setSelectedPaymentId(item.id);
              }}
            >
              <PaymentItem
                item={item}
                itemIsSelected={selectedPaymentId === item.id}
              />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
        <RowContainer style={styles.rowContainer}>
          <Text style={[styles.field, { marginTop: 10 }]}>Subtotal:</Text>
          <Text style={styles.value}>$ {cartCtx.totalPrice}</Text>
        </RowContainer>
        <RowContainer style={styles.rowContainer}>
          <Text style={styles.field}>Delivery:</Text>
          <Text style={styles.value}>$ 50</Text>
        </RowContainer>
        <View style={styles.line} />
        <RowContainer style={styles.rowContainer}>
          <Text style={styles.field}>Total:</Text>
          <Text style={styles.value}>$ {cartCtx.totalPrice - 50}</Text>
        </RowContainer>
        <AppButton onPress={handleOrder} style={styles.button}>
          Place Order
        </AppButton>
      </View>
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
  addressContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 10,
    padding: 15,
  },
  back: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 35,
    height: 35,
    justifyContent: "center",
    width: 35,
  },
  button: {
    borderRadius: 25,
    marginTop: 10,
    paddingVertical: 15,
  },
  deliveryAddress: {
    fontWeight: "600",
    fontSize: 22,
    marginBottom: 10,
  },
  field: {
    fontSize: 16,
    fontWeight: "400",
  },
  rowContainer: {
    marginVertical: 5,
  },
  line: {
    backgroundColor: "#E0E0E0",
    height: 1,
    marginVertical: 2,
  },
  screen: {
    backgroundColor: "#F3F3F3",
    padding: 0,
  },
  screenContent: {
    flex: 1,
    padding: 20,
    paddingTop: 10,
    paddingBottom: 50,
  },
  value: {
    color: colors.secondaryTextColor,
    fontWeight: "400",
  },
});

export default CheckoutScreen;
