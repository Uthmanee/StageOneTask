import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function Increase({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AntDesign name="plus" size={14} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {},
});

export default Increase;
