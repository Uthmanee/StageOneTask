import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import colors from "../config/colors";
import RowContainer from "./RowContainer";

function SearchBarDummy({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <RowContainer style={styles.container}>
        <Feather style={styles.icon} name="search" size={20} color="black" />
        <Text style={styles.text}>Search...</Text>
      </RowContainer>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.secondary,
    borderRadius: 20,
    marginVertical: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    color: "#AAAAAA",
    fontSize: 15,
  },
});

export default SearchBarDummy;
