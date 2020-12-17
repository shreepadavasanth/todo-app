import React, { useContext,useEffect} from 'react'
import { SafeAreaView, Text, View, TouchableOpacity, ToastAndroid } from 'react-native'
import Styles from '../../Styles/TodosStyles';
import { AuthContext } from '../../../App'
import * as Actions from '../Todos/TodosDispatchTypes'

const ToDoDetails = (props) => {
    const {state, dispatch } = useContext(AuthContext)
    let navParams = props.route.params.data


    useEffect(() => {
        return () => {
          dispatch({ type: Actions.SET_INITIAL_STATE })
        }
      }, [])

    useEffect(()=>{
        if(state.success != '')
        {
         ToastAndroid.showWithGravityAndOffset(
           state.success,
           ToastAndroid.LONG,
           ToastAndroid.BOTTOM,
           25,
           50
         );
         props.navigation.goBack()
        }
     },[state.success])

    return (
        <SafeAreaView style={Styles.containerStyle}>
            <View style={{ elevation: 3, backgroundColor: '#fff', margin: 10, padding: 10, borderRadius: 7, overflow: 'hidden' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{navParams.todoName}</Text>
            <Text style={{ fontSize: 14, color: '#A5A5A5' }}>{navParams.todoName}</Text>
            <Text style={{ fontSize: 14, color: '#A5A5A5' }}>{`${navParams.todoDate} at ${navParams.todoTime}`}</Text>
            <Text>Status: {navParams.status}</Text>
                <View style={{ flexDirection: 'row', marginTop: 5,borderRadius:7,overflow:'hidden' }}>
                    <TouchableOpacity onPress={() => dispatch({ type:Actions.CHANGE_STATUS,payload:{id:navParams.id,status:'In-complete'} })} style={{ alignItems: 'center', justifyContent: 'center', flex: 1, paddingVertical: 10, backgroundColor: 'red' }}>
                        <Text>MARK INCOMPLETE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => dispatch({ type:Actions.CHANGE_STATUS,payload:{id:navParams.id,status:'Completed'} })} style={{ alignItems: 'center', justifyContent: 'center', flex: 1, paddingVertical: 10, backgroundColor: 'green' }}>
                        <Text>MARK COMPLETE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ToDoDetails