"use client"
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import './dashboard.css'
import { AvatarFallback, AvatarImage, Avatar } from "@/components/ui/avatar";
import { useEffect, useState } from 'react';
import { Calendar } from "@/components/ui/calendar"
import { addDays, format } from "date-fns"
import { DateRange } from "react-day-picker"
import { FaCalendar, FaPlus, FaSliders } from "react-icons/fa6";
import { FaSort } from 'react-icons/fa6'
import {ScrollArea} from "@/components/ui/scroll-area";
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

export default function DashboardView(){

    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(2022, 0, 20),
        to: addDays(new Date(2022, 0, 20), 20),
      })

    useEffect(()=>{
        const container_element = document.getElementById('dashboad-container') as HTMLDivElement
        if(container_element){
         container_element.style.height = window.innerHeight - 2 + 'px'
        
        }
    
    
    },[])

    return(
        <div className='dashboad-container' id='dashboad-container'>

            <div className='dashboard-top-view'>

                <p className='dashboard-top-view-title ml-[10px]'>EchoVerse</p>

                <Card className='top-view-text-card'>
                EchoVerse is an experimental project aiming to create an immersive audio experience through collaborative 
                soundscapes. Participants contribute various sounds, from everyday noises to musical snippets
                </Card>

            </div>

            <div className='before-render-data'>
                <p className='before-render-data-text mt-[-3px]'>This weeks tasks</p>
                <FaPlus className='before-render-data-icon  mt-[-5px]' />
            </div>


            <ScrollArea className='task-render-dashboard'>
           <div className='pb-[10px] chart-view'> 
           <Card className='dashboard-chart-view'>
                <div  className='dashboard-chart-view-top pt-[6px]'>
                    <div className='grid grid-rows-2'>
                        <h4 className='dashboard-chart-view-top-title ml-[10px] mt-[0px]'>Progress</h4>
                        <div className='grid grid-cols-3 gap-2 ml-[10px]'>
                        <div className='grid grid-cols-2 h-[10px]'>
              
              <div className='dashboard-chart-view-top-icon-round-1'/>
              <p className='dashboard-chart-view-top-icon-text mt-[-3px] ml-[-15px]'>Started</p>
             </div>

             <div className='grid grid-cols-2 h-[10px] ml-[-6px]'>
              
              <div className='dashboard-chart-view-top-icon-round-2'/>
              <p className='dashboard-chart-view-top-icon-text mt-[-3px] ml-[-15px]'>Complete</p>
             </div>

             <div className='grid grid-cols-2 h-[10px]'>
              
              <div className='dashboard-chart-view-top-icon-round-3'/>
              <p className='dashboard-chart-view-top-icon-text mt-[-3px] ml-[-15px]'>Estimate</p>
             </div>

           
                        </div>
                    </div>

                    <DropdownMenu>
              <DropdownMenuTrigger asChild>
                 
          <Card className='h-[30px] create-task-grid-item browse-developers p-[10px]'>
                <FaCalendar className='create-task-grid-item-icon-left' />
                <h3 className='chart-item-text pt-[2px] ml-[-10px] mt-[-5px]'> {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span className='chart-item-text'>Start — Projected Finish</span>
            )}</h3>
                <FaSort className='create-task-grid-item-icon-right mt-[-1.5px]'/>
                </Card>
      </DropdownMenuTrigger>
      <DropdownMenuContent   className='w-[600px] ml-[-490px] mt-[-100px]'
      >
       <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            className='w-[400px]'
          />
      </DropdownMenuContent>
    </DropdownMenu>
                <Card className='h-[30px] view-history-button'>View History</Card>

                </div>
                <div  className='dashboard-chart-view-chart'></div>
                <div  className='dashboard-chart-view-bottom'>
                    <h4 className='dashboard-chart-view-bottom-text-left'>3 Apr</h4>
                    <h4 className='dashboard-chart-view-bottom-text-right'>27 Jun</h4>
                </div>
            </Card>
            <p className='dashboard-chart-view-bottom-text mt-[5px] ml-[10px]'>Projected values may fluctuate.</p>
           </div>

                <Card className='task-card'>
                    <CardContent>
                        <p className='task-card-duration mt-[12px]'>1 Jun -- 5 Jun</p>
                        <h3 className='task-card-title mt-[10px]'>Design Homepage</h3>
                        <p className='task-card-description mt-[7px]'>Create a modern, visually appealing, and responsive homepage design that captures user attention.</p>
                    </CardContent>
                    <div className='task-card-footer'>
                    <div className='avatar-views mt-[0px]'>

                    <Avatar className="avatar-icon" style={{width:'22px',height:'22px',border:'1px solid #ccc'}}>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback></AvatarFallback>
        
                </Avatar>

                <Avatar className="avatar-icon ml-[-10px]" style={{width:'22px',height:'22px',border:'1px solid #ccc'}}>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback></AvatarFallback>
        
                </Avatar>

                <div className="avatar-icon ml-[-13px]" style={{zIndex:'1000',justifyContent:'center',display:'flex',flexDirection:'column',borderRadius:'100px',background:'#ccc',width:'22px',height:'22px',border:'1px solid #ccc'}}>
                   <FaPlus style={{justifyContent:'center',justifySelf:'center',alignSelf:'center',fontSize:'12px',color:'black'}}/>
                </div>
                        
                    </div>
                    <p className='task-card-points'>16pts</p>
                    <p className='task-card-budget-text'>$800 estimate</p>
                    </div>
                </Card>

                <Card className='task-card mt-[10px]'>
                    <CardContent>
                        <p className='task-card-duration mt-[12px]'>4 Jun -- 6 Jun</p>
                        <h3 className='task-card-title mt-[10px]'>Design Homepage</h3>
                        <p className='task-card-description mt-[7px]'>Develop robust user login and registration functionalities, ensuring security and ease of use.                        </p>
                    </CardContent>
                    <div className='task-card-footer'>
                    <div className='avatar-views mt-[0px]'>

<Avatar className="avatar-icon" style={{width:'22px',height:'22px',border:'1px solid #ccc'}}>
<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
<AvatarFallback></AvatarFallback>

</Avatar>

<Avatar className="avatar-icon ml-[-10px]" style={{width:'22px',height:'22px',border:'1px solid #ccc'}}>
<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
<AvatarFallback></AvatarFallback>

</Avatar>

<div className="avatar-icon ml-[-13px]" style={{zIndex:'1000',justifyContent:'center',display:'flex',flexDirection:'column',borderRadius:'100px',background:'#ccc',width:'22px',height:'22px',border:'1px solid #ccc'}}>
<FaPlus style={{justifyContent:'center',justifySelf:'center',alignSelf:'center',fontSize:'12px',color:'black'}}/>
</div>
    
</div>
                    <p className='task-card-points'>8pts</p>
                    <p className='task-card-budget-text'>$800 estimate</p>
                    </div>
                </Card>
            </ScrollArea>
            
            
        </div>
    )
}