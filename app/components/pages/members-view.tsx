import { Card } from '@/components/ui/card';
import './create-team.css'
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import { LuSlidersHorizontal } from "react-icons/lu";
import { FaFilter, FaPlus } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import { AvatarFallback, AvatarImage, Avatar } from "@/components/ui/avatar";
import { FaStar } from "react-icons/fa6";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuLabel,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

  import '../style2.css'
  import '../style.css'
  import { FaSort } from "react-icons/fa6";
  import { IoEllipsisHorizontal } from "react-icons/io5";
  import { FaCommentAlt, FaQuestionCircle, FaRegQuestionCircle } from "react-icons/fa";
  import { FaHeart } from "react-icons/fa6";
import React from 'react';


 
interface MembersViewProps {
  callMe: () => void;
}

const MembersView: React.FC<MembersViewProps> = ({ callMe }) => {

  function callUs() {
    callMe();
  }
    return(
        <div className='create-team-container'>

            <div className='create-team-view1'>
                <p className='create-team-view1-text'>Members</p>

            </div>

            <div className='hor-zon-tal-view-x h-[30px] pr-[6px]'>
               <Card className='create-team-view2-input ml-[16px] mt-[0.3px]'>
               <input className='create-team-view2-input focus:outline-none pl-[6px] pt-[5.5px] mt-[2px] ml-[2px]' placeholder='Search developers...'/>
               </Card> 
               <Card className='hor-zon-tal-view add-developers-button ml-[10px] mt-[0.3px]'>
              <p className='add-developers-button-text mt-[6px] ml-[6px]'>Add developers</p>
              <GoTriangleRight className="nav-list-item-right-icon-text ml-[-2px]" style={{fontSize:'13px'}} /> 

               </Card> 

            </div>
        
         

            <div className='create-team-view2'>
            <ul className="mt-[-23px]" style={{width:'100%'}}>
              
             
            <li className="nav-list-menu-divider mt-[19px]">
 
 <div className="nav-list-items">
 <div  className="nav-side-pop-item-avatar nav-list-item-icon colored-icon-3"/>

   <p className="nav-list-item-text nav-list-item-text-resize  font-inter" style={{opacity:'0.8',fontSize:'11px'}}>Frontend</p>
  
   <div className="nav-list-item-right-icon side-nav-user-align">

  <FaHeart className="nav-list-item-right-icon-text ml-[6px]" style={{fontSize:'10px'}} /> 

   </div>
 </div>

 </li>
               <li className="nav-list-menu-divider mt-[0px]">
 
                 <div className="nav-list-items-dialog-devs">
                   <Avatar className="nav-side-pop-item-avatar nav-list-item-icon" style={{opacity:'1'}}>
                   <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                   <AvatarFallback>CN</AvatarFallback>
                   
                 </Avatar>
                 <div className='column-based-view'>
                 <p className="nav-list-item-text nav-list-item-text-resize font-inter">Sophia Carter</p>
                 <p className='gmail-view-of-dev'>sophia@gmail.com</p>
                </div>                  
                   <div className="nav-list-item-right-icon side-nav-user-align">
 
                  <IoEllipsisHorizontal className="nav-list-item-right-icon-text ml-[6px]" /> 
 
                   </div>
                 </div>
 
                 </li>
 
                
 
                   <li className="nav-list-menu-divider mt-[0px]">
 
                 <div className="nav-list-items-dialog-devs">
                 <Avatar className="nav-side-pop-item-avatar nav-list-item-icon" style={{opacity:'1'}}>
                   <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                   <AvatarFallback>CN</AvatarFallback>
                   
                 </Avatar>
                   <div className='column-based-view'>
 <p className="nav-list-item-text nav-list-item-text-resize font-inter">Olivia Patel</p>
 <p className='gmail-view-of-dev'>olivia@gmail.com</p>
</div> 
                   <div className="nav-list-item-right-icon side-nav-user-align">
 
                  <IoEllipsisHorizontal className="nav-list-item-right-icon-text ml-[6px]" /> 
 
                   </div>
                 </div>
 
                 </li>

                 <li className="nav-list-menu-divider mt-[0px]">
 
 <div className="nav-list-items-dialog-devs">
 <Avatar className="nav-side-pop-item-avatar nav-list-item-icon" style={{opacity:'1'}}>
   <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
   <AvatarFallback>CN</AvatarFallback>
   
 </Avatar>
    <div className='column-based-view'>
 <p className="nav-list-item-text nav-list-item-text-resize font-inter">Liam Rodriguez</p>
 <p className='gmail-view-of-dev'>liam@gmail.com</p>
</div> 
   <div className="nav-list-item-right-icon side-nav-user-align">

  <IoEllipsisHorizontal className="nav-list-item-right-icon-text ml-[6px]" /> 

   </div>
 </div>

 </li>

                 <li className="nav-list-menu-divider mt-[4px]">
 
 <div className="nav-list-items">
 <div  className="nav-side-pop-item-avatar nav-list-item-icon colored-icon-1"/>

   <p className="nav-list-item-text nav-list-item-text-resize  font-inter" style={{opacity:'0.8',fontSize:'11px'}}>Backend</p>
  
   <div className="nav-list-item-right-icon side-nav-user-align">

  <GoTriangleRight className="nav-list-item-right-icon-text ml-[6px]" style={{fontSize:'13px'}} /> 

   </div>
 </div>

 </li>
 
 <li className="nav-list-menu-divider mt-[4px]">
 
 <div className="nav-list-items">
 <div  className="nav-side-pop-item-avatar nav-list-item-icon colored-icon-2"/>

   <p className="nav-list-item-text nav-list-item-text-resize font-inter" style={{opacity:'0.8',fontSize:'11px'}}>Cybersec</p>
  
   <div className="nav-list-item-right-icon side-nav-user-align">

  <GoTriangleRight className="nav-list-item-right-icon-text ml-[6px]" style={{fontSize:'13px'}} /> 

   </div>
 </div>

 </li>

 
 <li className="nav-list-menu-divider mt-[4px]">
 
 <div className="nav-list-items" onClick={()=>callUs()}>
 <FaPlus className="nav-side-pop-item-avatar nav-list-item-icon ml-[-4px]" style={{fontSize:'10px'}} /> 

   <p className="nav-list-item-text nav-list-item-text-resize font-inter" style={{opacity:'0.6',fontSize:'11px'}}>Add team</p>
  
   <div className="nav-list-item-right-icon side-nav-user-align">

  <GoTriangleRight className="nav-list-item-right-icon-text ml-[6px]" style={{fontSize:'13px'}} /> 

   </div>
 </div>

 </li>
                 
 
 
             </ul>

            </div>

          


        </div>
    )
}



export default MembersView