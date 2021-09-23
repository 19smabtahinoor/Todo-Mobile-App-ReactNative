import React, { useState } from 'react';
import { Alert, FlatList, Keyboard, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { key: '1', text: 'Buy Coffee' },
    { key: '2', text: 'Create an app' },
    { key: '3', text: 'Go to school and take Coffee' },
  ])

  //delete function
  const pressHandle = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key !== key);
    })
  }

  //add to fo 
  const submitHandler = (text) => {

    //validation 
    if(text.length > 3){
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos]
      })
    }else{
      Alert.alert('OOPS!' , 'Todos must be over 3 chars long' ,[
        {text:'Close',onPress:() => console.log('alert closed')}
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
      console.log('dismised Keyboard!!')
    }}>
    <ScrollView>
    <View style={styles.container}>
      {/* header  */}
      <Header />
      <View style={styles.content}>
        {/* to form  */}
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <Text style={styles.todoHeading}>All todos</Text>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <>
                <TodoItem item={item} pressHanlder={pressHandle} />
              </>
            )}
          />
        </View>
      </View>
    </View>
    </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  },
  todoHeading: {
    marginBottom: 8,
    fontSize: 20,
    color: '#793ef9',
    fontWeight: 'bold'
  }
});
