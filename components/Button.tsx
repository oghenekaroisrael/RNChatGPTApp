import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Button(props: {
  onPress: any;
  title?: string;
  icon?: any;
}) {
  const { onPress, title = "Save", icon } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      {title && <Text style={styles.text}>{title}</Text>}
      {icon && <Ionicons name="send" size={24} color={"#888"} />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
