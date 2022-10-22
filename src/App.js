import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import Router from './router';
import store from './redux/store';
import FlashMessage from "react-native-flash-message";
import { Loading } from './components';
import { StatusBar } from 'react-native';

const MainApp = () => {
  const { isLoading } = useSelector((state) => state.globalReducer);

  return (
    <NavigationContainer>
      <Router />

      <FlashMessage position="top" />
      {isLoading &&
        <Loading />
      }
    </NavigationContainer>
  );
}
const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>

  );
};

export default App;
