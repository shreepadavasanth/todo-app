
import React,{useContext} from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Image,Alert } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { AuthContext } from '../../App'
import * as Actions from '../Screens/Todos/TodosDispatchTypes'
import { useNavigation } from '@react-navigation/native';

const TodosItemComponent = props => {
    const {dispatch}  = useContext(AuthContext)
    const navigation = useNavigation();
    const onPressDelete = (todo) => {
        Alert.alert(
            "Delete Todo?",
            `Are you sure you want to delete ${todo.item.todoName}`,
            [
              {
                text: "Cancel",
                onPress: () => {console.log('Cancel clicked')},
                style: "cancel"
              },
              { text: "OK", onPress: () => dispatch({type:Actions.DELETE_TODO ,payload:todo.item.id}) }
            ],
            { cancelable: false }
          );
    }

    return (
        <TouchableOpacity onPress={()=>navigation.navigate('ToDoDetails',{data:props.data.item})} activeOpacity={1} style={Styles.itemWrapper}>
            <View style={Styles.leftContainer}>
                <Image
                    style={Styles.tinyLogo}
                    source={require('../Images/ToDoPending.jpg')}
                />
                <View style={Styles.bodyWrapper}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{props.data.item.todoName}</Text>
                        <Text style={{ fontSize: 14, color: '#A5A5A5' }}>{`${props.data.item.todoDate} at ${props.data.item.todoTime}`}</Text>
                        <Text>Status: {props.data.item.status}</Text>
                    </View>
                    <Icon onPress={()=>navigation.navigate('EditTodo',{action:'editTodo',data:props.data.item})} name='circle-edit-outline' size={25} color='#A5A5A5' />
                </View>
            </View>
            <View style={Styles.itemSeperetor} />
            <TouchableOpacity onPress={()=>onPressDelete(props.data)} style={Styles.deleteButton}>
                <Icon name='delete' size={25} color='#fff' />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default TodosItemComponent

const Styles = StyleSheet.create({
    itemWrapper: {
        flexDirection: 'row', alignItems:
            'center',
        overflow: 'hidden',
        borderRadius: 7,
        padding: 3
    },
    bodyWrapper: {
        flex: 1,
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    deleteButton: {
        backgroundColor: '#505F79',
        alignItems: 'center',
        height: 20,
        width: 20,
        backgroundColor: 'red',
        height: 70,
        width: 60,
        borderRadius: 7,
        justifyContent: 'center'
    },
    leftContainer: {
        flex: 1,
        alignItems: 'center',
        elevation: 5,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 7,
        flexDirection: 'row',
        overflow: 'hidden'
    },
    itemSeperetor: {
        width: 10
    },
    tinyLogo: {
        width: 45,
        height: 45,
      },
})