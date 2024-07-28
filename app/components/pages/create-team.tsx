import { Card } from '@/components/ui/card';
import './create-team.css'
import { GoTriangleLeft } from "react-icons/go";
import { LuSlidersHorizontal } from "react-icons/lu";
import { FaFilter } from "react-icons/fa6";
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




export default function CreateTeamView(){

    return(
        <div className='create-team-container'>

            <div className='create-team-view1'>
                <GoTriangleLeft className='create-team-view1-icon'/>
                <p className='create-team-view1-text'>Create team</p>

            </div>

            <div className='create-team-view2'>
                <div className='create-team-view2-icon'/>
               <Card className='create-team-view2-input ml-[10px] mt-[0.3px]'>
               <input className='create-team-view2-input focus:outline-none mt-[2px] ml-[2px]' placeholder='Team name'/>
               </Card> 

            </div>
            
            <div className='create-team-view3'>
                <p className='create-team-view3-title'>Assign members</p>
                <p className='create-team-view3-description'>Assign developers to your team. This can be changed later.
                </p>
            </div>

         

            <div className='create-team-view2'>
               <Card className='create-team-view4-input ml-[0px] mt-[-4.3px]'>
               <input className='create-team-view4-input focus:outline-none' placeholder='Search developers...'/>
               </Card> 
               <LuSlidersHorizontal className='create-team-view4-icon1'/>
        

       <DropdownMenu>
      <DropdownMenuTrigger asChild>

      <div>
      <FaFilter className='create-team-view4-icon2 ml-[-20px]'/>
      
      </div> 
             
       </DropdownMenuTrigger>
       <DropdownMenuContent className="ml-[-10px]">

       <DropdownMenuItem className="cursor w-[100px]">
          <div className='w-[120px]'>
            <p className='developers-list-filer-item-title'>From project</p>
            <p className='developers-list-filer-item-description w-[100px]'>Only developers already in your 
            team will be shown.</p>
          </div>
          </DropdownMenuItem>
          <DropdownMenuLabel style={{fontWeight:'normal',fontSize:'10px',opacity:'0.6'}}>Sort by rating</DropdownMenuLabel>
          <DropdownMenuItem className="cursor">
          <div className='w-[130px]'>
            <p className='developers-list-filer-item-title'>Ascending</p>
           
          </div>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor">
          <div className='w-[110px]'>
            <p className='developers-list-filer-item-title'>Descending</p>
            
          </div>
          </DropdownMenuItem>

       
        </DropdownMenuContent>
       </DropdownMenu>  

            </div>

            <div className='create-team-view-scroll'>
                <Card className='create-team-list-item'>
                    <div className='create-team-list-item-head'>
                    <Avatar className="create-team-list-item-head-icon">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                  
                </Avatar>

                 
                <div className='create-team-list-item-head-title-view'>
                <p className="create-team-list-item-head-title">Liam Rodriguez</p>
                <LuDot  className='ml-[-7px]'/> 
                <p className="create-team-list-item-head-title">Frontend</p>
                </div>
                    </div>
                <div className="create-team-list-item-head-description">Hey! I’m a frontend Developer specializing in creating intuitive and responsive web interfaces using HTML, 
                CSS, JavaScript, and React.

                <div className='create-team-list-item-head-description-inner mt-[10px]'>
                    <Card className='w-[100px] p-[5px] footer-details-create-list-item'>
                    <div className='create-team-list-item-head-title-view'>
                <p className="create-team-list-item-head-title lil-sized-text">Assign</p>
                <LuDot  className='ml-[-4.5px] mt-[2.6px]'/> 
                <p className="create-team-list-item-head-title lil-sized-text">$45/hour</p>
                </div>  
                    </Card>

                    <div className='w-[110px] p-[5px] footer-details-create-list-item start-view'>
                    <FaStar className='star-rating  star-checked' />
                    <FaStar className='star-rating star-checked'/>
                    <FaStar className='star-rating star-checked'/>
                    <FaStar className='star-rating star-checked'/>
                    <FaStar className='star-rating star-unchecked'/>

                    </div>
                </div>
                </div>

                </Card>

                <Card className='create-team-list-item'>
                    <div className='create-team-list-item-head'>
                    <Avatar className="create-team-list-item-head-icon">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                  
                </Avatar>

                 
                <div className='create-team-list-item-head-title-view'>
                <p className="create-team-list-item-head-title">Olivia Patel</p>
                <LuDot  className='ml-[-29px]'/> 
                <p className="create-team-list-item-head-title ml-[-20px]">Frontend</p>
                </div>
                    </div>
                <div className="create-team-list-item-head-description">Frontend Developer with expertise in building dynamic! I’m a frontend Developer specializing in creating intuitive and responsive web interfaces using HTML, 
                CSS, JavaScript, and React.

                <div className='create-team-list-item-head-description-inner mt-[10px]'>
                    <Card className='w-[100px] p-[5px] footer-details-create-list-item'>
                    <div className='create-team-list-item-head-title-view'>
                <p className="create-team-list-item-head-title lil-sized-text">Assign</p>
                <LuDot  className='ml-[-4.5px] mt-[2.6px]'/> 
                <p className="create-team-list-item-head-title lil-sized-text">$45/hour</p>
                </div>  
                    </Card>

                    <div className='w-[110px] p-[5px] footer-details-create-list-item start-view'>
                    <FaStar className='star-rating  star-checked' />
                    <FaStar className='star-rating star-checked'/>
                    <FaStar className='star-rating star-checked'/>
                    <FaStar className='star-rating star-checked'/>
                    <FaStar className='star-rating star-unchecked'/>

                    </div>
                </div>
                </div>

                </Card>
            </div>

            <div className='create-team-dialog-footer p-[7px]'>
                <Card className='create-team-dialog-footer-button'>
                    <p className='create-team-dialog-footer-button-text'>Create</p>
                    <div className='create-team-dialog-footer-button-tip'>Enter</div>
                </Card>
            </div>

        </div>
    )
}