import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Switch } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../ThemeContext"; 

const bgImg = require("../assets/app-bg.jpg");

type RootStackParamList = {
  Projects: undefined;
  About: undefined;
};

type HomepageProps = {
  navigation: StackNavigationProp<RootStackParamList, "Projects">;
};

const Homepage: React.FC<HomepageProps> = ({ navigation }) => {
  const { isDarkMode, toggleTheme } = useTheme(); 

  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: isDarkMode ? "#121212" : "#f5f5f5", 
      },
      headerTintColor: isDarkMode ? "#fff" : "#000", 
    });
  }, [isDarkMode, navigation]);

  return (
    <ImageBackground source={bgImg} style={styles.background}>
      <View style={[styles.overlay, { backgroundColor: isDarkMode ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.7)" }]} />

      
      <View style={styles.toggleContainer}>
        <Text style={[styles.toggleText, { color: isDarkMode ? "white" : "black" }]}>
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>

      <View style={styles.content}>
        <Text style={[styles.text, { color: isDarkMode ? "white" : "black" }]}>
          Hi! {"\n"} Welcome to my{"\n"} Portfolio
        </Text>

        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate("Projects")}>
          <Text style={styles.buttonText}>MY PROJECTS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button2]} onPress={() => navigation.navigate("About")}>
          <Text style={styles.buttonText}>ABOUT ME</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    position: "absolute",
    zIndex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    fontFamily: "Arial",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  button1: {
    backgroundColor: "maroon",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
  },
  button2: {
    backgroundColor: "maroon",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  toggleContainer: {
    position: "absolute",
    top: 50, 
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    zIndex: 10, 
  },
  toggleText: {
    marginRight: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Homepage;
