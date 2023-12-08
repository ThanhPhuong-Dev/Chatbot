import { Chatbot } from 'react-chatbot-kit';

import 'react-chatbot-kit/build/main.css';
import config from './Bot/config.jsx';
import MessageParser from './Bot/MessageParser.jsx';
import ActionProvider from './Bot/ActionProvider.jsx';

const ChatbotComponent = () => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 50,
        right: 10,
        zIndex: 999,
        background: 'white',
        // width: '400px',
        // height: '600px',
      }}
    >
      <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
    </div>
  );
};
export default ChatbotComponent;
