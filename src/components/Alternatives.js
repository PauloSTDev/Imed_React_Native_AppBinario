import { View, Text, StyleSheet, Button} from 'react-native'
import React from 'react'

export default function Alternatives() {


  return (
    <View style={styles.respostas}>
      <View style={styles.button}>
      <Button
        title="10"
        color="#8531bd"
        value= "10"
        onPress = {() => console.log('10')}
      />
      </View>
      <View style={styles.button}>
      <Button
        title="20"
        color="#8531bd"
        value= "20"
        onPress = {() => console.log('20')}
      />
      </View>
      <View style={styles.button}>
      <Button
        title="30"
        color="#8531bd"
        value= "30"
        onPress = {() => console.log('30')}
      />
      </View>
      <View style={styles.button}>
      <Button
        title="40"
        color="#8531bd"
        value= "40"
        onPress = {() => console.log('40')}
      />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  respostas: {
    padding: 6,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: "black",
  },

  button:{
    padding: 15,
  }
})