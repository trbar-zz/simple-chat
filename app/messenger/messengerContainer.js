// @flow

import React, {useState, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import seedMessageData from './messengerSeedData';

const MessageContainer = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(seedMessageData.reverse());
  }, []);

  const onSend = (newMessages = []) => {
    setMessages((prevMessages) => newMessages.concat(prevMessages));
  };

  return (
    <GiftedChat
      messages={messages}
      text={text}
      onInputTextChanged={setText}
      onSend={onSend}
      user={{
        _id: 1,
        name: 'Aaron',
        avatar: 'https://placeimg.com/150/150/any',
      }}
      alignTop
      alwaysShowSend
      scrollToBottom
      renderAvatarOnTop
      bottomOffset={26}
    />
  );
};

export default MessageContainer;
