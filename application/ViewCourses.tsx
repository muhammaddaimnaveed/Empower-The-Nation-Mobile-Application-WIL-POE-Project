import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

// The View Courses Us Screen allows users to view through the different courses offered by Empower The Nation.

export default function ViewCourses({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.white1} source={require("./assets/h1xf42gq.png")} />
      
      <Image style={styles.logo} source={require("./assets/graduation-cap.png")} />
      <Text style={styles.name}>Empower The Nation</Text>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('OptionScreen')}>
        <Image style={styles.backIcon} source={require("./assets/arrow-left.png")} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button7} onPress={() => navigation.navigate('ApplyNow')}>
        <Text style={styles.buttonText7}>Apply Now</Text>
      </TouchableOpacity>

     

      <ScrollView style={styles.scrollViewContent}>

      <Text style={styles.text1}>Six-Week Courses</Text>

      <Text style={styles.text8}>Child Minding</Text>

      <Image style={styles.img1} source={require("./assets/a.png")} />
     
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChildMinding')}>
        <Text style={styles.buttonText}>View</Text>
      </TouchableOpacity>

     <Text style={styles.text2}>Cooking</Text>

     <Image style={styles.img2} source={require("./assets/cooking.png")} />

     <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Cooking')}>
      <Text style={styles.buttonText1}>View</Text>
     </TouchableOpacity>

     <Text style={styles.text3}>Garden Maintenance</Text>

     <Image style={styles.img3} source={require("./assets/gardener.jpg")} />

     <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('GardenMaintenance')}>
      <Text style={styles.buttonText2}>View</Text>
     </TouchableOpacity>

     <Text style={styles.text9}>Six-Month Courses</Text>

     
     <Text style={styles.text4}>First Aid</Text>

     <Image style={styles.img4} source={require("./assets/firstaid.jpg")} />

     <TouchableOpacity style={styles.button3} onPress={() => navigation.navigate('FirstAid')}>
      <Text style={styles.buttonText3}>View</Text>
     </TouchableOpacity>

     <Text style={styles.text5}>Sewing</Text>

     <Image style={styles.img5} source={require("./assets/m.png")} />

     <TouchableOpacity style={styles.button4} onPress={() => navigation.navigate('Sewing')}>
      <Text style={styles.buttonText4}>View</Text>
     </TouchableOpacity>

     <Text style={styles.text6}>Landscaping</Text>

     <Image style={styles.img6} source={require("./assets/landscapping.jpg")} />

     <TouchableOpacity style={styles.button5} onPress={() => navigation.navigate('Landscaping')}>
      <Text style={styles.buttonText5}>View</Text>
     </TouchableOpacity>

     <Text style={styles.text7}>Life Skills</Text>

     <Image style={styles.img7} source={require("./assets/d4f47s3d.png")} />

     <TouchableOpacity style={styles.button6} onPress={() => navigation.navigate('LifeSkills')}>
      <Text style={styles.buttonText6}>View</Text>
     </TouchableOpacity>

    


     <Text style={styles.text2}></Text>
     <Text style={styles.text2}></Text>
     <Text style={styles.text2}></Text>
     <Text style={styles.text2}></Text>
     <Text style={styles.text2}></Text>
     <Text style={styles.text2}></Text>
     <Text style={styles.text2}></Text>
     <Text style={styles.text2}></Text>
     <Text style={styles.text2}></Text>
     <Text style={styles.text2}></Text>
     <Text style={styles.text2}></Text>
     <Text style={styles.text2}></Text>
     <Text style={styles.text2}></Text>
     <Text style={styles.text2}></Text>
    
  


      </ScrollView>

     
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


  scrollViewContent: {
    paddingBottom: 50,
    bottom:105,
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
    fontSize: 35,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign:'center',
    
  },

  text2: {
    fontSize: 30,
    color: '#d4af37',
    fontWeight: "500",
    textAlign: 'center', 
    top:100, 
  },

  text3: {
    fontSize: 30,
    color: '#d4af37',
    fontWeight: "500",
    textAlign: 'center', 
    top:180, 
  },

  text4: {
    fontSize: 30,
    color: '#d4af37',
    fontWeight: "500",
    textAlign: 'center', 
    top:280, 
   },

  text5: {
    fontSize: 30,
    color: '#d4af37',
    fontWeight: "500",
    textAlign: 'center', 
    top:352, 
      },

    text6: {
        fontSize: 30,
        color: '#d4af37',
        fontWeight: "500",
        textAlign: 'center', 
        top:428,
   },

   text7: {
    fontSize: 30,
    color: '#d4af37',
    fontWeight: "500",
    textAlign: 'center', 
    top:508, 
      },
      
   text8: {
    fontSize: 30,
    color: '#d4af37',
    fontWeight: "500",
    textAlign: 'center', 
    top:25, 
      },

