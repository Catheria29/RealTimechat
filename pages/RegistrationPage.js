import React, {useState} from 'react';
import {Alert, Button, Pressable, Text, TextInput, View} from "react-native";
import styles from "../GlobalStyle";
import DateTimePicker from '@react-native-community/datetimepicker'
import { MaterialIcons } from '@expo/vector-icons';

const RegistrationPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState(new Date())
    const [show,setShow] = useState(false)
    const onChange = (e, selectedDate) => {setDateOfBirth(selectedDate);
    setShow(false)}

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(currentValue =>!currentValue)
    };

    return (

        <View>
            <View >
            <Text style={styles.welcome_text}>
                WELCOME TO CATHERIACHAT
            </Text>
            </View>

            <View style={styles.view_displaying_inputs_containers}>

                <TextInput
                    placeholder={'First name'}
                    value={firstName}
                    onChangeText={setFirstName}
                    style={styles.registration_inputs_container}
                />
                <TextInput
                    placeholder={'Last name'}
                    value={lastName}
                    onChangeText={setLastName}
                    style={styles.registration_inputs_container}
                />
                <TextInput
                    placeholder={'Email'}
                    keyboardType={"email-address"}
                    value={email}
                    onChangeText={setEmail}
                    style={styles.registration_inputs_container}
                />


                <TextInput
                    placeholder={'Password'}
                    value={password}
                    onChangeText={setPassword}
                    style={styles.registration_inputs_container}
                />
                <TextInput
                    placeholder={'Confirm password'}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    style={styles.registration_inputs_container}
                />

                <View style={styles.register_button_centering}>
                    <Pressable onPress={() => Alert.alert ('You have registered')} style={styles.register_button}>
                        <Text style={styles.register_text_inside_button}> Register </Text>
                    </Pressable>
                </View>
                </View>


        </View>
    );
};

export default RegistrationPage;