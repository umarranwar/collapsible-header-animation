import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  Animated,
  TextInput,
} from "react-native";
import React, { useRef } from "react";
import { Ionicons } from "@expo/vector-icons";

const HEADER_HEIGHT = 150;

const CollapsibleHeader = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 150);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 150],
    outputRange: [0, -150],
  });

  const featureIconCircleAnimation = {
    opacity: diffClamp.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 0],
    }),
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Animated.View
        style={[styles.header, { transform: [{ translateY: translateY }] }]}
      >
        <Animated.View style={{ featureIconCircleAnimation }}>
          <Text style={styles.textStyle}>Good Morning Dear Mr Ahmed</Text>
        </Animated.View>
        <Animated.View
          style={[styles.logoContainer, featureIconCircleAnimation]}
        >
          <View>
            <Animated.Image
              style={[styles.logo]}
              source={require("../assets/logo.png")}
            />
          </View>
          <View style={styles.searchContainer}>
            <View style={{ margin: 5 }}>
              <Ionicons name="location-outline" size={25} color="white" />
            </View>
            <TextInput
              placeholder="Search location"
              placeholderTextColor="rgba(255, 255, 255, 0.8)"
              style={[styles.searchInput]}
            />
            <Image
              source={require("../assets/images/search.png")}
              style={[styles.icon16, { marginLeft: 8 }]}
            />
          </View>
          <Animated.View style={[styles.iconBg]}>
            <Ionicons name="person-outline" size={25} color="#ed9b42" />
          </Animated.View>
        </Animated.View>
      </Animated.View>
      <Animated.ScrollView
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
          const offsetY = e.nativeEvent.contentOffset.y;
          animatedValue.setValue(offsetY);
        }}
      >
        <View style={styles.content}></View>
        <View style={styles.content}></View>
        <View style={styles.content}></View>
        <View style={styles.content}></View>
        <View style={styles.content}></View>
        <View style={styles.content}></View>
        <View style={styles.content}></View>
        <View style={styles.content}></View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default CollapsibleHeader;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: "column",
    position: "absolute",
    width: "100%",
    height: HEADER_HEIGHT,
    backgroundColor: "#ff974d",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    right: 0,
    left: 0,
    zIndex: 999,
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
    marginBottom: 30,
  },
  textStyle: {
    color: "white",
    fontSize: 15,
    margin: 30,
  },
  logo: {
    width: 180,
    height: 60,
  },
  iconBg: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: 40,
    height: 40,
    margin: 20,
    borderRadius: 100,
  },
  content: {
    height: 400,
    margin: 15,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "lightblue",
  },
  searchContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  icon16: {
    width: 25,
    height: 25,
    margin: 5,
  },
  searchInput: {
    position: "absolute",
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    color: "white",
    borderRadius: 4,
    paddingVertical: 4,
    paddingLeft: 32,
  },
});
