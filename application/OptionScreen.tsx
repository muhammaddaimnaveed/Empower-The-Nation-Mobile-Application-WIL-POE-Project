import React from 'react';
import {  StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';

// The Option Screen includes the About us button, View Courses button and the Apply Now button that users can choose from.
export default function OptionScreen({ navigation }) {
  return (
    <View style={styles.container}>

        <Image style={styles.white1} source={require("./assets/h1xf42gq.png")} />
        
      
        <Image style={styles.logo} source={require("./assets/graduation-cap.png")} />
        <Text style={styles.name}>Empower The Nation</Text>

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('HomeScreen')}>
        <Image style={styles.backIcon} source={require("./assets/arrow-left.png")} />
      </TouchableOpacity>
       
        <Text style={styles.text2}>© 2024 Empower The Nation. All Rights Reserved.</Text>
        
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AboutUs')}>
        <Text style={styles.buttonText}>About Us</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ViewCourses')}>
        <Text style={styles.buttonText}>View Courses</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ApplyNow')}>
        <Text style={styles.buttonText}>Apply Now</Text>
      </TouchableOpacity>
     
    </View>
  );
}

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
    bottom:165,
    left:45,
  },

  logo:{
    height:80,
    width:80,
    bottom:101,
    right:136,
  },
  white1:{
    height:110,
    width:400,
    bottom:18,
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
    color:'#ffffff',
    fontWeight:"bold",
    top:470,
  },

   
  button: {
    height:58,
    backgroundColor: '#D3D3D3',
    marginTop:100,
    bottom: 160,
    elevation:1,
    width:320,
    alignItems: 'center',
    borderRadius: 15, },
  
  buttonText: {
    color: '#000000',
    top:12,
    fontSize: 25,
    fontWeight:'600', },

    backButton: {
      bottom: 115,
      right:137,
    },
  
    backIcon: {
      height: 30,
      width: 30,
    },
  
 
});

export default OptionScreen;
