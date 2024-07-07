import React from "react";
import { StyleSheet, View } from "react-native";

function RowContainer({ children, justifyContent = "space-between", style }) {
  return (
    <View style={[styles.container, { justifyContent }, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
  },
});

export default RowContainer;
