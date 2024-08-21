
import './browse-developers.css'
import { Card } from '@/components/ui/card';
import { GoTriangleLeft } from "react-icons/go";
import { LuSlidersHorizontal } from "react-icons/lu";
import { FaFilter } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import { AvatarFallback, AvatarImage, Avatar } from "@/components/ui/avatar";
import {ScrollArea} from "@/components/ui/scroll-area";
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
import { FaCheckCircle, FaCheckDouble } from 'react-icons/fa';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';



export default function BrowseDevelopers(){

    return(
        <div className='browse-developers-container'>

        <div className='browse-developers-view1'>
            <GoTriangleLeft className='browse-developers-view1-icon mt-[-8px]'/>
            <p className='browse-developers-view1-text '>Add developer</p>

        </div>

        
     

        <div className='browse-developers-view2'>
           <Card className='browse-developers-view4-input ml-[0px] mt-[-4.3px]'>
           <input className='browse-developers-view4-input focus:outline-none' placeholder='Search developers...'/>
           </Card> 
           <LuSlidersHorizontal className='browse-developers-view4-icon1'/>
    

   <DropdownMenu>
  <DropdownMenuTrigger asChild>

  <div>
  <FaFilter className='browse-developers-view4-icon2 ml-[-20px]'/>
  
  </div> 
         
   </DropdownMenuTrigger>
   <DropdownMenuContent className="ml-[-17px]">

  
      <DropdownMenuLabel style={{fontWeight:'normal',fontSize:'10px',opacity:'0.6'}}>Filter by profession</DropdownMenuLabel>
      <DropdownMenuItem className="cursor">
      <div className='w-[130px] developers-list-filer-item-grid'>
        <p className='developers-list-filer-item-title'>Frontend</p>
        <FaCheckCircle className='developers-list-filer-item-icon hide-elem'/>
      </div>
      </DropdownMenuItem>

      <DropdownMenuItem className="cursor">
      <div className='w-[130px] developers-list-filer-item-grid'>
        <p className='developers-list-filer-item-title'>Backend</p>
        <FaCheckCircle className='developers-list-filer-item-icon '/>
      </div>
      </DropdownMenuItem>

      <DropdownMenuItem className="cursor">
      <div className='w-[130px] developers-list-filer-item-grid'>
        <p className='developers-list-filer-item-title'>Cybersecurity</p>
        <FaCheckCircle className='developers-list-filer-item-icon '/>
      </div>
      </DropdownMenuItem>

      <DropdownMenuItem className="cursor">
      <div className='w-[130px] developers-list-filer-item-grid'>
        <p className='developers-list-filer-item-title'>Web3</p>
        <FaCheckCircle className='developers-list-filer-item-icon hide-elem'/>
      </div>
      </DropdownMenuItem>

      <DropdownMenuItem className="cursor">
      <div className='w-[130px] developers-list-filer-item-grid'>
        <p className='developers-list-filer-item-title'>UI/UX Design</p>
        <FaCheckCircle className='developers-list-filer-item-icon hide-elem'/>
      </div>
      </DropdownMenuItem>

      <DropdownMenuItem className="cursor">
      <div className='w-[130px] developers-list-filer-item-grid'>
        <p className='developers-list-filer-item-title'>Brand Design</p>
        <FaCheckCircle className='developers-list-filer-item-icon hide-elem'/>
      </div>
      </DropdownMenuItem>


   
    </DropdownMenuContent>
   </DropdownMenu>  

        </div>

        <ScrollArea className='browse-developers-view-scroll'>
            <Card className='browse-developers-list-item'>
                <div className='browse-developers-list-item-head'>
                <Avatar className="browse-developers-list-item-head-icon">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
              
            </Avatar>

             
            <div className='browse-developers-list-item-head-title-view'>
            <p className="browse-developers-list-item-head-title">Liam Rodriguez</p>
            <LuDot  className='ml-[-7px]'/> 
            <p className="browse-developers-list-item-head-title">Frontend</p>
            </div>
                </div>
            <div className="browse-developers-list-item-head-description">Hey! I’m a frontend Developer specializing in creating intuitive and responsive web interfaces using HTML, 
            CSS, JavaScript, and React.

            <div className='browse-developers-list-item-head-description-inner mt-[10px]'>

            <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Card className='w-[100px] p-[5px] footer-details-create-list-item touchable'>
                <div className='browse-developers-list-item-head-title-view'>
            <p className="browse-developers-list-item-head-title lil-sized-text">Assign</p>
            <LuDot  className='ml-[-4.5px] mt-[2.6px]'/> 
            <p className="browse-developers-list-item-head-title lil-sized-text">$45/hour</p>
            </div>  
                </Card>

                </DropdownMenuTrigger>
                <DropdownMenuContent>
     

        <DropdownMenuItem className='assign-role-developer-browse-grid'>
          <p className='assign-role-developer-browse-grid-title'>
            Choose team
          </p>

          <span className='assign-role-developer-browse-grid-desc'>
          Add this developer to a team 
          before assigning tasks.
          </span>
        </DropdownMenuItem>

        <DropdownMenuItem className='assign-role-developer-browse'>
      <div className='assign-role-developer-browse-icon role-1-icon' />
      <span className='assign-role-developer-browse-text'>Frontend</span>
        </DropdownMenuItem>

        <DropdownMenuItem className='assign-role-developer-browse'>
      <div className='assign-role-developer-browse-icon role-2-icon' />
      <span className='assign-role-developer-browse-text'>Backend</span>
        </DropdownMenuItem>

        <DropdownMenuItem className='assign-role-developer-browse'>
      <div className='assign-role-developer-browse-icon role-3-icon' />
      <span className='assign-role-developer-browse-text'>Cybersec</span>
        </DropdownMenuItem>

        <DropdownMenuItem className='assign-role-developer-browse'>
      <BsArrowUpRightCircleFill className='assign-role-developer-browse-icon icon-new-team' />
      <span className='assign-role-developer-browse-text-new-team'>New team</span>
        </DropdownMenuItem>

</DropdownMenuContent>


        </DropdownMenu>
               

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

            <Card className='browse-developers-list-item'>
                <div className='browse-developers-list-item-head'>
                <Avatar className="browse-developers-list-item-head-icon">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
              
            </Avatar>

             
            <div className='browse-developers-list-item-head-title-view'>
            <p className="browse-developers-list-item-head-title">Olivia Patel</p>
            <LuDot  className='ml-[-29px]'/> 
            <p className="browse-developers-list-item-head-title ml-[-20px]">Frontend</p>
            </div>
                </div>
            <div className="browse-developers-list-item-head-description">Frontend Developer with expertise in building dynamic! I’m a frontend Developer specializing in creating intuitive and responsive web interfaces using HTML, 
            CSS, JavaScript, and React.

            <div className='browse-developers-list-item-head-description-inner mt-[10px]'>
               
            <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Card className='w-[100px] p-[5px] footer-details-create-list-item touchable'>
                <div className='browse-developers-list-item-head-title-view'>
            <p className="browse-developers-list-item-head-title lil-sized-text">Assign</p>
            <LuDot  className='ml-[-4.5px] mt-[2.6px]'/> 
            <p className="browse-developers-list-item-head-title lil-sized-text">$45/hour</p>
            </div>  
                </Card>

                </DropdownMenuTrigger>
                <DropdownMenuContent>
     

        <DropdownMenuItem className='assign-role-developer-browse-grid'>
          <p className='assign-role-developer-browse-grid-title'>
            Choose team
          </p>

          <span className='assign-role-developer-browse-grid-desc'>
          Add this developer to a team 
          before assigning tasks.
          </span>
        </DropdownMenuItem>

        <DropdownMenuItem className='assign-role-developer-browse'>
      <div className='assign-role-developer-browse-icon role-1-icon' />
      <span className='assign-role-developer-browse-text'>Frontend</span>
        </DropdownMenuItem>

        <DropdownMenuItem className='assign-role-developer-browse'>
      <div className='assign-role-developer-browse-icon role-2-icon' />
      <span className='assign-role-developer-browse-text'>Backend</span>
        </DropdownMenuItem>

        <DropdownMenuItem className='assign-role-developer-browse'>
      <div className='assign-role-developer-browse-icon role-3-icon' />
      <span className='assign-role-developer-browse-text'>Cybersec</span>
        </DropdownMenuItem>

        <DropdownMenuItem className='assign-role-developer-browse'>
      <BsArrowUpRightCircleFill className='assign-role-developer-browse-icon icon-new-team' />
      <span className='assign-role-developer-browse-text-new-team'>New team</span>
        </DropdownMenuItem>

</DropdownMenuContent>


        </DropdownMenu>
               

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
        </ScrollArea>


        <div className='browse-developers-dialog-footer p-[7px]'>
            <Card className='browse-developers-dialog-footer-button'>
                <p className='browse-developers-dialog-footer-button-text'>Create</p>
                <div className='browse-developers-dialog-footer-button-tip'>Enter</div>
            </Card>
        </div>

    </div>
    )
}