import {
  StyleSheet,
  Text,
  Alert,
  Dimensions,
  View,
  Image,
  SafeAreaView,
  Button,
  Platform,
  StatusBar,
} from "react-native"
import AppButton from "./app/components/AppButton"
import WelcomeScreen from "./app/screens/WelcomeScreen"
import Card from "./app/components/Card"
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen"
import ViewimageScreen from "./app/screens/ViewImageScreen"
import MessagesScreen from "./app/screens/MessagesScreen"

export default function App() {
  return <MessagesScreen />
}
