import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ContactsPageNewChat from "./pages/ContactsPageNewChat";
import ContactsPageNewGroup from "./pages/ContactsPageNewGroup";

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
                    <Stack.Screen name="Contacts list for new chat" component={ContactsPageNewChat} options={{ headerShown: false }}/>
                    <Stack.Screen name="Contacts list for new group" component={ContactsPageNewGroup} options={{ headerShown: false }}/>
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
