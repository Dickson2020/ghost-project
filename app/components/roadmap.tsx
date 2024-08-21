import './roadmap.css'
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
import BrowseDevelopers from './pages/browse-developers';
import EditTask from './pages/edit-roadmap-tasks';


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

    const [weekDays, setProjectDUration] = useState<weekDays[]>([])
    const [monthsIndex,setMonthsIndex] = useState([1,2,3,4,5,6,7,8,9,10,11,12])
    const [weeksToRender, setWeeksToRender] = useState<weeksToRender[]>([])
    const [dialogPercentage, setDialogPercentage] = useState('100%')
    const [roadMapTasks, setRoadMapTasks] = useState([
      {
        id: 0,
        duration_start_day: 39,
        duration_end_day: 20,
        duration_month: 1
      }
    
    ])

    const [taskRowsCount, setTaskRowsCount] = useState([1, 2])
    let renderTasksClusterRemaker: ClusterRemake[] = []
    let counter = 0
    let counter_rw = 0
    let previous_row = 0
    let current_row = 0


    let taskTipsReducer = 0
    function renderTaskTips(){
      

      if(taskTipsReducer < 1){
        taskTipsReducer++
        return <div key={taskTipsReducer} className='new-entry-tip'> New rows are created when tasks have conflicting duration. </div> 
      }else{
        taskTipsReducer++
        return <div key={taskTipsReducer}/>
      }

    }


    let statusIncrement = 0
    function renderIcon(status: string){
      let elem = (<div />)

      switch(status){
        case 'completed':
          return <FaCheckCircle key={statusIncrement} className='w-[10px] h-[10px] completed-cion mt-[5px]' />
        case 'progress':
          return <RiProgress4Line key={statusIncrement} className='w-[10px] h-[10px] progress-icon mt-[5px]' />
        case 'todo':
          return <FaRegCircle key={statusIncrement} className='w-[10px] h-[10px] mt-[5px]' />
            
      }
      statusIncrement++
    }
    function renderTasks(value: roadMapTaskInterface, index: number, row: number){
      let elm = (
        <Sheet>
        <SheetTrigger asChild>
        <Card style={{transform:`translateX(${value.left}px) translateY(${value.top}px)`,width:`${value.width}px`}} className={` p-[10px] mt-[10px] roadmap-tasks-render-layout cursor-touchable`}>
          
          
          {renderIcon(value.details.status)}
          <p className='title-item-text pt-[2px] ml-[5px]'>{value.details.title}</p>
          <div className='grid grid-cols-3 mt-[5px]' style={{position:'relative'}}>
            <Avatar className="w-[13px] h-[13px]" style={{position:'absolute'}}>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <Avatar className="w-[13px] h-[13px] ml-[10px]" style={{position:'absolute'}}>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <Avatar className="w-[13px] h-[13px] ml-[20px]" style={{position:'absolute'}}>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>

          </div>
          <p className='budget-item-text pt-[2px]'>{value.details.budget}</p>

      </Card>
    </SheetTrigger>
    <SheetContent className='browse-developers-sheet w-[350px]'>
      <EditTask />
    </SheetContent>    
       
    </Sheet>


    
      )
      renderTasksClusterRemaker.push({
        id: index,
        row: value.row,
        isRender: false
      })

      
      counter++
      counter_rw++
 
      if(counter > 5 ){
        //counter = 0
        return (<div />)
      }

      return (value.row == row)? elm : <div />
    }

    useEffect(()=>{

      let dateObject = new Date()
      let currentYear = dateObject.getFullYear()
      let all_months = 12
      let week_days = []
      let days_str = ["Mo", "Tu", "We", "Thu", "Fr"]
      let week_counter = 0
      let weeks_to_render = []
      let weeks_to_render_index = 0
      let split_component = false
      let component_splitter = 0
      let daysAdd = []
      let show_rule_index_counter = 0
      for(let month = 1; month <= all_months; month++){
        let currentMonth = new Date(currentYear,month,0 )
        let monthDaysLength = currentMonth.getDate()
       
        
        for(let days_in_month = 1; days_in_month <= monthDaysLength; days_in_month++ ){

          let str_week_day = (days_str[week_counter] == undefined)? "Mon " + days_in_month : days_str[week_counter] + " " + days_in_month
         
          let roadmap_task_cluster = []
          
        for(let roadmap_task = 0; roadmap_task <= roadMapTasks.length - 1; roadmap_task++){
          if(roadMapTasks[roadmap_task].duration_month == month && month <= 1 ){
           roadmap_task_cluster.push(
             {
               row: roadmap_task + 1,
               width: 30
             }
           )
          }
        }
          
          

    
          if(week_counter >= 5){
            week_counter = 0
           // split_component = true
            weeks_to_render.push({
            index: weeks_to_render_index
            })

            if(split_component){
              split_component = false
            }else{
              split_component = true
            }


            let objectWeek = {
              day: daysAdd,
             index: days_in_month,
             show_rule_index: show_rule_index_counter++,
              split_component: split_component,
              tasks: [
                {
                row: 1,
                width: 330,
                left:200,
                top:1,
                details:{
                  status: 'completed',
                  title: 'Design UI',
                  budget: '$910'
                },
                show_rule: true
              }, 
              {
                row: 2, 
                width: 300, 
                left: 30,
                top: 1,
                details:{
                  status: 'progress',
                  title: 'Test Accessibility',
                  budget: '$910'
                },
                show_rule: false
              }

           , 
              {
                row: 1, 
                width: 370, 
                left: 370,
                top: 8,
                details:{
                  status: 'todo',
                  title: 'Ensure Security and Compliance',
                  budget: '$910'
                },
                show_rule: false
              } 
              
              ]
            }
            week_days.push(objectWeek)
              console.log(daysAdd)
            weeks_to_render_index++
            daysAdd = []
            
          }
          week_counter++
          daysAdd.push(str_week_day)
          
          }

          
        

      }

      setProjectDUration(week_days)
      setWeeksToRender(weeks_to_render)
             

     



    },[])

      const [displaySortType, setDisplaySortType] = useState('Manual')
         const [current_create_task_status, set_new_create_task_status] = useState('todo_option')
   const [statusElement, setStatusElement] = useState<JSX.Element>( 
   <Card className='create-task-grid-item p-[10px]'>
    <FaRegCircle className='create-task-grid-item-icon-left' />
    <h3 className='create-task-grid-item-text pt-[2px]'>Todo</h3>
    <GoTriangleDown className='create-task-grid-item-icon-right'/>
    </Card> 
    )

    const [new_create_task_point, set_new_create_task_point] = useState('8')

   function createTaskStatus(){
    let element = (<div />)
    switch(current_create_task_status){
        case 'todo_option':
            element = (
                <Card className='create-task-grid-item p-[10px]'>
                <FaRegCircle className='create-task-grid-item-icon-left' />
                <h3 className='create-task-grid-item-text pt-[2px]'>Todo</h3>
                <GoTriangleDown className='create-task-grid-item-icon-right'/>
                </Card> 
                     )
            break
        
        case 'in_progress_option':

          element = ( <Card className='create-task-grid-item p-[10px]'>
            <RiProgress4Line className='create-task-grid-item-icon-left' />
            <h3 className='create-task-grid-item-text pt-[2px]'>In Progress</h3>
            <GoTriangleDown className='create-task-grid-item-icon-right'/>

          </Card> )
          break
        
        case 'complete_option':
            element = (
                <Card className='create-task-grid-item p-[10px]'  onClick={()=>set_new_create_task_status('complete_option')}>
                    <FaCheckCircle className='create-task-grid-item-icon-left completed-cion' />
                    <h3 className='create-task-grid-item-text pt-[2px]'>Complete</h3>
                    <GoTriangleDown className='create-task-grid-item-icon-right'/>

                  </Card> 
                  )

          break

          default:
            element = ( <div /> )
    }

    return element
   }

   useEffect(()=>{

    setStatusElement(createTaskStatus())
   

   },[current_create_task_status])

    useEffect(()=>{
        const container_element = document.getElementById('roadmap-container') as HTMLDivElement
        if(container_element){
         container_element.style.height = window.innerHeight - 2 + 'px'
        
        }
        setStatusElement(createTaskStatus())

    
    },[])

    return(
        <div className='roadmap-container' id='roadmap-container'>

            
            <div className='roadmap-top-view'>

                <p className='roadmap-top-view-title ml-[10px]'>Roadmap</p>

              
                <div className='create-team-dialog-footer-roadmap p-[7px] gap-3 mt-[-38px]'>

                <DropdownMenu>
      <DropdownMenuTrigger asChild>

            <Card className='create-team-dialog-footer-button-no-design grid grid-cols-2'>
           <p className='create-team-dialog-footer-button-text-no-design ml-[5px]'>{dialogPercentage}</p>
           <TiArrowSortedDown className="nav-list-item-icon ml-[12px]" />  

                </Card>

                </DropdownMenuTrigger>
                <DropdownMenuContent>
      <DropdownMenuItem onClick={()=> setDialogPercentage('25%')}>
      <div className='p-[3px] dialog-dropdown-for-percentage'>25%</div>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={()=> setDialogPercentage('50%')}>
      <div className='p-[3px] dialog-dropdown-for-percentage'>50%</div>
        </DropdownMenuItem>

        
        <DropdownMenuItem onClick={()=> setDialogPercentage('75%')}>
      <div className='p-[3px] dialog-dropdown-for-percentage'>75%</div>
        </DropdownMenuItem>

        
        <DropdownMenuItem onClick={()=> setDialogPercentage('100%')}>
      <div className='p-[3px] dialog-dropdown-for-percentage'>100%</div>
        </DropdownMenuItem>
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
                    <div className='create-new-task-modal p-[0px]'>
                        
            <div className='create-task-view1'>
                <GoTriangleLeft className='create-task-view1-icon'/>
                <p className='create-task-view1-text'>Create task</p>

            </div>

            <div className='grid grid-cols-1 mt-[25px]'>
                <h4 className='view-labels'>Title</h4>
                <Input className='focus:outline-none input-element-long-input' placeholder='Type something...' />
               
            </div>

            <div className='grid grid-cols-1 mt-[15px]'>
                <h4 className='view-labels'>Description</h4>
                <Input className='input-element-long-input focus:outline-none' placeholder='Type something...' />
               
            </div>

            <div>
            <div className='mt-[15px]'>
                <h4 className='view-labels'>Status</h4>
               
               <div className='status-controls'>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    {statusElement} 
                    </DropdownMenuTrigger>
                <DropdownMenuContent className='w-[170px]'>
                    <DropdownMenuItem>
                    <div className='create-task-grid-item p-[10px]'  onClick={()=>set_new_create_task_status('todo_option')}>
                    <FaRegCircle className='create-task-grid-item-icon-left progress-icon' />
                    <h3 className='create-task-grid-item-text'>Todo</h3>
                    <GoTriangleDown className='create-task-grid-item-icon-right hide-elem'/>

                  </div> 
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                    <div className='create-task-grid-item p-[10px]' onClick={()=>set_new_create_task_status('in_progress_option')}>
                    <RiProgress4Line className='create-task-grid-item-icon-left' />
                    <h3 className='create-task-grid-item-text'>In Progress</h3>
                    <GoTriangleDown className='create-task-grid-item-icon-right hide-elem'/>

                  </div> 
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                    <div className='create-task-grid-item p-[10px]'  onClick={()=>set_new_create_task_status('complete_option')}>
                    <FaCheckCircle className='create-task-grid-item-icon-left completed-cion' />
                    <h3 className='create-task-grid-item-text'>Complete</h3>
                    <GoTriangleDown className='create-task-grid-item-icon-right hide-elem'/>

                  </div> 
                    </DropdownMenuItem>

                </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Card className='create-task-item-grid-2 p-[10px] ml-[7px]'  onClick={()=>set_new_create_task_status('complete_option')}>
                    <h3 className='create-task-grid-item-text pt-[2px] ml-[-15px]'>{new_create_task_point} points</h3>
                    <GoTriangleDown className='create-task-grid-item-icon-right'/>

                  </Card>  
                    </DropdownMenuTrigger>
                <DropdownMenuContent className='w-[170px]'>
                    <DropdownMenuItem>
                    <div className='create-task-grid-item-grid p-[10px]'  onClick={()=>set_new_create_task_point('8')}>
                    <h3 className='create-task-grid-item-text'>8 points</h3>

                  </div> 
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                    <div className='create-task-item-grid p-[10px]' onClick={()=>set_new_create_task_point('16')}>
                    <h3 className='create-task-grid-item-text'>16 points</h3>

                  </div> 
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                    <div className='create-task-item-grid p-[10px]'  onClick={()=>set_new_create_task_point('32')}>
                    <h3 className='create-task-grid-item-text'>32 points</h3>

                  </div> 
                    </DropdownMenuItem>

                </DropdownMenuContent>
                </DropdownMenu>
               </div>
                     
            </div>

            <div className='grid grid-cols-1 mt-[15px]'>
            <h4 className='view-labels'>Duration</h4>
           
              <DropdownMenu>
              <DropdownMenuTrigger asChild>
                 
          <Card className='create-task-grid-item browse-developers p-[10px]'>
                <FaCalendar className='create-task-grid-item-icon-left' />
                <h3 className='create-task-grid-item-text pt-[2px] ml-[-10px]'> {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Select date...</span>
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
</div>
            </div>

            <div className='mt-[10px]'>
            <h4 className='view-labels'>Assignees</h4>
             <p className='view-description ml-[10px] mt-[4px]' >Developers assigned from here will override 
developers assigned to subtasks</p>
            </div>
             <div className='grid grid-cols-2 mt-[10px]'>
            
            
                
                <Sheet>
                    <SheetTrigger asChild>
                    <Card className='create-task-grid-item-2 browse-developers p-[10px]'>
                <h3 className='create-task-grid-item-text pt-[2px] ml-[-10px]'>Browse Developers</h3>
                <GoTriangleRight className='create-task-grid-item-icon-right mt-[-1.5px]'/>
                </Card>
                </SheetTrigger>
                <SheetContent className='browse-developers-sheet w-[350px]'>
                  <BrowseDevelopers />
                </SheetContent>    
                   
                </Sheet>

             </div> 

             <SheetFooter>
                 <div className='grid grid-cols-2 p-[7px] gap-6'>
                    <SheetClose asChild>
                    <Card className='create-team-dialog-footer-button-no-design ml-[35px]'>
                    <p className='create-team-dialog-footer-button-text-no-design'>Cancel</p>
                </Card>
                    </SheetClose>
           

                <Card className='create-team-dialog-footer-button ml-[3px]' >
                    <p className='create-team-dialog-footer-button-text'>Create</p>
                    <div className='create-team-dialog-footer-button-tip'>Enter</div>
                </Card>
            </div>
             </SheetFooter>

                    </div>
                </SheetContent>    
                   
                </Sheet>
            </div>


            </div>

             <div className='before-render-data-roadmap'>
              
              <ScrollArea className='w-[100%] h-[100%] whitespace-nowrap rounded-md border scroll-view'>
                <div className='flex w-max' >
                {
                  weekDays.map((obj_val,index)=>(

                    (obj_val.split_component)? 
                     <div className='roadmap-item rt-gray' key={obj_val.index + 1} style={{position:'relative'}}>

                     

                     <div className='roadmap-item-week-days-view' key={obj_val.index + 2}>

                     {
                        obj_val.day.map((val, index)=>(
                         <div key={obj_val.index + 3} className='roadmap-weekday-item-date'>{
                        val
                      } </div> 
                        ))
                      }
                      </div>

                      <div className='w-[100%]' key={obj_val.index + 4}>
                        {
                          (taskRowsCount.map((val)=>(
                          
                        <div className='task-line-seperator' key={obj_val.index + 5}>
                        
                        {
                            obj_val.tasks.map((value, index) => (
                              <div key={value.row + 6}> {renderTasks(value, index, val)} </div>
                            ))
                           }

                         </div>
                        
                          )))
                        }
                       {
                        renderTaskTips()
                       }
                      </div>

                    </div>

                    :

                    <div className='roadmap-item' key={obj_val.index + 7}>
                     <div className='roadmap-item-week-days-view' key={obj_val.index + 8}>

                     {
                        obj_val.day.map((val, index)=>(
                      <div key={obj_val.index + 9} className='roadmap-weekday-item-date'>{
                        val
                      } </div>
                        ))
                      }
                      </div>

                      <div className='w-[100%]' key={obj_val.index + 11}>
                        {
                          (taskRowsCount.map((val)=>(
                          
                        <div className='task-line-seperator' key={obj_val.index + 14}>
                        
                        {
                            obj_val.tasks.map((value, index) => (
                              <div key={value.row + 12}> {renderTasks(value, index, val)} </div>
                            ))
                           }

                         </div> 
                          )))
                        }
                       
                      </div>
                    </div>

                  ))
                }
                </div>
                <ScrollBar orientation='horizontal'/>
               
              </ScrollArea>

               <div className='long-vertical-rule-line ml-[100px] mt-[-10px]'> 
                      
           <div className='long-vertical-rule-line-top-title ml-[10px]'>TODAY</div>
                      
           <div className='long-vertical-rule-line-light-blue ml-[40px]' />

                      <div className='long-vertical-rule-line-dark-blue ml-[40px]'/>
                      
                      </div>

            </div>
            

        </div>
    )
}