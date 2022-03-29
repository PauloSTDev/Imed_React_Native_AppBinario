import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.headerBack}>
      <Text style={styles.headerFont}>Decipher</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headerFont: {
        color: "#ededed",
        fontSize: 30,
        marginTop: 15, 
        paddingBottom: 10
    },
    headerBack: {
        backgroundColor: "#8531bd",
        height: 70,
        alignItems: "center",
        justifyContent: "center"
    }
})