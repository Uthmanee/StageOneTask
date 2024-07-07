import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={[styles.container, style]}>{children}</View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 26,
  },
  safeAreaView: {
    flex: 1,
  },
});

export default Screen;
