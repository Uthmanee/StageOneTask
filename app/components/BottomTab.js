import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import RowContainer from "./RowContainer";

function BottomTab({
  activeTab,
  data,
  navigate,
  onHomeTabPress,
  onCheckoutTabPress,
}) {
  return (
    <RowContainer justifyContent="auto" style={styles.tabContainer}>
      <TouchableOpacity
        style={[styles.tabButton, activeTab === 1 && styles.activeTabButton]}
        onPress={() => {
          onHomeTabPress();
          navigate("products");
        }}
      >
        <Text
          style={[
            styles.tabButtonText,
            activeTab === 1 && styles.activeTabButtonText,
          ]}
        >
          Products
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tabButton, activeTab === 2 && styles.activeTabButton]}
        onPress={() => {
          onCheckoutTabPress();
          navigate("cart", data);
        }}
      >
        <Text
          style={[
            styles.tabButtonText,
            activeTab === 2 && styles.activeTabButtonText,
          ]}
        >
          Cart / Checkout
        </Text>
      </TouchableOpacity>
    </RowContainer>
  );
}

const styles = StyleSheet.create({
  activeTabButton: {
    backgroundColor: colors.primary,
  },
  activeTabButtonText: {
    color: "#fff",
  },
  tabButton: {
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingVertical: 10,
    width: "50%",
  },
  tabButtonText: {
    fontSize: 15,
    fontWeight: "600",
  },
  tabContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default BottomTab;
