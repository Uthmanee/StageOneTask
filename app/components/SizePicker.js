import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function SizePicker({ item, isSelected, setSelectedSize, setSelectedSizeId }) {
  return (
    <TouchableOpacity
      style={[styles.button, isSelected && styles.selected]}
      onPress={() => {
        if (isSelected) return;
        else {
          setSelectedSize(item.size);
          setSelectedSizeId(item.id);
        }
      }}
    >
      <Text style={[styles.size, isSelected && { color: "#fff" }]}>
        {item.size}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 40,
    borderColor: colors.sizeTextColor,
    height: 40,
    justifyContent: "center",
    marginRight: 5,
    width: 40,
  },
  selected: {
    backgroundColor: colors.primary,
    borderWidth: 0,
  },
  size: {
    color: colors.sizeTextColor,
    fontSize: 16,
    fontWeight: "600",
  },
});

export default SizePicker;
