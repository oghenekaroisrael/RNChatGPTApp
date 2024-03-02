import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header: React.FC = () => (
  <View style={styles.container}>
    <Text>GPT is typing...</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});

export default Header;
