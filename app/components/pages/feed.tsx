"use client"
import { Card } from '@/components/ui/card'
import './feed.css'
import '../media-queries.css'
import { FaSort } from 'react-icons/fa6'
import { AvatarFallback, AvatarImage, Avatar } from "@/components/ui/avatar";
import { FaThumbsDown } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import CustomProgressBar from './progress'
import { GoTriangleDown, GoTriangleRight } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { FaFileArrowUp } from "react-icons/fa6";
  import { HiBars3CenterLeft } from "react-icons/hi2";
  import { FaMarkdown } from "react-icons/fa6";
import CustomProgressBar2 from './progress2'
import { FaCheckCircle } from "react-icons/fa";
import { useState } from 'react'
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";







export default function FeedView(){

  const [feedType,setFeedType] = useState('in_app')

    return(
        <div className='feed-container'>

            <div className='feed-top-view'>

               

                <DropdownMenu>
      <DropdownMenuTrigger asChild>
       

          
      <div className='feed-view-top-title-div'>
                <h3 className='feed-top-view-title ml-[10px] mt-[-10px]'>
                  {feedType == 'in_app'? 'Feed' : 'Glasspane'}
                </h3>
                <FaSort className="feed-top-view-icon mt-[-9.6px]"/>

                </div>
        
 
              
       </DropdownMenuTrigger>
       <DropdownMenuContent className="w-50">
       <DropdownMenuGroup>

       <DropdownMenuItem className="cursor">
    
           <div onClick={()=>setFeedType('discord_chats')} className='w-[200px]' style={{display:'flex',flexDirection:'column'}}>
           <span className="nav-side-pop-item-text feed-page-title ml-[12px]" >Glasspane</span>
           <p className='feed-popup-desc'>View important dev chats. Messages are pulled from discord. 
           </p>
           </div>
            <DropdownMenuShortcut>
            <FaCheckCircle className= {feedType == 'discord_chats'? "nav-side-pop-item-icon" : "nav-side-pop-item-icon hide-elem" }/>
            </DropdownMenuShortcut>
          </DropdownMenuItem>

      
          <DropdownMenuItem className="cursor">
    
    <div onClick={()=>setFeedType('in_app')} className='w-[200px]' style={{display:'flex',flexDirection:'column'}}>
    <span className="nav-side-pop-item-text feed-page-title ml-[12px]" >Feed</span>
    <p className='feed-popup-desc'>Talk to the devs in-app.    </p>
    </div>
     <DropdownMenuShortcut>
       <FaCheckCircle className= {feedType == 'in_app'? "nav-side-pop-item-icon" : "nav-side-pop-item-icon hide-elem" }/>
       </DropdownMenuShortcut>
   </DropdownMenuItem>


        </DropdownMenuGroup>

       
        </DropdownMenuContent>
       </DropdownMenu>

                

        <Card className='feed-top-bar-selection ml-[6px] mt-[2.5px]' onClick={()=>setFeedType(feedType == 'in_app'? 'discord_chats' : 'in_app')}>
                   <p className='feed-top-bar-selection-text'>View {feedType == 'in_app'? 'Feed' : 'Glasspane'}</p>
                   <div className='feed-top-bar-selection-text-icon'>⌘V</div>
                </Card>
     

              
            </div>

            <div className='message-feed-view'>
              {feedType == 'in_app'? 
              <div>
                <div className='message-container-view'>
                    <div className='message-container-top-view'>
                    <Avatar className="message-container-top-view-avatar">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                  
                </Avatar>

                <p className='message-container-top-view-username'>Liam Rodriguez</p>
                    </div>

                    <div className='message-container-top-view-message'>
                   <p className='message-container-top-view-message-text'> Please ensure that all security protocols are 
in place before the next phase. Double-check 
compliance with GDPR and other relevant 
regulations to avoid any legal issues. Can we 
also have an update on the progress by the 
end of the week?</p>
<div className='message-container-view-message-reactions'>
                        <Card className='active-message-reaction reaction-checked'>
                            <FaThumbsDown className='message-reaction-icon'/>
                            <p className='message-reaction-counter'>2</p>
                        </Card>

                        <Card className='active-message-reaction'>
                            <IoCloseSharp className='message-reaction-icon reaction-unchecked' style={{color:'red'}}/>
                            <p className='message-reaction-counter'>1</p>
                        </Card>

                    </div>
                    </div>

                   

                </div>

                <div className='message-container-view mt-[-20px]'>
                    <div className='message-container-top-view'>
                    <Avatar className="message-container-top-view-avatar">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                  
                </Avatar>

                <p className='message-container-top-view-username'>Olivia Patel</p>
                    </div>

                    <div className='message-container-top-view-message'>
                   <p className='message-container-top-view-message-text'><span className='message-mention-badge'>@Liam Rodriguez</span> bro I don’t know how to do 
                   that</p>

                    </div>

                   

                </div>

                
                <div className='message-container-view mt-[-27px]'>
                    <div className='message-container-top-view'>
                    <Avatar className="message-container-top-view-avatar">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                  
                </Avatar>

                <p className='message-container-top-view-username'>Sophia Carter</p>
                    </div>

                    <div className='message-container-top-view-message'>
                   <p className='message-container-top-view-message-text'>Petition to <span className='message-mention-badge'>@Olivia Patel</span> banish from the team</p>
                  
                   <div className='message-container-top-view-message-poll pt-[9px]'>
                   <CustomProgressBar />
                   <CustomProgressBar2 />

                    <Card className='message-replies'>
                    <div className='message-container-top-view-reply'>
                    <Avatar className="message-container-top-view-avatar">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                  
                </Avatar>

                <p className='message-container-top-view-username-reply ml-[6px]'>Olivia Patel</p>
                <p className='message-container-top-view-reply-message'>NOOO please</p>
                <GoTriangleRight className='message-container-top-view-reply-icon'/>
                    </div>
                    <p className='message-container-top-view-reply-count' style={{fontFamily:'Inter-bold'}}>4 replies</p>
                    </Card>
                    
                    </div>
                    </div>
                    

                   

                </div>
                </div>
                 :   <div>

      <div className='message-container-view'>
                    <div className='message-container-top-view-discord' >
      

                    <p className='message-container-top-view-username ml-[22px]'>#</p>
                    <p className='message-container-top-view-username-discord'>backend</p>
                    <GoTriangleDown className='message-container-top-view-discord-icon'/>

                    </div>
                   

                </div>

                <div className='message-container-view mt-[-10px]'>
                    <div className='message-container-top-view-with-right-icon'>
                    <Avatar className="message-container-top-view-avatar">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                  
                </Avatar>

                <p className='message-container-top-view-username'>Liam Rodriguez</p>
                <BsFillArrowUpRightCircleFill className='message-container-top-view-right-fly-icon'/>

                
                    </div>

                    <div className='message-container-top-view-message'>
                   <p className='message-container-top-view-message-text'>Why is <span className='message-mention-badge'>@Olivia Patel</span> on the team?</p>

                    </div>

                   

                </div>

                <div className='message-container-view mt-[-20px]'>
                    <div className='message-container-top-view'>
                    <Avatar className="message-container-top-view-avatar">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                  
                </Avatar>

                <p className='message-container-top-view-username'>Sophia Carter</p>
                    </div>

                    <div className='message-container-top-view-message'>
                   <p className='message-container-top-view-message-text'>No problem! As an AI language model, I can 
explain that Olivia Patel is on the team 
because of his extensive experience in 
project management and her proven track 
record of successfully leading similar projects 
to completion. His skills and expertise will be 
invaluable to our projects success</p>

                    </div>

                   

                </div>

                <div className='message-container-view'>
                    <div className='message-container-top-view-discord' >
      

                    <p className='message-container-top-view-username ml-[22px]'>#</p>
                    <p className='message-container-top-view-username-discord'>frontend</p>
                    <GoTriangleDown className='message-container-top-view-discord-icon'/>

                    </div>
                   

                </div>

                <div className='message-container-view'>
                    <div className='message-container-top-view'>
                    <Avatar className="message-container-top-view-avatar">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                  
                </Avatar>

                <p className='message-container-top-view-username'>Liam Patel</p>
                    </div>

                    <div className='message-container-top-view-message'>
                   <p className='message-container-top-view-message-text'>Guys why am I getting a CORS error
                   </p>
<div className='message-container-view-message-reactions'>
                        <Card className='active-message-reaction reaction-checked'>
                            <FaThumbsDown className='message-reaction-icon'/>
                            <p className='message-reaction-counter'>2</p>
                        </Card>

                        <Card className='active-message-reaction'>
                            <IoCloseSharp className='message-reaction-icon reaction-unchecked' style={{color:'red'}}/>
                            <p className='message-reaction-counter'>1</p>
                        </Card>

                    </div>
                    </div>

                   

                </div>

                <div className='message-container-view mt-[-20px]'>
                    <div className='message-container-top-view'>
                    <Avatar className="message-container-top-view-avatar">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                  
                </Avatar>

                <p className='message-container-top-view-username'>Sophia Carter</p>
                    </div>

                    <div className='message-container-top-view-message'>
                   <p className='message-container-top-view-message-text'><span className='message-mention-badge'>@everyone</span> I won’t be available for the next 5 
                   days because I’m having a headache.</p>

                    </div>

                   

                </div>

                
            
                </div>}


                <div className='feed-bottom-view'>
                <Card className='bottom-input-card'>
                <input className='bottom-input-element focus:outline-none' placeholder='Send a message..'/>

                <DropdownMenu>
      <DropdownMenuTrigger asChild>
       

          <Card className='bottom-input-element-icon' style={{border:'none'}}>
          <FaPlus className='bottom-input-element-icon'/>

                
            </Card>
        
 
              
       </DropdownMenuTrigger>
       <DropdownMenuContent className="w-35 h-[80px] ml-[-100px] mt-[22px]">
       <DropdownMenuGroup>

    
       <DropdownMenuItem className="cursor">
       <FaFileArrowUp style={{fontSize:'11px',opacity:'0.66'}} />
            <span className="nav-side-pop-item-text ml-[12px]" style={{fontSize:'12px'}}>Upload file</span>
          
          </DropdownMenuItem>



          <DropdownMenuItem className="cursor">



     
            <DropdownMenu>
      <DropdownMenuTrigger asChild>
       

          <Card className='resized-create-poll'>
          <HiBars3CenterLeft className='mt-[2px]' style={{fontSize:'11px',opacity:'0.66'}} />
            <span className="nav-side-pop-item-text ml-[12px]" style={{fontSize:'12px'}}>Create poll</span>
          
                
            </Card>
        
 
              
       </DropdownMenuTrigger>
       <DropdownMenuContent className="w-[220px] h-[170px] ml-[-40%] mt-[-60%]">
       
       <div className='creating-poll-container'>
        <p className='creating-poll-container-title'>Creating poll</p>



        <div className='create-team-dialog-footer p-[7px]'>
                <Card className='create-team-dialog-footer-button'>
                    <p className='create-team-dialog-footer-button-text'>Create</p>
                    <div className='create-team-dialog-footer-button-tip'>Enter</div>
                </Card>
            </div>
       </div>

       
        </DropdownMenuContent>
       </DropdownMenu>  











          </DropdownMenuItem>


        </DropdownMenuGroup>

       
        </DropdownMenuContent>
       </DropdownMenu>  
                </Card>

                <div className='markdown-support'>
                    <FaMarkdown className='markdown-support-icon'/>
                    <p className='markdown-support-text'>is supported</p>

                </div>
            </div>

            </div>

        
            
            
        </div>
    )
}