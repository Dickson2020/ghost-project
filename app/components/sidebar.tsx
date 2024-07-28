import { Card } from "@/components/ui/card";
import { RiHomeFill } from "react-icons/ri";
import { RiMapFill } from "react-icons/ri";
import { FaMoneyBills } from "react-icons/fa6";
import { FaSliders } from "react-icons/fa6";
import { FaSort } from "react-icons/fa6";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { FaCommentAlt, FaQuestionCircle, FaRegQuestionCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import './media-queries.css'
import { useEffect, useState } from "react";
import DashboardView from "./pages/dashboard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoMdSettings } from "react-icons/io";
import { BiSolidLogOutCircle } from "react-icons/bi";
import { AvatarFallback, AvatarImage, Avatar } from "@/components/ui/avatar";
import { FaCheckCircle } from "react-icons/fa";
import { RiQuestionFill } from "react-icons/ri";
import { FaLaugh } from "react-icons/fa";
import './style2.css'
import {  Dialog,  DialogClose,  DialogContent,  DialogDescription,  DialogFooter,  DialogHeader,  DialogTitle,  DialogTrigger} from "@/components/ui/dialog"

import { RiAccountCircleFill } from "react-icons/ri";
import { LuLink } from "react-icons/lu";
import { LuSlidersHorizontal } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { HiDocumentArrowUp } from "react-icons/hi2";
import CreateTeamView from "./pages/create-team";
import MembersView from "./pages/members-view";
import BillingView from "./pages/billing-view";






const SideNavigation = () =>{
  const [currentTab,setCurrentTab] = useState('')
  const [currentTabPopup,setCurrentTabPopup] = useState('popup_members')
  const [currentAccount, setCurrentAccount] = useState('2')
  const [dialog_page_to_show, set_dialog_page_To_show] = useState<JSX.Element>( <CreateTeamView />)
  

  function reRenderRouter(){
    let _PAGE = null
    return _PAGE
  }

  
  const callMe = () =>{
    setCurrentTabPopup('popup_create_team')
    set_dialog_page_To_show(<CreateTeamView />)
   // alert(currentTabPopup)
  }
  
  function changeDialogPage(){
    let element_to_return = null
    switch(currentTabPopup){
      case 'popup_members':
        element_to_return = (<MembersView callMe = {callMe}/>)
        break
      
        case 'popup_create_team':
          element_to_return = (<CreateTeamView />)

          break
        
        case 'popup_billing':
          element_to_return = (<BillingView />)
          
          break
            
        default:
          element_to_return = (<MembersView callMe = {callMe}/>)

    }

    return element_to_return
  }

  useEffect(()=>{
    set_dialog_page_To_show(changeDialogPage())
  },[currentTabPopup])
  
    return(
        <div className="w-[100%] p-[20px]" style={{height:'650px',display:'flex',flexDirection:'column'}}>

           <div style={{flex:0.8}}>
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
       
           <Card className="nav-top-user">
                <div className="nav-top-user-icon"/>
                <p className="nav-top-user-text resize-text">Echoverse</p>
                <FaSort className="nav-top-user-right-icon"/>
                
            </Card>
     
 
              
            </DropdownMenuTrigger>
       <DropdownMenuContent className="w-56">
       <DropdownMenuGroup>

       <DropdownMenuItem className="cursor">
       <div className="nav-top-pop-list-item-icon"/>

            <span className="nav-side-pop-item-text ml-[12px]">Liam Patel</span>
            <DropdownMenuShortcut>
            <p className="nav-top-pop-list-item-text">43% done</p>
              </DropdownMenuShortcut>
            
          </DropdownMenuItem>

  

        </DropdownMenuGroup>

        <DropdownMenuSeparator />

       <DropdownMenuGroup>
      

        </DropdownMenuGroup>
        </DropdownMenuContent>
       </DropdownMenu>

            <ul className="mt-[10px]">
                <li className="nav-list-menu-divider">
                <div onClick={()=>setCurrentTab("dashboard")} className={currentTab == "dashboard"?
                 "nav-list-items nav-list-items-selected":
                 "nav-list-items"
                  }>
                  <RiHomeFill className="nav-list-item-icon" />  
                  <p className="nav-list-item-text">Dashboard</p>
                  <div className="nav-list-item-right-icon">
                  </div>
                </div>

                </li>
                
                <li className="nav-list-menu-divider">

                <div onClick={()=>setCurrentTab("kanban")} className={currentTab == "kanban"?
                 "nav-list-items nav-list-items-selected":
                 "nav-list-items"
                  }>
                  <RiMapFill className="nav-list-item-icon" />  
                  <p className="nav-list-item-text">Kanban</p>
                  <Card className="nav-list-item-right-icon">
                 <p className="nav-list-item-right-icon-text"> ⌘K </p>
                  </Card>
                </div>

                </li>
                  <li className="nav-list-menu-divider">

                <div onClick={()=>setCurrentTab("roadmap")} className={currentTab == "roadmap"?
                 "nav-list-items nav-list-items-selected":
                 "nav-list-items"
                  }>
                  <RiMapFill className="nav-list-item-icon" />  
                  <p className="nav-list-item-text">Roadmap</p>
                  <Card className="nav-list-item-right-icon">
                 <p className="nav-list-item-right-icon-text"> ⌘K </p>
                  </Card>
                </div>

                </li>


                 <li className="nav-list-menu-divider">

                <div onClick={()=>setCurrentTab("billing")} className={currentTab == "billing"?
                 "nav-list-items nav-list-items-selected":
                 "nav-list-items"
                  }>
                  <FaMoneyBills className="nav-list-item-icon" />  
                  <p className="nav-list-item-text">Billing</p>
                  <div className="nav-list-item-right-icon">
                  </div>
                </div>

                </li>

                  <li className="nav-list-menu-divider">

                <div onClick={()=>setCurrentTab("settings")} className={currentTab == "settings"?
                 "nav-list-items nav-list-items-selected":
                 "nav-list-items"
                  }>
                  <FaSliders className="nav-list-item-icon" />  
                  <p className="nav-list-item-text">Settings</p>
                  <div className="nav-list-item-right-icon">
                  </div>
                </div>

                </li>

                  <li className="nav-list-menu-divider-2">

                <div className="nav-menu-list-divider-2">
                <p className="nav-list-item-div-text teams-text">Teams</p>

               

                  <Dialog>      
                    <DialogTrigger asChild>        
                    
                       <div className="nav-list-item-div-right-icon mt-[3px]">
                       <IoEllipsisHorizontal className="nav-menu-list-div-icon add-tem"/>
                  </div>
                    </DialogTrigger>      
                      <DialogContent className="popup-dialog-content">    
                        <div className="popup-container w-[500px]">
                        
                        <div className="popup-side-pane">

                <p className="popup-pane-list-title">Account</p>
              <ul className="mt-[1px]">
                <li className="nav-list-menu-divider">
                <div onClick={()=>setCurrentTabPopup("popup_account")} className={currentTabPopup == "popup_account"?
                 "nav-list-items nav-list-items-selected":
                 "nav-list-items"
                  }>
                  <RiAccountCircleFill className="nav-list-item-icon" />  
                  <p className="nav-list-item-text">Account</p>
                  <div className="nav-list-item-right-icon">
                  </div>
                </div>

                </li>

                <li className="nav-list-menu-divider">
                <div onClick={()=>setCurrentTabPopup("popup_discord")} className={currentTabPopup == "popup_discord"?
                 "nav-list-items nav-list-items-selected":
                 "nav-list-items"
                  }>
                  <LuLink className="nav-list-item-icon lulink-icon" />  
                  <p className="nav-list-item-text">Connect Discord</p>
                  <div className="nav-list-item-right-icon">
                  </div>
                </div>

                </li>

                <li className="nav-list-menu-divider">
                <div onClick={()=>setCurrentTabPopup("popup_preferences")} className={currentTabPopup == "popup_preferences"?
                 "nav-list-items nav-list-items-selected":
                 "nav-list-items"
                  }>
                  <LuSlidersHorizontal className="nav-list-item-icon" />  
                  <p className="nav-list-item-text">Preferences</p>
                  <div className="nav-list-item-right-icon">
                  </div>
                </div>

                </li>

                </ul>

                <p className="popup-pane-list-title mt-[13px]">Project</p>
              <ul className="mt-[1px]">
                <li className="nav-list-menu-divider">
                <div onClick={()=>setCurrentTabPopup("popup_members")} className={currentTabPopup == "popup_members"?
                 "nav-list-items nav-list-items-selected":
                 "nav-list-items"
                  }>
                  <FaUsers  className="nav-list-item-icon" />  
                  <p className="nav-list-item-text">Members</p>
                  <div className="nav-list-item-right-icon">
                  </div>
                </div>

                </li>

                <li className="nav-list-menu-divider">
                <div onClick={()=>setCurrentTabPopup("popup_billing")} className={currentTabPopup == "popup_billing"?
                 "nav-list-items nav-list-items-selected":
                 "nav-list-items"
                  }>
                  <LuLink className="nav-list-item-icon lulink-icon" />  
                  <p className="nav-list-item-text">Billing</p>
                  <div className="nav-list-item-right-icon">
                  </div>
                </div>

                </li>

                <li className="nav-list-menu-divider">

                <div onClick={()=>setCurrentTabPopup("popup_doc")} className={currentTabPopup == "popup_doc"?
                 "nav-list-items nav-list-items-selected":
                 "nav-list-items"
                  }>
                  <HiDocumentArrowUp className="nav-list-item-icon" />  
                  <p className="nav-list-item-text">Documents
                  </p>
                  <Card className="nav-list-item-right-icon">
                 <p className="nav-list-item-right-icon-text"> ⌘D </p>
                  </Card>
                </div>

                </li>

                

                </ul>
                

                        </div>

                        <div className="popup-body-pane">

                         
                         {dialog_page_to_show}

                        </div>
                        
                        </div>    
                      </DialogContent>    
                    </Dialog>  
                </div>

                </li>

                


            </ul>

            <ul className="mt-[-23px]">
              
             <li className="nav-list-menu-divider-2">

                <div className="nav-menu-list-divider-2">
                <p className="nav-list-item-div-text" style={{opacity:'0.8',fontSize:'11px'}} >Frontend</p>

                  <div className="nav-list-item-div-right-icon">
                  <FaHeart className="nav-menu-list-div-icon" style={{fontSize:'8px',opacity:'0.6',transform:'translateY(-0.3px)'}}/>

                  </div>
                </div>

                </li>

              <li className="nav-list-menu-divider mt-[-7px]">

                <div className="nav-list-items">
                  <Avatar className="nav-side-pop-item-avatar nav-list-item-icon" style={{opacity:'1'}}>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                  
                </Avatar>
                  <p className="nav-list-item-text nav-list-item-text-resize">Sophia Carter</p>
                 
                  <div className="nav-list-item-right-icon side-nav-user-align">

                 <FaCommentAlt className="nav-list-item-right-icon-text ml-[6px]" /> 

                  </div>
                </div>

                </li>

                  <li className="nav-list-menu-divider mt-[-3px]">

                <div className="nav-list-items">
                <Avatar className="nav-side-pop-item-avatar nav-list-item-icon" style={{opacity:'1'}}>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                  
                </Avatar>
                   <p className="nav-list-item-text nav-list-item-text-resize">Liam Rodriguez</p>
                 
                  <div className="nav-list-item-right-icon side-nav-user-align">

                 <FaCommentAlt className="nav-list-item-right-icon-text ml-[6px]" /> 

                  </div>
                </div>

                </li>

                  <li className="nav-list-menu-divider mt-[-4px]">

                <div className="nav-list-items">
                <Avatar className="nav-side-pop-item-avatar nav-list-item-icon" style={{opacity:'1'}}>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                  
                </Avatar>
                  <p className="nav-list-item-text nav-list-item-text-resize">Olivia Patel</p>
                 
                  <div className="nav-list-item-right-icon side-nav-user-align">

                 <FaCommentAlt className="nav-list-item-right-icon-text ml-[6px]" /> 

                  </div>
                </div>

                </li>

               <li className="nav-list-menu-divider-2 mt-[-20px]">

                <div className="nav-menu-list-divider-2">
                <p className="nav-list-item-div-text" style={{opacity:'0.8',fontSize:'11px'}} >Backend</p>

                  <div className="nav-list-item-div-right-icon">
                  <FaHeart className="nav-menu-list-div-icon" style={{fontSize:'8px',opacity:'0.6',transform:'translateY(-2.3px)'}}/>

                  </div>
                </div>

                </li>

                 <li className="nav-list-menu-divider-2 mt-[-30px]">

                <div className="nav-menu-list-divider-2">
                <p className="nav-list-item-div-text" style={{opacity:'0.8',fontSize:'11px'}} >Cybersec</p>

                  <div className="nav-list-item-div-right-icon">
                  <FaHeart className="nav-menu-list-div-icon" style={{fontSize:'8px',opacity:'0.6',transform:'translateY(-2.3px)'}}/>

                  </div>
                </div>

                </li>
                


            </ul>
           </div>

          <div style={{flex:0.3}}>
          <ul className="mt-[0px]">
                <li className="nav-list-menu-divider">
                <div onClick={()=>setCurrentTab("support")} className={currentTab == "support"?
                 "nav-list-items nav-list-items-selected":
                 "nav-list-items"
                  }>
                  <RiQuestionFill className="nav-list-item-icon" />  
                  <p className="nav-list-item-text">Support</p>
                  <div className="nav-list-item-right-icon">
                  </div>
                </div>

                </li>

                <li className="nav-list-menu-divider mt-[0px]">
                <div onClick={()=>setCurrentTab("feedback")} className={currentTab == "feedback"?
                 "nav-list-items nav-list-items-selected":
                 "nav-list-items"
                  }>
                  <FaLaugh className="nav-list-item-icon" />  
                  <p className="nav-list-item-text">Feedback</p>
                  <div className="nav-list-item-right-icon">
                  </div>
                </div>

                </li>
            </ul>
            <DropdownMenu>
      <DropdownMenuTrigger asChild>
       

          <Card className="nav-top-user mt-[20px]">
                <div className="nav-top-user-icon"/>
                <p className="nav-top-user-text resize-text">{currentAccount == '2'? 'Aarav Sareen' :'Liam Patel'  }</p>
                <FaSort className="nav-top-user-right-icon"/>
                
            </Card>
        
 
              
       </DropdownMenuTrigger>
       <DropdownMenuContent className="w-56">
       <DropdownMenuGroup>

       <DropdownMenuItem className="cursor" onClick={()=>setCurrentAccount('1')}>
       <Avatar className="nav-side-pop-item-avatar">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
            <span className="nav-side-pop-item-text ml-[12px]">Liam Patel</span>
            <DropdownMenuShortcut>
            <FaCheckCircle className= {currentAccount == '1'? "nav-side-pop-item-icon" : "nav-side-pop-item-icon hide-elem" }/>
              </DropdownMenuShortcut>
          </DropdownMenuItem>

       <DropdownMenuItem className="cursor" onClick={()=>setCurrentAccount('2')}>
       <Avatar className="nav-side-pop-item-avatar">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
            <span className="nav-side-pop-item-text ml-[12px]">Aarav Sareen</span>
            <DropdownMenuShortcut>
            <FaCheckCircle className= {currentAccount == '2'? "nav-side-pop-item-icon" : "nav-side-pop-item-icon hide-elem" }/>
              </DropdownMenuShortcut>
          </DropdownMenuItem>


        </DropdownMenuGroup>

        <DropdownMenuSeparator />

       <DropdownMenuGroup>
       <DropdownMenuItem className="cursor">
            <IoMdSettings className="mr-2 h-4 w-4 nav-pop-icon-left"/>
            <span className="nav-side-pop-item-text ml-[13.5px]">Account Settings</span>
            <DropdownMenuShortcut>
              <Card className="nav-side-pop-item-icon-right">
            ⌘G
              </Card>
              </DropdownMenuShortcut>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor">
            <BiSolidLogOutCircle className="mr-2 h-4 w-4 nav-pop-icon-left2"/>
            <span className="nav-side-pop-item-text ml-[13.5px]">Logout</span>
            <DropdownMenuShortcut>
              <Card className="nav-side-pop-item-icon-right" style={{opacity:'0'}}>
            ⌘G
              </Card>
              </DropdownMenuShortcut>
          </DropdownMenuItem>

        </DropdownMenuGroup>
        </DropdownMenuContent>
       </DropdownMenu>

          </div>

           
        </div>
    )
}

export default SideNavigation;