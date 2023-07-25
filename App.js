import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ChatPage from './components/ChatPage';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ChatPage />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
  },
});

export default App;


