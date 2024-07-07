import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function Decrease({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AntDesign name="minus" size={14} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {},
});

export default Decrease;
