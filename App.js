import { StyleSheet } from "react-native";

import Cart from "./app/screens/Cart";
import Checkout from "./app/screens/Checkout";
import Products from "./app/screens/Products";
import ProductDetail from "./app/screens/ProductDetail";
import useNavigation from "./app/hooks/useNavigation";
import { CartContextProvider } from "./app/context/cartContext";

const App = () => {
  const { navigate, currentScreen, screenData } = useNavigation();

  let ScreenComponent;
  if (currentScreen.toLowerCase() === "products") {
    ScreenComponent = Products;
  } else if (currentScreen.toLowerCase() === "productdetail") {
    ScreenComponent = ProductDetail;
  } else if (currentScreen.toLowerCase() === "cart") {
    ScreenComponent = Cart;
  } else if (currentScreen.toLowerCase() === "checkout") {
    ScreenComponent = Checkout;
  }

  return <ScreenComponent navigate={navigate} data={screenData} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
});

export default () => (
  <CartContextProvider>
    <App />
  </CartContextProvider>
);

// import { StyleSheet, Text } from "react-native";

// import Cart from "./app/screens/Cart";
// import Checkout from "./app/screens/Checkout";
// import Home from "./app/screens/Home";
// import Products from "./app/screens/Products";
// import ProductDetail from "./app/screens/ProductDetail";

// export default function App() {
//   return <Cart />;
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 20,
//   },
// });
