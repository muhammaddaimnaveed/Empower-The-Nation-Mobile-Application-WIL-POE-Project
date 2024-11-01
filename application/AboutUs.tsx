import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

// The About Us Screen provides users with information regarding Empoer The Nation.

export default function OptionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.white1} source={require("./assets/h1xf42gq.png")} />
      
      <Image style={styles.logo} source={require("./assets/graduation-cap.png")} />
      <Text style={styles.name}>Empower The Nation</Text>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('OptionScreen')}>
        <Image style={styles.backIcon} source={require("./assets/arrow-left.png")} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ApplyNow')}>
        <Text style={styles.buttonText}>Apply Now</Text>
      </TouchableOpacity>

     

      <ScrollView style={styles.scrollViewContent}>

      <Text style={styles.text1}>About Us</Text>

      <Image style={styles.img1} source={require("./assets/classroom.png")} />

        <Text style={styles.text3}>
          At Empower The Nation, our commitment is to drive personal and professional growth by providing individuals with high-quality, marketable skills. We offer a diverse range of programs designed to meet the demands of today’s evolving job market, ensuring that individuals gain real-world expertise. Our hands-on approach and expert instructors ensure individuals gain practical knowledge and confidence, paving the way for career advancement and new opportunities. Join us in our mission to empower individuals and strengthen communities by equipping them with the skills needed to succeed in today’s job market.
        </Text>

        <Text style={styles.text4}>Our Founder</Text>

        <Image style={styles.img2} source={require("./assets/founder.png")} />

        <Text style={styles.text5}>
        Precious Radebe, the visionary founder of Empower The Nation, launched the organization in 2018 in Johannesburg with a mission to equip individuals with marketable skills and drive socio-economic change. Recognizing the urgent need for practical education and training, Radebe established Empower The Nation to address the skills gap in the job market and provide underprivileged communities with the tools necessary to achieve financial independence and career growth. Her initiative has since become a beacon of hope, transforming countless lives through skill-building and empowerment.
        </Text>

        <Text style={styles.text6}>Our Values</Text>

        <Image style={styles.img3} source={require("./assets/p.png")} />

        <Text style={styles.text7}>
        At Empower The Nation, our core values drive everything we do. We are dedicated to  empowerment   by providing individuals with the skills and knowledge   they  need   to   transform   their lives and communities. Our commitment   to   integrity ensures that we operate with transparency and uphold   the   highest ethical standards in all our interactions. We embrace inclusivity,   creating   opportunities   for   everyone  and   fostering     an environment  where  diverse perspectives are celebrated. By focusing  on collaboration,   we   work  with local   organizations  and stakeholders  to amplify  our  impact  and support community  development. These  values form the foundation of our mission to create meaningful and lasting change.
          </Text>

          <Text style={styles.text4}></Text>
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
    fontSize: 16,
    color: '#ffffff',
    fontWeight: "bold",
    marginTop: 20,
  },

  text3: {
    fontSize: 15,
    color: '#d4af37',
    fontWeight: "500",
    lineHeight: 20, 
    textAlign: 'justify', 
    paddingHorizontal: 10, 
    top:60,
  },

  text4: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign:'center',
    top:70,
   },

  text5: {
    fontSize: 15,
    color: '#d4af37',
    fontWeight: "500",
    lineHeight: 20, 
    textAlign: 'justify', 
    paddingHorizontal: 10,
    top:140, 
      },

    text6: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign:'center',
    top:130,
   },

   text7: {
    fontSize: 15,
    color: '#d4af37',
    fontWeight: "500",
    lineHeight: 20, 
    textAlign: 'justify', 
    paddingHorizontal: 10,
    top:190, 
      },

  img1:{
    height:250,
    width:330,
    alignSelf:'center',
    borderRadius:20,
    top:25,
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

