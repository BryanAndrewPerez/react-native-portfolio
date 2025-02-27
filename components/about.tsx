import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, Switch } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; 
import { useNavigation } from "@react-navigation/native"; 
import { useTheme } from "../ThemeContext"; 

const self = require("../assets/self.jpg");

const About = () => {
  const navigation = useNavigation();
  const { isDarkMode, toggleTheme } = useTheme();

  // Update header color based on dark mode
  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: isDarkMode ? "#000" : "#fff",
      },
      headerTintColor: isDarkMode ? "#fff" : "#000",
    });
  }, [isDarkMode]);

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? "#121212" : "white" }]}>
      
      <View style={styles.toggleContainer}>
        <Text style={[styles.toggleText, { color: isDarkMode ? "white" : "black" }]}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>

      <Image source={self} style={styles.profileImage} resizeMode="cover" />

      <Text style={[styles.name, { color: isDarkMode ? "white" : "black" }]}>Bryan Perez</Text>
      <Text style={[styles.info, { color: isDarkMode ? "#DDDDDD" : "black" }]}>3rd Year Computer Science Student</Text>
      <Text style={[styles.info, { color: isDarkMode ? "#DDDDDD" : "black" }]}>
        Computer Science Program Coordinator at DLSL SG - CITE Council (A.Y. 24-25)
      </Text>
      <Text style={[styles.info, { color: isDarkMode ? "#DDDDDD" : "black" }]}>
        Skills:
      </Text>
      <Text style={[styles.info, { color: isDarkMode ? "#DDDDDD" : "black" }]}>
        C++ Programming, React, React Native, Node.js, MongoDB
      </Text>


      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/bryanandrew.perez.3")}>
          <FontAwesome name="facebook" size={35} color={isDarkMode ? "white" : "black"} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL("https://www.youtube.com/@yuniqq7610")}>
          <FontAwesome name="youtube-play" size={35} color={isDarkMode ? "white" : "black"} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL("https://open.spotify.com/user/astrogamerhd")}>
          <FontAwesome name="spotify" size={35} color={isDarkMode ? "white" : "black"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  toggleContainer: {
    position: "absolute",
    top: 30,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  toggleText: {
    marginRight: 10,
    fontSize: 16,
  },
  profileImage: {
    width: 250, 
    height: 300, 
    marginBottom: 15,
    borderRadius: 10,
  },
  
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginTop: 15,
  },
});

export default About;
