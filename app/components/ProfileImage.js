import React from "react";
import { Image, StyleSheet, View } from "react-native";

function ProfileImage(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/profileImage.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#dddd",
    borderRadius: 40,
    height: 50,
    justifyContent: "center",
    width: 50,
  },
  image: {
    height: 40,
    objectFit: "contain",
    width: 40,
  },
});

export default ProfileImage;
