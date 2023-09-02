import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import {contact_chat_columns_styles} from "../GlobalStyle";
import dayjs from "dayjs";

const ContactChatColumn = ({userImage,userName, conversationContent,isRead}) => {

    return (
        <TouchableOpacity activeOpacity={0.3} style={contact_chat_columns_styles.container}>
            <Image
                source={{uri:userImage}}
                style={contact_chat_columns_styles.image_style}
            />
            <View  style={contact_chat_columns_styles.column_text_content}>
                <Text style={contact_chat_columns_styles.user_name_style}> {userName} </Text>
                <Text style={{color: isRead ? 'gray' : 'black'}} > {conversationContent} </Text>
            </View>
            <Text style={{ textAlignVertical: 'top'}}>
                {dayjs().format('hh : mm  A')}
            </Text>
        </TouchableOpacity>
    );
};

export default ContactChatColumn;