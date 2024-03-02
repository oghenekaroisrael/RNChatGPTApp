import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TypingIndicator: React.FC = () => (
  <View style={styles.typingIndicator}>
    <Text style={styles.typingText}>GPT is typing...</Text>
  </View>
);

const styles = StyleSheet.create({
  typingIndicator: {
    alignSelf: "flex-start",
    marginVertical: 4,
    marginLeft: 8,
  },
  typingText: {
    fontStyle: "italic",
  },
});

export default TypingIndicator;
