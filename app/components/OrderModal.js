import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import AppButton from "./AppButton";
import colors from "../config/colors";

function OrderModal({ modalVisible = false, handleCloseModal }) {
  if (!modalVisible) return null;
  return (
    <View style={styles.overlay}>
      <View style={styles.modalContentContainer}>
        <View style={styles.iconContainer}>
          <MaterialIcons name="done" size={24} color="#fff" />
        </View>
        <Text style={styles.orderStatus}>Successful!</Text>
        <Text>Your order has been placed</Text>
        <Text>succesfully.</Text>
        <AppButton onPress={handleCloseModal} style={styles.button}>
          Continue
        </AppButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    marginTop: 15,
    paddingHorizontal: 35,
    paddingVertical: 7,
    width: "auto",
  },
  iconContainer: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 60,
    height: 60,
    justifyContent: "center",
    width: 60,
  },
  modalContentContainer: {
    alignItems: "center",
    backgroundColor: "#fff",
    height: "35%",
    justifyContent: "center",
    width: "85%",
  },
  orderStatus: {
    fontWeight: "600",
    fontSize: 24,
    marginBottom: 15,
    marginTop: 10,
  },
  overlay: {
    alignItems: "center",
    bottom: 0,
    backgroundColor: "rgba(0,0,0, 0.5)",
    height: "100%",
    justifyContent: "center",
    left: 0,
    position: "absolute",
    right: 0,
    Top: 0,
    width: "100%",
    zIndex: 1,
  },
});

export default OrderModal;
