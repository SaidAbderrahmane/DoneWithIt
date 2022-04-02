import { View, StyleSheet } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-web"

export default function Screen({ children }) {
  return (
    <SafeAreaView style={styles.screen}>
      <View>{children}</View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
})
