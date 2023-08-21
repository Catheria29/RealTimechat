import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegistrationPage from "./pages/RegistrationPage";

export default function App() {
  return (
    <View style={styles.container}>
      <RegistrationPage/>
      <StatusBar style="auto" backgroundColor={'blue'} />
    </View>
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
