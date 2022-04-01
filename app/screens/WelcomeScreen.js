import { View, StyleSheet, Image, ImageBackground, Text } from "react-native"
import { computeWindowedRenderLimits } from "react-native/Libraries/Lists/VirtualizeUtils"
import AppButton from "../components/AppButton"
import colors from "../config/colors"
const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagline}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login"/>
        <AppButton title="Register" color="secondary"/>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  buttonContainer: {
    padding: 20,
    width: "100%",
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
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
})

export default WelcomeScreen
