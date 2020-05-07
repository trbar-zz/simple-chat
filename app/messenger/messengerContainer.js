// @flow

import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import {useSelector, useDispatch} from 'react-redux';
import {styles as s} from 'react-native-style-tachyons';

import {appendMessage} from './messengerActions';

const MessageContainer = () => {
  const isLoading = useSelector((state) => state.messenger.isLoading);
  const messages = useSelector((state) => state.messenger.messages);
  const dispatch = useDispatch();

  const [text, setText] = useState('');

  const onSend = (newMessages = []) => {
    dispatch(appendMessage(newMessages));
  };

  if (isLoading) {
    return (
      <ActivityIndicator
        size="large"
        color="#0000ff"
        style={[s.flx_i, s.aic, s.jcc]}
      />
    );
  } else {
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
  }
};

export default MessageContainer;
