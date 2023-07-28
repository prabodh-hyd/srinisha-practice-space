import React, { useState, useCallback } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

const ChatPage = () => {
    const [inputText, setInputText] = useState('');
    const [messages, setMessages] = useState([]);

    const handleSendMessage = () => {
        if (inputText.trim() === '') {
            return;
        }

        const newMessage = [{
            _id: Math.random().toString(),
            text: inputText.trim(),
            createdAt: new Date(),
            user: {
                _id: 2,
                name: 'Srinisha',
            },
        }];

        setMessages(previousMessages => GiftedChat.append(previousMessages, newMessage));
        setInputText('');
    };

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages)
        );
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                    name: 'Your Name',
                }}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8 }}>
                <TextInput
                    style={{ flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 8 }}
                    placeholder="Type your message..."
                    value={inputText}
                    onChangeText={text => setInputText(text)}
                    onSubmitEditing={handleSendMessage}
                />
                <TouchableOpacity
                    style={{ marginLeft: 8, backgroundColor: '#007BFF', borderRadius: 8, padding: 8 }}
                    onPress={handleSendMessage}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ChatPage;


