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
import { TbTrash } from "react-icons/tb";

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
import React, { useEffect, useState } from 'react'
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { FaRegCircle } from "react-icons/fa";

import {ScrollArea} from  "@/components/ui/scroll-area"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from '@/components/ui/input'




export default function FeedView(){

  const [feedType,setFeedType] = useState('in_app')
  const [createPollDialog, setCreatePollDialog] = useState(false)
  const [replySystem, setReplySystem] = useState(false)

  useEffect(()=>{
    const container_element = document.getElementById('feed-container') as HTMLDivElement
    if(container_element){
     container_element.style.height = window.innerHeight - 2 + 'px'
    
    }


},[])


  function openModal(){
    setCreatePollDialog(true)
  }

  function  closeModal2(){
    const element = document.getElementById('custom-create-poll-dialog-container')
    if( element != null ){
      setCreatePollDialog(false)

    }
  }

  function closeModal(event: React.MouseEvent<HTMLDivElement>){
    const target = event.target as HTMLDivElement
    if(target != null){
      const element = document.getElementById('custom-create-poll-dialog-container')
      if( element != null && target.id == 'custom-create-poll-dialog-container' ){
        setCreatePollDialog(false)

      }

    }
  }
  
  
    return(
        <div className='feed-container' id='feed-container'>


        

            <div className='feed-top-view'>

               

                <DropdownMenu>
      <DropdownMenuTrigger asChild>
       

          
      <div className='feed-view-top-title-div'>
                <h3 className='feed-top-view-title ml-[10px] mt-[-10px] pt-[5px]'>
                  {feedType == 'in_app'? 'Feed' : 'Glasspane'}
                </h3>
                <FaSort className="feed-top-view-icon mt-[-7.6px]"/>

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

                

        <Card className='feed-top-bar-selection ml-[6px] mt-[0.5px]' onClick={()=>setFeedType(feedType == 'in_app'? 'discord_chats' : 'in_app')}>
                   <p className='feed-top-bar-selection-text'>View {feedType == 'in_app'? 'Glasspane' : 'Feed'}</p>
                   <div className='feed-top-bar-selection-text-icon'>⌘V</div>
                </Card>
     

              
            </div>

            <ScrollArea className='message-feed-view'>
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

                    <Card className='message-replies' onClick={()=> {
                    if(replySystem){
                    setReplySystem(false)
                    }else{
                       setReplySystem(true)

                    }}}>
                    <div className='message-container-top-view-reply'>
                    <Avatar className="message-container-top-view-avatar">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                  
                </Avatar>

                <p className='message-container-top-view-username-reply ml-[6px]'>Olivia Patel</p>
                <p className='message-container-top-view-reply-message'>NOOO please</p>
                {replySystem?  <GoTriangleDown className='message-container-top-view-reply-icon'/> :  <GoTriangleRight className='message-container-top-view-reply-icon'/> }
               
                    </div>
                    <p className='message-container-top-view-reply-count' style={{fontFamily:'Inter-bold'}}>4 replies</p>
                    {replySystem? 
                    
                    <Card className='more-replies-messages'>

                    </Card>

                       : <div />}
                   
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



            </ScrollArea>

            
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

          <div className='resized-create-poll' onClick={openModal}>
          <HiBars3CenterLeft className='mt-[2px]' style={{fontSize:'11px',opacity:'0.66'}} />
            <span className="nav-side-pop-item-text ml-[12px]" style={{fontSize:'12px'}}>Create poll</span>
          
                
            </div>
          





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

        {createPollDialog? <div className='custom-create-poll-dialog-container' id='custom-create-poll-dialog-container' onClick={(event)=>closeModal(event)}> 
          <div id='custom-create-poll-dialog' className='custom-create-poll-dialog'>
            
            <p className='creating-poll-options-title'>Creating poll</p>
           <Card className='create-poll-input-container'>
           <Input className='focus:outline-none input-create-poll' placeholder='Type a quesion...' />
           </Card>

           <div className='mt-[15px]'>

           <div className='creating-poll-options'>
            <p className='creating-poll-options-text'>Agree</p>

            <div  className='creating-poll-options-icons'>

            <FaRegCircle className='creating-poll-options-icon' style={{transform:'scale(0.8,0.8'}}/>

              <TbTrash className='creating-poll-options-icon'/>
              

            </div>

           
            </div>

           <div className='creating-poll-options mt-[10px]'>
            <p className='creating-poll-options-text'>Disagree</p>

            <div  className='creating-poll-options-icons'>

            <FaRegCircle className='creating-poll-options-icon' style={{transform:'scale(0.8,0.8'}}/>

              <TbTrash className='creating-poll-options-icon'/>
              

            </div>

           
            </div>

            <div className='creating-poll-options mt-[10px]'>
            <p className='creating-poll-options-text add-options-btn' style={{opacity:'0.45'}}>Add option...</p>


           
            </div>


            </div>

            <div className='create-team-dialog-footer p-[7px] gap-6'>

            <Card className='create-team-dialog-footer-button-no-design' onClick={closeModal2}>
                    <p className='create-team-dialog-footer-button-text-no-design'>Cancel</p>
                </Card>

                <Card className='create-team-dialog-footer-button ml-[3px]' >
                    <p className='create-team-dialog-footer-button-text'>Create</p>
                    <div className='create-team-dialog-footer-button-tip'>Enter</div>
                </Card>
            </div>


            </div></div> : <div/>}
            
            </div>
      
      )
}