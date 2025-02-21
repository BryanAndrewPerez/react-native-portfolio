import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Modal, Switch } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../ThemeContext"; 

const pillpal = require("../assets/pillpal.png");
const penny = require("../assets/penny.png");

const Projects = () => {
  const navigation = useNavigation();
  const { isDarkMode, toggleTheme } = useTheme(); 
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: isDarkMode ? "#000" : "#fff",
      },
      headerTintColor: isDarkMode ? "#fff" : "#000",
    });
  }, [isDarkMode]);

  const projects = [
    { id: 1, title: "PILLPAL", description: "A medication management app.", image: pillpal },
    { id: 2, title: "PennyWise", description: "A budget tracking app.", image: penny },
  ];

  
  const openModal = (project) => {
    setSelectedProject(project);
    setModalVisible(true);
  };

  return (
    <View style={[styles.container, isDarkMode ? styles.darkBackground : styles.lightBackground]}>
     
      <View style={styles.switchContainer}>
        <Text style={[styles.switchText, isDarkMode ? styles.darkText : styles.lightText]}>
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {projects.map((project) => (
          <TouchableOpacity
            key={project.id}
            style={[styles.projectBox, isDarkMode ? styles.darkBox : styles.lightBox]}
            onPress={() => openModal(project)}
          >
            <Image source={project.image} style={styles.projectImage} />
            <Text style={[styles.projectTitle, isDarkMode ? styles.darkText : styles.lightText]}>
              {project.title}
            </Text>
          </TouchableOpacity>
        ))}

        
        <TouchableOpacity style={styles.returnButton} onPress={() => navigation.goBack()}>
          <Text style={styles.returnButtonText}>Return</Text>
        </TouchableOpacity>
      </ScrollView>

      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, isDarkMode ? styles.darkModal : styles.lightModal]}>
            {selectedProject && (
              <>
                <Image source={selectedProject.image} style={styles.modalImage} />
                <Text style={[styles.modalTitle, isDarkMode ? styles.darkText : styles.lightText]}>
                  {selectedProject.title}
                </Text>
                <Text style={[styles.modalDescription, isDarkMode ? styles.darkText : styles.lightText]}>
                  {selectedProject.description}
                </Text>
              </>
            )}
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContainer: { paddingVertical: 20, alignItems: "center" },
  switchContainer: { flexDirection: "row", justifyContent: "center", alignItems: "center", paddingVertical: 10 },
  switchText: { fontSize: 16, marginRight: 10 },
  projectBox: {
    width: "90%",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  projectImage: { width: 100, height: 100, resizeMode: "contain", marginBottom: 10 },
  projectTitle: { fontSize: 20, fontWeight: "bold" },
  returnButton: { backgroundColor: "maroon", paddingVertical: 12, paddingHorizontal: 30, borderRadius: 10, marginTop: 10 },
  returnButtonText: { color: "white", fontSize: 18, fontWeight: "bold" },

  
  darkBackground: { backgroundColor: "#121212" },
  darkBox: { backgroundColor: "#1e1e1e", borderColor: "#333", borderWidth: 1 },
  darkText: { color: "#fff" },

  
  lightBackground: { backgroundColor: "#f5f5f5" },
  lightBox: { backgroundColor: "#fff", borderColor: "#ccc", borderWidth: 1 },
  lightText: { color: "#333" },

  
  modalOverlay: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" },
  modalContent: { width: "80%", padding: 20, borderRadius: 10, alignItems: "center" },
  darkModal: { backgroundColor: "#1e1e1e" },
  lightModal: { backgroundColor: "#fff" },
  modalImage: { width: 150, height: 150, resizeMode: "contain", marginBottom: 10 },
  modalTitle: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  modalDescription: { fontSize: 16, textAlign: "center", marginBottom: 20 },
  closeButton: { backgroundColor: "maroon", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5 },
  closeButtonText: { color: "white", fontSize: 16, fontWeight: "bold" },
});

export default Projects;