text9: {
        fontSize: 35,
        fontWeight: "bold",
        color: "#ffffff",
        textAlign:'center',
        top:252,
        
      },

  img1:{
    height:250,
    width:330,
    alignSelf:'center',
    borderRadius:20,
    top:38,
  },

  img2:{
    height:250,
    width:330,
    alignSelf:'center',
    borderRadius:20,
    top:115,
  },

  img3:{
    height:250,
    width:330,
    alignSelf:'center',
    borderRadius:20,
    top:195,
  },

  img4:{
    height:250,
    width:330,
    alignSelf:'center',
    borderRadius:20,
    top:292,
  },

  img5:{
    height:250,
    width:330,
    alignSelf:'center',
    borderRadius:20,
    top:366,
  },

  img6:{
    height:250,
    width:330,
    alignSelf:'center',
    borderRadius:20,
    top:442,
  },

  img7:{
    height:250,
    width:330,
    alignSelf:'center',
    borderRadius:20,
    top:522,
  },
  

  backButton: {
    bottom: 115,
    right:137,
  },

  backIcon: {
    height: 30,
    width: 30,
  },

  button: {
    height:58,
    backgroundColor: '#D3D3D3',
    paddingVertical: 15,
    paddingHorizontal: 30,
    width:115,
    top:65,
    alignSelf:'center',
    borderRadius: 15, },
  
  buttonText: {
    color: '#000000',
    bottom:4,
    fontSize: 25,
    fontWeight:'500', },

button1: {
        height:58,
        backgroundColor: '#D3D3D3',
        paddingVertical: 15,
        paddingHorizontal: 30,
        width:115,
        top:142,
        alignSelf:'center',
        borderRadius: 15, },
      
 buttonText1: {
        color: '#000000',
        bottom:4,
        fontSize: 25,
        fontWeight:'500', },

 button2: {
            height:58,
            backgroundColor: '#D3D3D3',
            paddingVertical: 15,
            paddingHorizontal: 30,
            width:115,
            top:220,
            alignSelf:'center',
            borderRadius: 15, },
          
 buttonText2: {
            color: '#000000',
            bottom:4,
            fontSize: 25,
            fontWeight:'500', },

            
 button3: {
    height:58,
    backgroundColor: '#D3D3D3',
    paddingVertical: 15,
    paddingHorizontal: 30,
    width:115,
    top:315,
    alignSelf:'center',
    borderRadius: 15, },
  
 buttonText3: {
    color: '#000000',
    bottom:4,
    fontSize: 25,
    fontWeight:'500', },
    
 button4: {
        height:58,
        backgroundColor: '#D3D3D3',
        paddingVertical: 15,
        paddingHorizontal: 30,
        width:115,
        top:390,
        alignSelf:'center',
        borderRadius: 15, },
      
 buttonText4: {
        color: '#000000',
        bottom:4,
        fontSize: 25,
        fontWeight:'500', },

 button5: {
            height:58,
            backgroundColor: '#D3D3D3',
            paddingVertical: 15,
            paddingHorizontal: 30,
            width:115,
            top:465,
            alignSelf:'center',
            borderRadius: 15, },
          
 buttonText5: {
            color: '#000000',
            bottom:4,
            fontSize: 25,
            fontWeight:'500', },

            
 button6: {
    height:58,
    backgroundColor: '#D3D3D3',
    paddingVertical: 15,
    paddingHorizontal: 30,
    width:115,
    top:546,
    alignSelf:'center',
    borderRadius: 15,
    zIndex: 1, },
  
 buttonText6: {
    color: '#000000',
    bottom:4,
    fontSize: 25,
    fontWeight:'500', },

  button7: {
      height:50,
      backgroundColor: '#D3D3D3',
      width:110,
      bottom:150,
      left:108,
      alignSelf:'center',
      borderRadius: 15, },
    
  buttonText7: {
      color: '#000000',
      top:12,
      textAlign:'center',
      fontSize: 18,
      fontWeight:'600', },
});



