import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

function AppActivityIndicator({ loading = false }) {
  if (!loading) return null;
  return (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" loading={loading} />
    </View>
  );
}

const styles = StyleSheet.create({
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

export default AppActivityIndicator;
