
const register_styles = {

    container:{
        display: 'flex',
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
      paddingHorizontal:30
    },
    welcome_text: {
        color: 'blue',
        letterSpacing: 2,
        fontSize: 20,
        textAlign: 'center',
        marginBottom:15
    },
    view_displaying_inputs_containers: {
        display: "flex",

    },
    registration_inputs_container: {
        borderStyle: "solid",
        borderColor: "blue",
        borderBottomWidth: 1,
        marginVertical: 16,
        outlineStyle:'none'
    },
    date_picker_input:{
       display:'flex',
        flexDirection: 'row',
        borderStyle: "solid",
        borderColor: "blue",
        borderBottomWidth: 1,
        marginVertical: 16,
        outlineStyle:'none'
    },
    register_button: {
        backgroundColor : 'blue',
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: 'blue',
        borderRadius: 18,
        padding: 5,

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
}

const login_page_styles = {
   icone:{
       marginRight: 10,
   },
    icon_and_inputs:{
        display:"flex",
        flexDirection:'row',
        borderStyle: "solid",
        borderColor: "blue",
        borderWidth: 1,
        marginVertical: 16,
        padding: 8,
        borderRadius: 15,
        alignItems: 'center',
    },
    login_button: {
        backgroundColor : 'blue',
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: 'blue',
        borderRadius: 15,
        padding: 8,
        marginTop: -8

    },
}

const home_page_styles ={
    home_page_header:{
        display:'flex',
        flexDirection:'row',
        height: 60,
         alignItems: 'center',
        justifyContent: 'space-between'
    },
    home_page_container:{
        display: 'flex',
        flex: 1,
        flexDirection: "column",
        width: '100%',
        backgroundColor: 'white'
    },
    title:{
        fontSize: 20,
        color:'white'
    },
    search_and_add_icon:{
        flexDirection:'row',
        alignItems:'center'
    }
}
const contact_chat_columns_styles ={
    container:{
        display:'flex',
        flexDirection:'row',
        padding:10,
         borderBottomWidth:0.5,
        borderColor:'lightgray'
    },
    column_text_content:{
       flexDirection:'column',
       flex:1,
        marginLeft:10,
    },

    image_style:{
        width:55,
        height: 58,
        borderRadius:15
    },
    user_name_style:{
        fontSize:19,
        marginBottom:7,
    }
}
export {register_styles,login_page_styles, home_page_styles,contact_chat_columns_styles} ;