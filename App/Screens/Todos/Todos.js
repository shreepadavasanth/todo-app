/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import Styles from '../../Styles/TodosStyles';
import TodosItemComponent from '../../Components/TodosItemComponent'
import FabButtonComponent from '../../Components/FabComponent'
import * as Actions from './TodosDispatchTypes'
import { AuthContext } from '../../../App'
const ListEmptyComponent = () => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 150 }}>
      <Text>No todos found</Text>
    </View>
  )
}



const TodoList = (props) => {
  const { state, dispatch } = React.useContext(AuthContext);
  const [allTodos, setAllTodos] = useState([])

  useEffect(() => {
      setAllTodos(state.todosList)
  }, [state.todosList])

  useEffect(() => {
    if (state.selectedFilter == 'All Todos') {
      setAllTodos(state.todosList)
    }
    else if (state.selectedFilter == 'Completed Todos') {
      setAllTodos(state.todosList.filter(items => items.status === 'Completed'))
    }
}, [state.selectedFilter])


  const ListHeaderComponent = () => {
    return (
      <View style={Styles.listHeaderWrapper}>
        <TouchableOpacity onPress={() => dispatch({ type: Actions.CHANGE_TAB, payload: 'All Todos' })} style={[Styles.headerTabs, { backgroundColor: state.selectedFilter == 'All Todos' ? '#505F79' : '' }]}>
          <Text>All Todos</Text>
        </TouchableOpacity>
        <View style={Styles.headerSeperator} />
        <TouchableOpacity onPress={() => dispatch({ type: Actions.CHANGE_TAB, payload: 'Completed Todos' })} style={[Styles.headerTabs, { backgroundColor: state.selectedFilter == 'Completed Todos' ? '#505F79' : '' }]}>
          <Text>Completed Todos</Text>
        </TouchableOpacity>
      </View>
    )
  }
  return <SafeAreaView style={Styles.containerStyle}>

    <FlatList
      data={allTodos}
      ListEmptyComponent={ListEmptyComponent}
      style={[Styles.containerStyle, { padding: 10 }]}
      ListHeaderComponent={ListHeaderComponent}
      renderItem={(items) => <TodosItemComponent data={items} />}
      extraData={allTodos}
      keyExtractor={item => item.id}
    />
    <FabButtonComponent onPressFab={() => props.navigation.navigate('AddTodo')} />
  </SafeAreaView>;
};

export default TodoList;
