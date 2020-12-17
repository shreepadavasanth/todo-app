/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './App/Navigation/Navigation'
import { todoreducer, initialState } from './App/Screens/Todos/TodosReducer'

export const AuthContext = createContext();

const App = () => {
  const [state, dispatch] = React.useReducer(todoreducer, initialState);
  return (
    <NavigationContainer>
      <AuthContext.Provider
        value={{
          state,
          dispatch
        }}
      >
        <MyStack />
      </AuthContext.Provider>
    </NavigationContainer>
  );
};


export default App;
