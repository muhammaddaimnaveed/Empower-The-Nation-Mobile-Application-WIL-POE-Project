import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function FirstAid({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.white1} source={require("./assets/h1xf42gq.png")} />
      
      <Image style={styles.logo} source={require("./assets/graduation-cap.png")} />
      <Text style={styles.name}>Empower The Nation</Text>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('ViewCourses')}>
        <Image style={styles.backIcon} source={require("./assets/arrow-left.png")} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ApplyNow')}>
        <Text style={styles.buttonText}>Apply Now</Text>
      </TouchableOpacity>

     

      <ScrollView style={styles.scrollViewContent}>

      <Text style={styles.text1}>Six-Month Course</Text>

      <Text style={styles.text2}>First Aid</Text>

      <Image style={styles.img1} source={require("./assets/tf8i0h97.png")} />

        <Text style={styles.text3}>
        At  Empower   the  Nation   School,  our  first  aid   program   provides Participants   with   essential   techniques  for  managing  wounds   and
bleeding,  including   proper  bandaging   and   pressure  application  to
control  hemorrhage.  The  curriculum  also  covers treatment for burns
and  fractures,  ensuring  you  can provide immediate and effective care.
We  emphasize  emergency  scene management to help you  assess  and
manage  chaotic  situations  safely  and  efficiently.  Key   skills  include
Cardio-Pulmonary   Resuscitation  for  reviving  individuals   in  cardiac
arrest  and strategies for addressing respiratory distress, such as  choking 
or  blocked  airways.  This  thorough   training  equips  you  to   respond
effectively  and calmly in critical moments, making a significant impact
in emergencies.
        </Text>

        <Text style={styles.text4}>Fees</Text>


        <Text style={styles.text5}>
        R1500
        </Text>

        <Text style={styles.text6}>Purpose</Text>


        <Text style={styles.text7}>
        To provide first aid awareness and basic life support
          </Text>

        <Text style={styles.text8}>Content</Text>

          <Text style={styles.text9}>Emergency scene management</Text>

          <Text style={styles.text9}>Wounds and bleeding</Text>

          <Text style={styles.text9}>Burns and fractures</Text>

          <Text style={styles.text9}>Cardio-Pulmonary Resuscitation (CPR)</Text>

          <Text style={styles.text9}>Respiratory distress e.g., Choking, blocked airway</Text>

          
          <Text style={styles.text4}></Text>
          <Text style={styles.text4}></Text>
          <Text style={styles.text4}></Text>
        
 
          
       

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
    top:20, 
      },

  text3: {
    fontSize: 15,
    color: '#ffffff',
    fontWeight: "500",
    lineHeight: 20, 
    textAlign: 'justify', 
    paddingHorizontal: 10, 
    top:58,
  },

  text4: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#d4af37",
    textAlign:'center',
    top:54,
   },

  text5: {
    fontSize: 22,
    color: '#ffffff',
    fontWeight: "500",
    left:151,
    top:62, 
      },

    text6: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#d4af37",
    left:128,
    top:76,
   },

   text7: {
    fontSize: 22,
    color: '#ffffff',
    fontWeight: "500",
    textAlign: 'center', 
    top:88, 
      },

    text8: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#d4af37",
        left:132,
        top:102,
       },

    text9: {
        fontSize: 22,
        color: '#ffffff',
        fontWeight: "500",
        textAlign: 'center', 
        marginTop:20,
        top:95, 
          },

  img1:{
    height:250,
    width:330,
    alignSelf:'center',
    borderRadius:20,
    top:36,
  },

  img2:{
    height:250,
    width:250,
    alignSelf:'center',
    borderRadius:20,
    top:105,
  },

  img3:{
    height:250,
    width:330,
    alignSelf:'center',
    borderRadius:20,
    top:155,
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
    height:50,
    backgroundColor: '#D3D3D3',
    width:110,
    bottom:150,
    left:108,
    alignSelf:'center',
    borderRadius: 15, },
  
  buttonText: {
    color: '#000000',
    top:12,
    textAlign:'center',
    fontSize: 18,
    fontWeight:'600', },
});

