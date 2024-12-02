import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => props.navigation.navigate("AddExpenses")}>
        <Text style={styles.textButton}>Add Expense</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:12,
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 600,
    color: 'green',

  },
  textButton: {
    textAlign: 'center',
    color:'white',


  },
  addButton: {
    flex:1,
    alignItems:'center',
    backgroundColor: 'green',
    paddingHorizontal:12,
    padding: 10,
    borderRadius: 12,
    border: 1,
  }
})