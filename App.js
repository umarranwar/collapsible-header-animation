import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Animated, ScrollView } from "react-native";
import CollapsibleHeader from "./screens/CollapsibleHeader";
export default function App() {
  return (
    <View style={styles.container}>
      <CollapsibleHeader />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  colors: {
    alignSelf: "center",
    width: "90%",
    height: "50%",
    backgroundColor: "lightblue",
  },
});
