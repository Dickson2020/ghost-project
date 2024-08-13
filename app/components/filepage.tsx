import './filepage.css'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { AvatarFallback, AvatarImage, Avatar } from "@/components/ui/avatar";
import { FaCalendar, FaPlus, FaSliders } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';
import { RiProgress4Line } from 'react-icons/ri';
import {PiArrowsDownUpBold} from 'react-icons/pi'
import { GoTriangleLeft } from "react-icons/go";
import {Input} from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { GoTriangleDown, GoTriangleRight } from 'react-icons/go';
import { FaSort } from 'react-icons/fa6'

import { BiSolidInbox } from "react-icons/bi";
import { Switch } from '@/components/ui/switch';
import {Sheet,SheetContent, SheetTrigger, SheetFooter, SheetClose} from "@/components/ui/sheet";
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { addDays, format } from "date-fns"
import { DateRange } from "react-day-picker"
import { TiArrowSortedDown } from "react-icons/ti";
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';


interface detailsInterface{
  status: string,
  title: string,
  budget: string
}
interface roadMapTaskInterface{
  row: number,
  width: number,
  left: number,
  top: number,
  details: detailsInterface,
  show_rule: boolean,

}
interface weekDays{
  day: string[],
  index: number,
  split_component: boolean,
  tasks: roadMapTaskInterface[],
  show_rule_index: number
  
}

interface weeksToRender{
  index: number
}

interface ClusterRemake{
  id: number,
  row: number,
  isRender: boolean
}
export default function RoadmapView(){
    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(2022, 0, 20),
        to: addDays(new Date(2022, 0, 20), 20),
      })

  

  

    useEffect(()=>{
        const container_element = document.getElementById('file-container') as HTMLDivElement
        if(container_element){
         container_element.style.height = window.innerHeight - 2 + 'px'
        
        }
      

    
    },[])

    return(
        <div className='file-container' id='file-container'>

            
            <div className='file-top-view'>

                <p className='file-top-view-title ml-[10px]'>Files</p>

              
                <div className='create-team-dialog-footer-file p-[7px] gap-3 mt-[-38px]'>

                <DropdownMenu>
      <DropdownMenuTrigger asChild>

            <Card className='create-team-dialog-footer-button-no-design grid grid-cols-2'>
           <p className='create-team-dialog-footer-button-text-no-design ml-[5px]'>100%</p>
           <TiArrowSortedDown className="nav-list-item-icon ml-[12px]" />  

                </Card>

                </DropdownMenuTrigger>
      <DropdownMenuContent>
      
        </DropdownMenuContent>
        </DropdownMenu>

                <Sheet>
                    <SheetTrigger asChild>
                    <Card className='create-team-dialog-footer-button ml-[3px]' >
                    <p className='create-team-dialog-footer-button-text'>New Task</p>
                    <div className='create-team-dialog-footer-button-tip'>N</div>
                </Card>
                </SheetTrigger>
                <SheetContent className='create-task-sheet w-[350px]'>
                     </SheetContent>    
                   
                </Sheet>
            </div>


            </div>

             <div className='before-render-data-file'>
              
           

            </div>
            

        </div>
    )
}