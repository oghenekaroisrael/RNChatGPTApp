import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
interface MessageProps {
  content: string;
  role: string;
}

const Message: React.FC<MessageProps> = ({ content, role }) => {
  let [fontLoaded] = useFonts({
    Nunito: require("../assets/fonts/NunitoSans_7pt_Condensed-Regular.ttf"),
  });
  return (
    <View style={role === "user" ? styles.userMessage : styles.gptMessage}>
      <Text
        style={{
          color: role === "user" ? "#ffffff" : "#000000",
          fontFamily: "Nunito",
          fontSize: 16,
          fontWeight: "normal",
        }}
      >
        {content}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  userMessage: {
    backgroundColor: "#1558f2",
    padding: 12,
    marginVertical: 4,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    alignSelf: "flex-end",
  },
  gptMessage: {
    backgroundColor: "#eeeeee",
    padding: 12,
    marginVertical: 4,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    alignSelf: "flex-start",
  },
});

export default Message;
