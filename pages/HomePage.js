import React from 'react';
import {View, StatusBar, Text, ScrollView} from "react-native";
import {home_page_styles, register_styles} from "../GlobalStyle";
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
        <ScrollView style={home_page_styles.home_page_container}>

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



            <ContactChatColumn
                userImage={'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=100&q=60'
                }
                conversationContent={'is writing...'}
                userName={'Sienna Cardoso'}
            />
            <ContactChatColumn
                userImage={'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=100&q=60'}
                conversationContent={'This looks good! You can try...'}
                userName={'Todd Christien'}
                isRead={true}
            />
            <ContactChatColumn
                userImage={'https://images.unsplash.com/photo-1616434116710-c45ce99c1a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=100&q=60'}
                conversationContent={'is writing'}
                userName={'Emmanuel Adeogo'}
            />
            <ContactChatColumn
                userImage={'https://lh3.googleusercontent.com/a/AAcHTtfC7Ufjsj2JraOcCq6aPwKn6gcKD64FyEG0rBS8qaYrT8I=s288-c-no'}
                userName={'Remi Bara'}
                conversationContent={'Hi babe! How is your day going ...'}
            />
            <ContactChatColumn
                userImage={'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=100&q=60'
                }
                conversationContent={'is writing...'}
                userName={'Sienna Cardoso'}
            />
            <ContactChatColumn
                userImage={'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=100&q=60'}
                conversationContent={'This looks good! You can try...'}
                userName={'Todd Christien'}
                isRead={true}
            />
            <ContactChatColumn
                userImage={'https://images.unsplash.com/photo-1616434116710-c45ce99c1a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=100&q=60'}
                conversationContent={'is writing'}
                userName={'Emmanuel Adeogo'}
            />
            <ContactChatColumn
                userImage={'https://lh3.googleusercontent.com/a/AAcHTtfC7Ufjsj2JraOcCq6aPwKn6gcKD64FyEG0rBS8qaYrT8I=s288-c-no'}
                userName={'Remi Bara'}
                conversationContent={'Hi babe! How is your day going ...'}
            />
            <ContactChatColumn
                userImage={'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=100&q=60'
                }
                conversationContent={'is writing...'}
                userName={'Sienna Cardoso'}
            />
            <ContactChatColumn
                userImage={'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=100&q=60'}
                conversationContent={'This looks good! You can try...'}
                userName={'Todd Christien'}
                isRead={true}
            />
            <ContactChatColumn
                userImage={'https://images.unsplash.com/photo-1616434116710-c45ce99c1a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=100&q=60'}
                conversationContent={'is writing'}
                userName={'Emmanuel Adeogo'}
            />
            <ContactChatColumn
                userImage={'https://lh3.googleusercontent.com/a/AAcHTtfC7Ufjsj2JraOcCq6aPwKn6gcKD64FyEG0rBS8qaYrT8I=s288-c-no'}
                userName={'Remi Bara'}
                conversationContent={'Hi babe! How is your day going ...'}
            />
            <ContactChatColumn
                userImage={'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=100&q=60'}
                conversationContent={'This looks good! You can try...'}
                userName={'Todd Christien'}
                isRead={true}
            />
            <ContactChatColumn
                userImage={'https://images.unsplash.com/photo-1616434116710-c45ce99c1a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=100&q=60'}
                conversationContent={'is writing'}
                userName={'Emmanuel Adeogo'}
            />
            <ContactChatColumn
                userImage={'https://lh3.googleusercontent.com/a/AAcHTtfC7Ufjsj2JraOcCq6aPwKn6gcKD64FyEG0rBS8qaYrT8I=s288-c-no'}
                userName={'Remi Bara'}
                conversationContent={'Hi babe! How is your day going ...'}
            />

        </ScrollView>
    );
};

export default HomePage;