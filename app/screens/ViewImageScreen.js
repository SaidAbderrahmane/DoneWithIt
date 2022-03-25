import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  StatusBar,
} from "react-native"
import colors from "../config/colors"
const ViewimageScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>
      </View>
      <Image
        source={require("../assets/chair.jpg")}
        style={styles.image}
      ></Image>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  image: {
    resizeMode: "contain",
    height: "100%",
    width: "100%",
  },
  closeIcon: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
  },
  deleteIcon: {
    backgroundColor: colors.secondary,
    height: 50,
    width: 50,
  },
})

export default ViewimageScreen
