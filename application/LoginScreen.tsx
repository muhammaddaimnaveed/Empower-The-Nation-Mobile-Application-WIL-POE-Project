import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity, Modal, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const App: React.FC = () => {
    const navigation = useNavigation();
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [discountPercentage, setDiscountPercentage] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);

    const sixWeekCourses = [
        { name: "Child Minding", price: 750 },
        { name: "Cooking", price: 750 },
        { name: "Garden Maintenance", price: 750 },
    ];

    const sixMonthCourses = [
        { name: "First Aid", price: 1500 },
        { name: "Sewing", price: 1500 },
        { name: "Landscaping", price: 1500 },
        { name: "Life Skills", price: 1500 },
    ];

    const handleCourseSelection = (course: string, price: number) => {
        setSelectedCourses(prev => {
            const isSelected = prev.includes(course);
            const newSelection = isSelected 
                ? prev.filter(c => c !== course)
                : [...prev, course];

            calculateTotal(newSelection);
            return newSelection;
        });
    };

    const calculateTotal = (selected: string[]) => {
        if (selected.length === 0) {
            setTotalPrice(0); 
            setDiscountPercentage(0);
            return;
        }

        const newTotal = selected.reduce((sum, course) => {
            const courseData = [...sixWeekCourses, ...sixMonthCourses].find(c => c.name === course);
            return sum + (courseData ? courseData.price : 0);
        }, 0);

        let discount = 0;
        let discountPercentage = 0;

        if (selected.length === 2) {
            discountPercentage = 5;
            discount = newTotal * 0.05; 
        } else if (selected.length === 3) {
            discountPercentage = 10;
            discount = newTotal * 0.10; 
        } else if (selected.length > 3) {
            discountPercentage = 15;
            discount = newTotal * 0.15; 
        }

        setTotalPrice(newTotal - discount);
        setDiscountPercentage(discountPercentage);
    };

    return (
        <View style={styles.container}>
            <Image style={styles.white1} source={require("./assets/h1xf42gq.png")} />
            <Image style={styles.logo} source={require("./assets/graduation-cap.png")} />
            <Text style={styles.name}>Empower The Nation</Text>

            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('HomeScreen')}>
                <Image style={styles.backIcon} source={require("./assets/arrow-left.png")} />
            </TouchableOpacity>

            <Text style={styles.title}>Create New Account</Text>
            <Text style={styles.title1}>Login</Text>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Text style={styles.label}>First Name:</Text>
                <TextInput
                    style={styles.input}
                    value={firstName}
                    onChangeText={setFirstName}
                    placeholder="Enter your first name"
                />

                <Text style={styles.label}>Last Name:</Text>
                <TextInput
                    style={styles.input}
                    value={lastName}
                    onChangeText={setLastName}
                    placeholder="Enter your last name"
                />

                <Text style={styles.label}>Email:</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                />

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OptionScreen')}>
                    <Text style={styles.buttonText}>Create</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#043c2c',
        alignItems: 'center',
        padding: 20,
    },
    
    scrollViewContent: {
        paddingBottom: 50,
        flexGrow: 1,
    },
    title: {
        color: '#ffffff',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign:'center',
        bottom: 50,
    },
    title1: {
        color: '#ffffff',
        fontSize: 25,
        textAlign:'center',
        bottom: 40,
    },
    label: {
        color: '#ffffff',
        fontSize: 16,
        marginBottom: 5,
        alignSelf: 'flex-start',
    },
    backButton: {
        bottom: 115,
        right: 137,
    },
    backIcon: {
        height: 30,
        width: 30,
    },
    name: {
        color: "#000000",
        fontSize: 26,
        fontWeight: "bold",
        bottom: 165, 
        left: 45,
    },
    logo: {
        height: 80,
        width: 80,
        bottom: 103,
        right: 138,
    },
    white1: {
        height: 110,
        width: 400,
        bottom: 22,
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 10,
        marginBottom: 15,
        width:325,
        backgroundColor: '#ffffff',
    },
    textarea: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        marginBottom: 15,
        height: 100,
        width: '100%',
        backgroundColor: '#ffffff',
    },
    dropdownButton: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        width: '100%',
        backgroundColor: '#ffffff',
    },
    dropdownText: {
        color: '#000000',
        fontSize: 16,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    checkbox: {
        fontSize: 16,
        marginRight: 10,
    },
    closeButton: {
        marginTop: 20,
        backgroundColor: '#D3D3D3',
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        color: '#000000',
        fontSize: 16,
    },
    button: {
        height: 50,
        backgroundColor: '#D3D3D3',
        width: 110,
        alignSelf: 'center',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: '600',
    },
});

export default App;