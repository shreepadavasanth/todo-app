import * as Actions from '../Todos/TodosDispatchTypes'
import AddTodo from './AddTodos'
export const initialState = {
    todosList: [],
    success: '',
    selectedFilter: 'All Todos'
}
//To handle all the states of todo list.
export const todoreducer = (state, action) => {
    switch (action.type) {
        case Actions.CHANGE_TAB:
            return {
                ...state,
                selectedFilter: action.payload,
            }
        case Actions.ADD_TODO:
            return {
                ...state,
                todosList: state.todosList.concat([{...action.payload,id:state.todosList.length ? ((state.todosList[state.todosList.length - 1].id) + 1).toString() : 1 ,status:'Pending'}]),
                success: 'Todo addded successfully'
            }
        case Actions.SET_INITIAL_STATE:
            return{
                ...state,
                success:''
            }
        case Actions.DELETE_TODO:
            return{
                ...state,
                todosList:state.todosList.filter(items=>items.id !== action.payload)
            }
        case Actions.EDIT_TODO:
            return{
                ...state,
                todosList:state.todosList.map(items=>{
                    if(items.id == action.payload.id){
                        return{
                            ...action.payload,
                            status:'Pending'
                        }
                    }
                    return{
                        ...items
                    }
                }),
                success: 'Todo updated successfully'
            }
        case Actions.CHANGE_STATUS:
            return{
                ...state,
                todosList:state.todosList.map(items=>{
                    if(items.id == action.payload.id){
                        return{
                            ...items,
                            status:action.payload.status
                        }
                    }
                    return{
                        ...items
                    }
                }),
                success: 'Todo updated successfully'
            }
        default:
            return {
                ...state
            }
    }
}