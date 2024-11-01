import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen'; 
import OptionScreen from './OptionScreen'; 
import AboutUs from './AboutUs'; 
import ViewCourses from './ViewCourses'; 
import ApplyNow from './ApplyNow'; 
import ChildMinding from './ChildMinding'; 
import Cooking from './Cooking'; 
import GardenMaintenance from './GardenMaintenance'; 
import FirstAid from './FirstAid'; 
import Sewing from './Sewing'; 
import Landscaping from './Landscaping'; 
import LifeSkills from './LifeSkills'; 
import SubmitForm from './SubmitForm'; 
import LoginScreen from './LoginScreen'; 


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>

      <Stack.Navigator

        initialRouteName="HomeScreen" 
        screenOptions={{
          headerStyle: { backgroundColor: '#001f3e' },
          headerTintColor: '#ffffff',
          headerTitleStyle: { fontWeight: 'bold' }, }}>
       
        
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{ headerShown: false }} /> 

       <Stack.Screen 
          name="OptionScreen" 
          component={OptionScreen} 
          options={{ headerShown: false }} /> 
        
       <Stack.Screen 
          name="AboutUs" 
          component={AboutUs} 
          options={{ headerShown: false }} /> 
        
        <Stack.Screen 
          name="ViewCourses" 
          component={ViewCourses} 
          options={{ headerShown: false }} /> 

        <Stack.Screen 
          name="ApplyNow" 
          component={ApplyNow} 
          options={{ headerShown: false }} /> 

        <Stack.Screen 
          name="ChildMinding" 
          component={ChildMinding} 
          options={{ headerShown: false }} /> 

        <Stack.Screen 
          name="Cooking" 
          component={Cooking} 
          options={{ headerShown: false }} /> 

        <Stack.Screen 
          name="GardenMaintenance" 
          component={GardenMaintenance} 
          options={{ headerShown: false }} /> 

        <Stack.Screen 
          name="FirstAid" 
          component={FirstAid} 
          options={{ headerShown: false }} /> 

        <Stack.Screen 
          name="Sewing" 
          component={Sewing} 
          options={{ headerShown: false }} /> 

        <Stack.Screen 
          name="Landscaping" 
          component={Landscaping} 
          options={{ headerShown: false }} /> 

        <Stack.Screen 
          name="LifeSkills" 
          component={LifeSkills} 
          options={{ headerShown: false }} /> 

        <Stack.Screen 
          name="SubmitForm" 
          component={SubmitForm} 
          options={{ headerShown: false }} /> 

        <Stack.Screen 
          name="LoginScreen" 
          component={LoginScreen} 
          options={{ headerShown: false }} /> 
        
    
        
    
    
      </Stack.Navigator>

      <StatusBar style="auto" />
      
    </NavigationContainer>
  );
}
