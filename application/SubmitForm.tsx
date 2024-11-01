import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function LifeSkills({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.white1} source={require("./assets/h1xf42gq.png")} />
      
      <Image style={styles.logo} source={require("./assets/graduation-cap.png")} />
      <Text style={styles.name}>Empower The Nation</Text>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('OptionScreen')}>
        <Image style={styles.backIcon} source={require("./assets/arrow-left.png")} />
      </TouchableOpacity>

      <Text style={styles.text1}>Thank You For Your Responce!</Text>

      <Text style={styles.text1}>We Will Get Back To Your Shortly!</Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#043c2c',
    alignItems: 'center',
    padding: 20,
  },

  name: {
    color: "#000000",
    fontSize: 26,
    fontWeight: "bold",
    bottom: 165, 
    left:45,
  },

  logo: {
    height: 80,
    width: 80,
    bottom: 103,
    right:138,
   
  },
  
  white1: {
    height: 110,
    width: 400,
    bottom: 22,
  },

  text1: {
    fontSize: 23,
    fontWeight: "bold",
    marginTop:50,
    color: "#ffffff",
    textAlign:'center',
    
  },
  
  backButton: {
    bottom: 115,
    right:137,
  },

  backIcon: {
    height: 30,
    width: 30,
  },
});

