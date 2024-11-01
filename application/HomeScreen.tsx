import React from 'react';
import {  StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';


export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Image style={styles.white1} source={require("./assets/h1xf42gq.png")} />
        <Image style={styles.white2} source={require("./assets/h1xf42gq.png")} />
        <Image style={styles.img1} source={require("./assets/group.png")} />
        <Image style={styles.logo} source={require("./assets/graduation-cap.png")} />
        <Text style={styles.name}>Empower The Nation</Text>
        <Text style={styles.text1}>Unlock Your Potential  </Text>
        <Text style={styles.text1}>Elevate Your Skills</Text>
        <Text style={styles.text1}>Transform Your Future</Text>
        <Text style={styles.text2}>© 2024 Empower The Nation. All Rights Reserved.</Text>
        
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
     
    </View>
  );
}

/*
The HomeScreen features the title "Empower The Nation" alongside motivational phrases aimed at inspiring users. It includes an image of graduating students and a "Next" button that navigates to the LoginScreen, encouraging engagement with the app. A copyright notice for 2024 is also displayed at the bottom.*/ 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#043c2c',
    alignItems: 'center',
    justifyContent: 'center',
  },

  name:{
    color:"#000000",
    fontSize:26,
    fontWeight:"bold",
    bottom:521,
    left:44,
  },

  logo:{
    height:80,
    width:80,
    bottom:458,
    right:138,
  },
  white1:{
    height:110,
    width:400,
    top:35,
  },

  white2:{
    height:210,
    width:400,
    top:505,
  },

  img1:{
  height:200,
   width:300,
   borderRadius:30,
   bottom:120,
  },

  text1:{
    fontSize:28,
    marginTop:10,
    bottom:210,
    fontWeight:"bold",
    color:"#d4af37",
  },

  text2:{
    fontSize:16,
    fontWeight:"bold",
    bottom:15,
  },

   
  button: {
    height:58,
    backgroundColor: '#D3D3D3',
    paddingVertical: 15,
    paddingHorizontal: 30,
    bottom: 142,
    alignItems: 'center',
    borderRadius: 15, },
  
  buttonText: {
    color: '#000000',
    bottom:4,
    fontSize: 25,
    fontWeight:'500', },
 
});

export default HomeScreen;
