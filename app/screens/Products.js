import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import BottomTab from "../components/BottomTab";
import Screen from "../components/Screen";
import products from "../data/products";
import ProductItem from "../components/ProductItem";
import useTab from "../hooks/useTab";

function Products({ navigate }) {
  const [activeTab, handleTabPress] = useTab(1);

  return (
    <Screen style={styles.screen}>
      <Text style={styles.products}>Available Items</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <ProductItem
              onPress={() =>
                navigate("productdetail", { ...item, prevScreen: "products" })
              }
              item={item}
            />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <BottomTab
        activeTab={activeTab}
        data={{ prevScreen: "products" }}
        navigate={navigate}
        onHomeTabPress={() => handleTabPress(1)}
        onCheckoutTabPress={() => handleTabPress(2)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginBottom: 18,
  },
  products: {
    fontWeight: "600",
    fontSize: 22,
    marginBottom: 20,
  },
  screen: {},
});

export default Products;
