import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import {contact_chat_columns_styles} from "../GlobalStyle";


const ContactChatColumn = ({userImage,userName, conversationContent,isRead,date}) => {

    return (
        <TouchableOpacity  activeOpacity={0.3} style={contact_chat_columns_styles.container}>
            <Image
                source={{uri:userImage}}
                style={contact_chat_columns_styles.image_style}
            />
            <View  style={contact_chat_columns_styles.column_text_content}>
                <Text style={contact_chat_columns_styles.user_name_style}> {userName} </Text>
                <Text style={{color: isRead ? 'gray' : 'black'}} numberOfLines={1} > {conversationContent} </Text>
            </View>
            <Text numberOfLines={1} style={{ textAlignVertical: 'top', color:'lightgray'}}>
                {date}
            </Text>
        </TouchableOpacity>
    );
};

export default ContactChatColumn;