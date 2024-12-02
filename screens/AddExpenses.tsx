import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const AddExpenses = (props: Props) => {
  return (
    <View>
      <Text style={styles.textTitle}>Add Expenses</Text>
    </View>
  )
}

export default AddExpenses

const styles = StyleSheet.create({
    textTitle:{
        textAlign:'center',
        fontSize:24,
        fontWeight:600,
        color:'green'

    }
})