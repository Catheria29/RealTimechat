import React from 'react';
import {View, Text, ScrollView, StatusBar, FlatList} from "react-native";
import usersDataList from "../smallComponents/Datas";
import {home_page_styles} from "../GlobalStyle";
import {Ionicons} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';
import {Octicons} from '@expo/vector-icons';
import ContactChatColumn from "../smallComponents/ContactChatColumn";
import {LinearGradient} from "expo-linear-gradient";
const currentTime = new Date();
const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const HomePage = ({navigation}) => {
    return (
        <View style={home_page_styles.home_page_container}>

            <LinearGradient
                start={[0, 1]} end={[1, 0]}
                colors={['gray',  'lightblue', ]}
                 >
                <View style={home_page_styles.home_page_header}>
                    <Ionicons name="chevron-back-outline" size={35} color="white" onPress={() => navigation.goBack()}/>
                    <Text style={home_page_styles.title}>Conversations</Text>
                    <View style={home_page_styles.search_and_add_icon}>
                        <MaterialIcons name="group-add" size={30} color="white" style={{margin: 10}}/>
                        <Octicons name="search" size={22} color="white" style={{marginRight: 10}}/>
                    </View>
                </View>
            </LinearGradient>
            <FlatList data={usersDataList} renderItem={(({item}) => <ContactChatColumn key={item.id} userName={item.userName} conversationContent={item.conversationContent} userImage={item.userImage} isRead={item.isRead}/>)}/>
        </View>
    );
};

export default HomePage;