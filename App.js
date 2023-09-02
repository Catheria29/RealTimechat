import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

const Stack = createNativeStackNavigator()
export default function App() {
    return (

            <NavigationContainer style={styles.container}>
                <Stack.Navigator initialRouteName="SignUp"  screenOptions={{
                    headerStyle: {backgroundColor: 'blue',},
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',},
                    headerTitleAlign: 'center'}}>
                    <Stack.Screen name="SignUp" component={RegistrationPage}/>
                    <Stack.Screen name="Login" component={LoginPage}/>
                    <Stack.Screen name="Home Page" component={HomePage}  options={{ headerShown: false }}/>
                </Stack.Navigator>
            </NavigationContainer>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
