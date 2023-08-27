import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    welcome_text: {
        color: 'blue',
        letterSpacing: 2,
        fontSize: 20,

    },
    view_displaying_inputs_containers: {
        display: "flex",
        flexDirection: "column"
    },
    registration_inputs_container: {
        borderStyle: "solid",
        borderColor: "blue",
        borderBottomWidth: 1,
        marginVertical: 16
    },
    register_button: {
        backgroundColor : 'blue',
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: 'blue',
        borderRadius: 18,
        padding: 5
    },
    register_text_inside_button : {
        textAlign: "center",
        fontWeight: "500",
        fontSize: 20,
        color: 'white'
    },
    register_button_centering: {
        marginTop: 25
    }
})
export default styles;