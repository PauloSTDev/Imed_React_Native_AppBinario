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
        fontSize: 20,
        marginTop: 15
    },
    headerBack: {
        backgroundColor: "#3a67b0",
        height: 70,
        alignItems: "center",
        justifyContent: "center"
    }


})