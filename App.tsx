import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Message from "./components/Message";
import Header from "./components/Header";
import InputComponent from "./components/InputComponent";
import { sendChatRequest } from "./api/api";
import { IMessage } from "./interfaces/interfaces";

const App: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [inputText, setInputText] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const storedMessages = await AsyncStorage.getItem("chatMessages");
        if (storedMessages) {
          setMessages(JSON.parse(storedMessages));
        }
      } catch (error) {
        console.error("Error loading messages from AsyncStorage:", error);
      }
    };

    loadMessages();
  }, []);

  const saveMessagesToStorage = async (newMessages: IMessage[]) => {
    try {
      await AsyncStorage.setItem("chatMessages", JSON.stringify(newMessages));
    } catch (error) {
      console.error("Error saving messages to AsyncStorage:", error);
    }
  };

  const handleSendMessage = async () => {
    const newMessages = [
      ...messages,
      {
        content: inputText,
        role: "user",
      },
    ];

    setMessages(newMessages);
    saveMessagesToStorage(newMessages);
    setInputText("");

    const chatGPTResponse = await sendChatRequest(newMessages);
    if (chatGPTResponse !== null) {
      const updatedMessages = [...newMessages, chatGPTResponse];
      setMessages(updatedMessages);
      saveMessagesToStorage(updatedMessages);
    } else {
      setError("Failed to get a response from the server.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Message content={item.content} role={item.role} />
        )}
      />
      <InputComponent
        inputText={inputText}
        onInputChange={setInputText}
        onSendMessage={handleSendMessage}
      />
      {error && <Text>{error}</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff",
  },
});

export default App;
