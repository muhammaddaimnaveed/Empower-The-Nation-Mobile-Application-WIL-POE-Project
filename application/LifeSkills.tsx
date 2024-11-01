import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function LifeSkills({ navigation }) {
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

      <Text style={styles.text2}>Life Skills</Text>

      <Image style={styles.img1} source={require("./assets/ukmuih5b.png")} />

        <Text style={styles.text3}>
        At  Empower   the Nation   School, our  Life Skills  course is   designed to
empower  students   with  essential   knowledge  and   ;practical  skills  for
navigating  everyday challenges.  The curriculum  covers vital  topics such
as  opening and  managing a  bank account,  ensuring students  understand financial  basics and  can  handle  their personal finances  with  confidence. Students  also explore   fundamental labor   laws,  gaining insight into their
rights  and  responsibilities   in   the  workplace.  To   foster  personal   and
professional   growth, the   course includes instruction in basic reading and writing  literacy, as  well as  numeric literacy,  equipping  learners  with the foundational skills needed to excel in various aspects of life and work.
        </Text>

        <Text style={styles.text4}>Fees</Text>


        <Text style={styles.text5}>
        R1500
        </Text>

        <Text style={styles.text6}>Purpose</Text>


        <Text style={styles.text7}>
        To provide skills to navigate basic life necessities
          </Text>

        <Text style={styles.text8}>Content</Text>

          <Text style={styles.text9}>Opening a bank account</Text>

          <Text style={styles.text9}>Basic numeric literacy</Text>

          <Text style={styles.text9}>Basic reading and writing literacy</Text>

          <Text style={styles.text9}>Basic labour law (know your rights)</Text>

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

