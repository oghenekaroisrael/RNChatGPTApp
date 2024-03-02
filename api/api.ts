import axios from "axios";
import { IMessage } from "../interfaces/interfaces";

export const sendChatRequest = async (
  messages: IMessage[]
): Promise<IMessage | null> => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: messages,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    return response.data.choices[0].message;
  } catch (error: any) {
    console.error("Error calling OpenAI API:", error.message);
    return null;
  }
};
