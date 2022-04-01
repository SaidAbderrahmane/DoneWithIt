import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  StatusBar,
} from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import colors from "../config/colors"


const ViewimageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35}/>
      </View>
      <View style={styles.deleteIcon}>
      <MaterialCommunityIcons name="trash-can-outline" color="white" size={35}/>
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
    position: "absolute",
    top: 40,
    right: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
})

export default ViewimageScreen
