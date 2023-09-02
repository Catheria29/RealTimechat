import React, {useState} from 'react';
import {Alert, Pressable, Text, TextInput, TouchableOpacity, View} from "react-native";
import  {login_page_styles,register_styles} from "../GlobalStyle";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import * as yup from "yup";
const LoginPage = ({navigation}) => {
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState("")
    const [showPassword,setShowPassword] = useState(false)
    const toggleShowPassword = () => {
        setShowPassword(currentValue => !currentValue)
    }
    const signUpValidationSchema = yup.object().shape({
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

    })

        async function onSubmit() {
            try {
                await signUpValidationSchema.validate({
                     email, password
                });
                navigation.navigate('Home Page')
            } catch (e) {
                Alert.alert(e.message)
            }
        }
    return (
        <View style={register_styles.container}>
          <View>
              <Text style={register_styles.welcome_text}>Log to your account </Text>
          </View>
            <View style={register_styles.view_displaying_inputs_containers}>
                <View style={login_page_styles.icon_and_inputs}>
                    <MaterialIcons name="email" size={24} color="grey" style={login_page_styles.icone}  />
                    <TextInput
                        value={email}
                        placeholder={'Enter your email'}
                        onChangeText={setEmail}
                        keyboardType={"email-address"}
                    />
                </View>

                <View style={login_page_styles.icon_and_inputs}>
                    <View style={{flex:1, flexDirection:'row'}}>

                    <FontAwesome name="lock" size={24} color="grey" style={login_page_styles.icone}/>
                    <TextInput
                        value={password}
                        placeholder={'Enter your password'}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                    />
                    </View>
                    <MaterialIcons name={showPassword ? 'visibility' : 'visibility-off' } size={24} color={'grey'} onPress={() => toggleShowPassword()}/>
                </View>

                <View style={register_styles.register_button_centering}>
                    <Pressable onPress={onSubmit} style={login_page_styles.login_button}>
                        <Text style={register_styles.register_text_inside_button}> Login </Text>
                    </Pressable>
                </View>
                <View style={{flexDirection:'row', marginTop:15}}>
                    <Text> Don't Have an account ? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={{ color: 'blue', textDecorationLine:'underline' }}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};

export default LoginPage;