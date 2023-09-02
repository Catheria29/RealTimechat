import React from 'react';
import {View, Text, StatusBar, FlatList, SafeAreaView} from "react-native";
import usersDataList from "../smallComponents/Datas";
import {home_page_styles} from "../GlobalStyle";
import {Ionicons} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';
import {Octicons} from '@expo/vector-icons';
import ContactChatColumn from "../smallComponents/ContactChatColumn";
import {LinearGradient} from "expo-linear-gradient";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FloatingAction } from "react-native-floating-action";
const actions = [
    {
        text: "New Chat",
        icon: <MaterialCommunityIcons name="chat-plus" size={24} color="white" />,
        name: "bt_new_chat",
        position: 2,
        color:'lightblue'
    },
    {
        text: "New group",
        icon: <MaterialIcons name="group-add" size={28} color="white" />,
        name: "bt_new_group",
        position: 1,
        color:'lightblue'
    },
]
const HomePage = ({navigation}) => {
    return (
        <SafeAreaView style={home_page_styles.home_page_container}>
            <StatusBar
                animated={true}
            />
            <LinearGradient
                start={[0, 1]} end={[1, 0]}
                colors={['gray',  'lightblue', ]}
                 >
                <View style={home_page_styles.home_page_header}>
                    <Ionicons name="chevron-back-outline" size={35} color="white" onPress={() => navigation.goBack()}/>
                    <Text style={home_page_styles.title}>Conversations</Text>
                    <View style={home_page_styles.search_and_add_icon}>
                        <MaterialIcons name="group"  size={30} color="white" style={{margin: 10}}/>
                        <Octicons name="search" size={22} color="white" style={{marginRight: 10}}/>
                    </View>
                </View>
            </LinearGradient>
            <FlatList data={usersDataList} renderItem={(({item}) => <ContactChatColumn date={item.date} userName={item.userName} conversationContent={item.conversationContent} userImage={item.userImage} isRead={item.isRead}/>)}/>
            <FloatingAction
                color='lightblue'
                actions={actions}
                onPressItem={name => {
                    console.log(`selected button: ${name}`);

                }}
            />
        </SafeAreaView>
    );
};

export default HomePage;