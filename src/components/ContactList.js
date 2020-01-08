import React from "react";
import Contact from './Contact';

const list = [
    {
    name: 'Paul Wade',
    avatar : 'https://randomuser.me/api/portraits/men/13.jpg',
    online : true
    },

    {
        name: 'Clyde Carter',
        avatar : 'https://randomuser.me/api/portraits/men/71.jpg',
        online : false
    },

    {
        name : 'Joanne Caldwell',
        avatar : 'https://randomuser.me/api/portraits/women/94.jpg',
        online : true
    },

    {
        name : 'Ann Gregory',
        avatar : 'https://randomuser.me/api/portraits/women/40.jpg',
        online : true
    },

    {
        name : 'Dana George',
        avatar : 'https://randomuser.me/api/portraits/women/88.jpg',
        online : false
    }
]

const ContactList = () => {
    
    return (
         list.map(item => 
            <Contact name = {item.name} avatar = {item.avatar} online = {item.online} />)
    )
    };

    export default ContactList;