import React, {useState} from 'react';
import {Text, TextInput, View} from "react-native";
import styles from "../GlobalStyle";

const RegistrationPage = () => {
    const [name, setName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('')
    // const [dateOfBirth,setDateOfBirth]
    return (
        <View>
            <Text style={styles.container}>
                WELCOME TO CATHERIACHAT
            </Text>
            <View style={styles.view_displaying_inputs_containers}>
                <TextInput
                    placeholder={'Name'}
                    value={name}
                    onChangeText={setName}
                    style={styles.inputs_container}
                />
                <TextInput
                    placeholder = {'First name'}
                    value = {firstName}
                    onChangeText={setFirstName}
                    style={styles.inputs_container}
                />
            </View>
        </View>
    );
};

export default RegistrationPage;