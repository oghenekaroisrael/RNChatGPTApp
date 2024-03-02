import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";

interface InputComponentProps {
  inputText: string;
  onInputChange: (text: string) => void;
  onSendMessage: () => void;
}

const InputComponent: React.FC<InputComponentProps> = ({
  inputText,
  onInputChange,
  onSendMessage,
}) => {
  let [fontLoaded] = useFonts({
    Nunito: require("../assets/fonts/NunitoSans_7pt_Condensed-Regular.ttf"),
  });
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={(text) => onInputChange(text)}
        placeholder="Type a message..."
      />
      <Ionicons.Button
        name="send"
        size={24}
        color={"#1558f2"}
        borderRadius={20}
        onPress={onSendMessage}
        style={{ margin: 8 }}
        backgroundColor={"#eeeeee"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    marginTop: 8,
    borderRadius: 20,
    backgroundColor: "#eeeeee",
  },
  input: {
    flex: 1,
    marginRight: 8,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    fontFamily: "Nunito",
  },
});

export default InputComponent;
