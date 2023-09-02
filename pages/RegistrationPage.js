import React, {useState} from 'react';
import {Alert, Button, Pressable, Text, TextInput, View} from "react-native";
import {register_styles} from "../GlobalStyle";
import DateTimePicker from '@react-native-community/datetimepicker';
import {EvilIcons} from '@expo/vector-icons';
import * as yup from "yup";

const RegistrationPage = ({navigation}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState(null)
    const [show, setShow] = useState(false);
    const onChange = (event, selectedDate) => {
        setShow(false);
        setDateOfBirth(selectedDate);
    };
    const showMode = (currentMode) => {
        setShow(true);
    };
    const showDatepicker = () => {
        showMode('date');
    };
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(currentValue => !currentValue)
    };
    const signUpValidationSchema = yup.object().shape({
        firstName: yup
            .string()
            .required('First name is required'),
        lastName: yup
            .string()
            .required('Last name is required'),
        email: yup
            .string()
            .email("Please enter valid email")
            .required('Email is required'),
        password: yup
            .string()
            .matches(/\w*[a-z]\w*/, "Password must have a small letter")
            .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
            .matches(/\d/, "Password must have a number")
            .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
            .min(8, ({min}) => `Password must be at least ${min} characters`)
            .required('Password is required'),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password')], 'Passwords do not match')
            .required('Confirm password is required'),
        dateOfBirth: yup
            .date()
            .required('Date of birth is required'),
    })
    async function onSubmit() {
        try {
            await signUpValidationSchema.validate({
                firstName, lastName, email, password, confirmPassword, dateOfBirth
            });
            navigation.navigate('Login')
        } catch (e) {
            Alert.alert(e.message)
        }
    }

    return (

        <View style={register_styles.container}>
            <View>
                <Text style={register_styles.welcome_text}>
                    WELCOME TO CATHERIACHAT
                </Text>
            </View>

            <View style={register_styles.view_displaying_inputs_containers}>

                <TextInput
                    placeholder={'First name'}
                    value={firstName}
                    onChangeText={setFirstName}
                    style={register_styles.registration_inputs_container}
                />
                <TextInput
                    placeholder={'Last name'}
                    value={lastName}
                    onChangeText={setLastName}
                    style={register_styles.registration_inputs_container}
                />
                <TextInput
                    placeholder={'Email'}
                    keyboardType={"email-address"}
                    value={email}
                    onChangeText={setEmail}
                    style={register_styles.registration_inputs_container}
                />
                <View style={register_styles.date_picker_input}>
                    <Text
                        style={{flex: 1}}> {dateOfBirth ? (dateOfBirth.getDate() + '/' + dateOfBirth.getMonth() + '/' + dateOfBirth.getFullYear()) : 'Select your date of birth'} </Text>
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={dateOfBirth ?? new Date()}
                            mode={'date'}
                            onChange={onChange}
                        />
                    )}
                    <Pressable onPress={() => setShow(true)}>
                        <EvilIcons name="calendar" size={24} color="black"/>
                    </Pressable>
                </View>
                <TextInput
                    placeholder={'Password'}
                    value={password}
                    onChangeText={setPassword}
                    style={register_styles.registration_inputs_container}
                />
                <TextInput
                    placeholder={'Confirm password'}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    style={register_styles.registration_inputs_container}
                />

                <View style={register_styles.register_button_centering}>
                    <Pressable onPress={onSubmit} style={register_styles.register_button}>
                        <Text style={register_styles.register_text_inside_button}> Register </Text>
                    </Pressable>
                </View>
            </View>


        </View>
    );
};

export default RegistrationPage;