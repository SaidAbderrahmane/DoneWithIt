import { View, StyleSheet, Image, ImageBackground, Text } from "react-native"
import { computeWindowedRenderLimits } from "react-native/Libraries/Lists/VirtualizeUtils"
import colors from "../config/colors"
const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.text}>Sell what you don't need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: colors.primary,
    width: "100%",
    height: 70,
  },
  registerButton: {
    backgroundColor: colors.secondary,
    width: "100%",
    height: 70,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    alignItems: "center",
    top: 70,
    position: "absolute",
  },
})

export default WelcomeScreen
