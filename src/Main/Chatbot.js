// import axios from 'axios';
import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
// import {Segment} from 'semantic-ui-react'
import { ThemeProvider } from 'styled-components';
// import './App.css'
import './Chatbot.css'
// import robot from '../Images/robot.png'
import bot_avatar from '../Images/robot-assistant.png'
import robot from '../Images/chatbot.png'
import bot_user from '../Images/user (1).png'
// import robo from '../Images/chatbot (1).png'


// import { Segment } from 'semantic-ui-react';
// import { ThemeProvider } from 'styled-components';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const theme = {
    background: '#f5f8fb', // Background color of the chatbot
    fontFamily: "'Times New Roman', Times, serif",
    headerBgColor: '#132573', // Header background color
    headerFontColor: '#fff', // Header text color
    headerFontSize: '15px',
    botBubbleColor: '#132573', // Background color of bot messages
    botFontColor: '#fff', // Text color of bot messages
    userBubbleColor: '#fff', // Background color of user messages
    userFontColor: '#4a4a4a', // Text color of user messages
  };

  // const handleEnd =  ({steps,values}) => {


  //   try{
  //      axios.post('https://sheet.best/api/sheets/f6cec316-92f0-4eae-aa33-948c7fc96fa9',{Name:values[0],Issues:values[1]})
  //     .then(()=>{
  //       alert('submitted')
  //     })
      
  //   }
  //   catch(err){
  //     console.log(err)
  //   }





    
  // };

  const steps = [
    {
      id:"Great",
      message:'Hello, Welcome to our website',
      trigger:'Ask Name'
    },
    {
      id:"Ask Name",
      message:'Please Enter Your Name',
      trigger:'Waiting'
    },
    {
      id:"Waiting",
      user:true,
      trigger:'Name'
    },
    {
      id:"Name",
      message:'Hi {previousValue}, Please select your what you want',
      trigger:'issues'
    },
    {
      id:"issues",
      options:[{
        value:'Problem',
        label:"Problem",
        trigger:"Problem"
      },
      {
        value:'information', 
        label:"information",
        trigger:"information"
      },
    ]
  },
  {
    id:"Problem",
    message:"Thanks for telling you want Problem",
    end:true
  },
  {
    id:"information",
    message:"Thanks for telling you want information",
    end:true
  }

    
  ]
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">

    {!isOpen && <div className="chatbot-icon" onClick={toggleChatbot} >
        {/* 🤖 You can replace this with an actual chatbot icon */}
        <img src={robot} alt="" width={'60px'} style={{objectFit:'contain'}}/>
      </div>}

    <div className='floating-chatbot'>
     {isOpen && (<ThemeProvider theme={theme}>

      <ChatBot steps={steps} 
        floating={true}
        botDelay={1000}
        // botAvatar={'https://i.gifer.com/XOsX.gif'}
        botAvatar={bot_avatar}
        // userAvatar={'https://media2.giphy.com/avatars/HollerStudios/1l8ZK6CbbUM8.gif'} 
        userAvatar={bot_user} 
         />
        
      </ThemeProvider>)}
      
    </div>
    </div>
  );
};

export default Chat;