import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        color: 'blue',
        letterSpacing: 5,
    },
    view_displaying_inputs_containers: {
        display: "flex",
        flexDirection: "column"
    },
    inputs_container: {
        borderStyle: "solid",
        borderColor: "blue",
        borderWidth: 2,
        borderRadius: 23,
        padding: 8,
        marginVertical: 15

    }
})
export default styles;