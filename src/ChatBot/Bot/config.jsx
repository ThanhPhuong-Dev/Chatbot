import { createChatBotMessage } from 'react-chatbot-kit';
import BotAvatar from './components/BotAvatar';

const config = {
  initialMessages: [createChatBotMessage(`Hello world`)],
  botName: 'CrazyBot',
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props}></BotAvatar>,
  },
};

export default config;
