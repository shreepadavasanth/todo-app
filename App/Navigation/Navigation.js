import React from 'react'
import TodoList from '../Screens/Todos/Todos';
import { createStackNavigator } from '@react-navigation/stack';
import AddTodo from '../Screens/Todos/AddTodos';
import ToDoDetails from '../Screens/Todos/TodosDetails'
const Stack = createStackNavigator();

const MyStack = () => (
  <Stack.Navigator>
    <Stack.Screen options={{
      title: 'Todos',
      headerTintColor: '#fff',
      headerStyle: { backgroundColor: '#505F79' }
    }} name="TodoList" component={TodoList} />
    <Stack.Screen options={{
      title: 'Add Todos',
      headerTintColor: '#fff',
      headerStyle: { backgroundColor: '#505F79' }
    }} name="AddTodo" component={AddTodo} />
    <Stack.Screen options={{
      title: 'Edit Todos',
      headerTintColor: '#fff',
      headerStyle: { backgroundColor: '#505F79' }
    }} name="EditTodo" component={AddTodo} />
    <Stack.Screen options={{
      title: 'Todo Details',
      headerTintColor: '#fff',
      headerStyle: { backgroundColor: '#505F79' }
    }} name="ToDoDetails" component={ToDoDetails} />
  </Stack.Navigator>
);

export default MyStack;
