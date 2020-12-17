/* eslint-disable prettier/prettier */
import React, { Fragment, useState, useEffect, useContext } from 'react';
import { Text, ScrollView, View, TouchableOpacity, ToastAndroid } from 'react-native';
import Styles from '../../Styles/TodosStyles';
import InputComponent from '../../Components/InputComponent'
import ButtonComponent from '../../Components/ButtonComponent'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'
import * as Actions from '../Todos/TodosDispatchTypes'
import { AuthContext } from '../../../App'

const AddTodo = (props) => {
  const { state, dispatch } = useContext(AuthContext)

  const [todoName, setTodoName] = useState('')
  const [todoNameError, setTodoNameError] = useState('')
  const [todoDiscription, setTodoDiscription] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [dateTimeError, setDateTimeError] = useState('')
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (props.route.name === "EditTodo") {
      let navParams = props.route.params.data
      setDate(navParams.todoDate)
      setTime(navParams.todoTime)
      setTodoDiscription(navParams.todoDiscription)
      setTodoName(navParams.todoName)
    }
    return () => {
      dispatch({ type: Actions.SET_INITIAL_STATE })
    }
  }, [])

  useEffect(() => {
    if (state.success != '') {
      ToastAndroid.showWithGravityAndOffset(
        state.success,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
      props.navigation.goBack()
    }
  }, [state.success])

  const openDateTimePicker = Option => {
    if (Option === 'Date') {
      setMode('date')
    }
    else {
      setMode('time')
    }
    setShow(true)
  }

  const onChange = (event, selectedDate) => {
    setShow(false)
    console.log(date)
    setDateTimeError('')
    if (mode === 'date') {
      setDate(moment(selectedDate).format('D MMM YYYY'))
    }
    else {
      setTime(moment(selectedDate).format('hh:mm A'))
    }
  }

  const validateFields = () => {
    let hasError = false
    if (todoName === '') {
      hasError = true
      setTodoNameError('Please enter todo name')
    }
    if (date == '' && time == '') {
      hasError = true
      setDateTimeError('Please select date and time')
    }
    else if (date == '') {
      hasError = true
      setDateTimeError('Please select date')
    }
    else if (time == '') {
      hasError = true
      setDateTimeError('Please select time')
    }
    if (!hasError) {
      let obj = {
        todoName,
        todoDiscription,
        todoDate: date,
        todoTime: time,
        id: props.route.name === "EditTodo" ? props.route.params.data.id : ''
      }
      if (props.route.name === "EditTodo") {
        dispatch({ type: Actions.EDIT_TODO, payload: obj })
      }
      else {
        dispatch({ type: Actions.ADD_TODO, payload: obj })
      }
    }
  }


  return <ScrollView style={[Styles.containerStyle, { paddingHorizontal: 10 }]}>
    {show && (
      <DateTimePicker
        testID="dateTimePicker"
        value={new Date(moment().valueOf())}
        mode={mode}
        is24Hour={true}
        display="default"
        onChange={onChange}
        minimumDate={new Date(moment().valueOf())}
      />
    )}
    <InputComponent
      name='Name:'
      placeholder='Enter todo name'
      onChangeText={(onchange) => {
        setTodoName(onchange)
        setTodoNameError('')
      }}
      Error={todoNameError}
      value={todoName}
    />
    <InputComponent
      textArea
      name='Discription:'
      placeholder='Enter todo discription'
      onChangeText={(onchange) => {
        setTodoDiscription(onchange)
      }}
      value={todoDiscription}
    />
    <Fragment>
      <Text style={Styles.dateTimePickerLabel}>Date and Time:</Text>
      <View style={Styles.dateTimePickerWrapper}>
        <TouchableOpacity onPress={() => openDateTimePicker('Date')} style={Styles.datePickerComp}>
          <Text style={{ color: date ? '#000' : '#A5A5A5' }}>{date ? date : 'Select date'}</Text>
        </TouchableOpacity>
        <View style={{ width: 5 }} />
        <TouchableOpacity onPress={() => openDateTimePicker('Time')} style={Styles.timePickerComp}>
          <Text style={{ color: time ? '#000' : '#A5A5A5' }}>{time ? time : 'Select date'}</Text>
        </TouchableOpacity>
      </View>
      {dateTimeError ? <Text style={Styles.errorLabel}>{dateTimeError}</Text> : null}
    </Fragment>
    <ButtonComponent onPressButton={validateFields} label='SUBMIT' />
  </ScrollView>;
};

export default AddTodo;
