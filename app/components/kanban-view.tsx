import './kanban.css'
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

export default function KanbanView(){
    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(2022, 0, 20),
        to: addDays(new Date(2022, 0, 20), 20),
      })

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
        const container_element = document.getElementById('kanban-container') as HTMLDivElement
        if(container_element){
         container_element.style.height = window.innerHeight - 2 + 'px'
        
        }
        setStatusElement(createTaskStatus())

    
    },[])

    return(
        <div className='kanban-container' id='kanban-container'>

            
            <div className='kanban-top-view'>

                <p className='kanban-top-view-title ml-[10px]'>Kanban</p>

              
                <div className='create-team-dialog-footer-kanban p-[7px] gap-3 mt-[-38px]'>

                <DropdownMenu>
      <DropdownMenuTrigger asChild>

            <Card className='create-team-dialog-footer-button-no-design grid grid-cols-2'>
            <FaSliders className="nav-list-item-icon" />  
           <p className='create-team-dialog-footer-button-text-no-design ml-[-15px]'>Display</p>
                </Card>

                </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className='grid grid-cols-1 w-[250px] h-[250px] p-[10px]'>
           <div className='kanban-settings-popup-title-view'>
            <PiArrowsDownUpBold className='kanban-settings-popup-icon'/>
           <h4 className='kanban-settings-popup-title'>Sorting</h4>
           </div>

         

           
           <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Card className='w-[100%] h-[35px] grid grid-cols-2 p-[8px] mt-[0px] kanban-settings-selection'>
            <h4 className='kanban-settings-popup-item-text'>{displaySortType}</h4>
            <GoTriangleDown className='kanban-settings-popup-item-icon ml-[90px] mt-[0.5px]'/>
           </Card> 
                    </DropdownMenuTrigger>
                <DropdownMenuContent className='w-[170px]'>
                    <DropdownMenuItem>
                    <div className='create-task-grid-item p-[10px]' onClick={()=>setDisplaySortType('Manual')}>
                    <h3 className='create-task-grid-item-text'>Manual</h3>

                  </div> 
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                    <div className='create-task-grid-item p-[10px]' onClick={()=>setDisplaySortType('Automatic')}>
                    <h3 className='create-task-grid-item-text'>Automatic</h3>

                  </div> 
                    </DropdownMenuItem>

                   

                </DropdownMenuContent>
                </DropdownMenu>
           
            <div className='kanban-settings-popup-title-view-with-switch'>
            <BiSolidInbox className='kanban-settings-popup-icon'/>
           <h4 className='kanban-settings-popup-title'>Show subtasks</h4>
           <Switch className='kanban-settings-popup-switch'/>
           </div>

           <h4 className='kanban-settings-popup-title-2'>Properties</h4>

           <div className='properties-card-view mt-[-15px]'>
           <Card className='properties-badge-checked'>Title</Card>
           <Card className='properties-badge-checked'>Description</Card>
           <Card className='properties-badge-checked'>Assignees</Card>
           <Card className='properties-badge-checked'>Duration</Card>
           <Card className='properties-badge-unchecked'>Price</Card>
           <Card className='properties-badge-unchecked'>Weight</Card>


           </div>


        </div>

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
                <Input className='input-element-long-input focus:outline-none' placeholder='Type something...' />
               
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
                    <Card className='create-task-grid-item p-[10px] ml-[7px]'  onClick={()=>set_new_create_task_status('complete_option')}>
                    <FaCheckCircle className='create-task-grid-item-icon-left completed-cion hide-elem' />
                    <h3 className='create-task-grid-item-text pt-[2px] ml-[-15px]'>{new_create_task_point} points</h3>
                    <GoTriangleDown className='create-task-grid-item-icon-right'/>

                  </Card>  
                    </DropdownMenuTrigger>
                <DropdownMenuContent className='w-[170px]'>
                    <DropdownMenuItem>
                    <div className='create-task-grid-item p-[10px]'  onClick={()=>set_new_create_task_point('8')}>
                    <FaRegCircle className='create-task-grid-item-icon-left progress-icon hide-elem' />
                    <h3 className='create-task-grid-item-text'>8 points</h3>
                    <GoTriangleDown className='create-task-grid-item-icon-right hide-elem'/>

                  </div> 
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                    <div className='create-task-grid-item p-[10px]' onClick={()=>set_new_create_task_point('16')}>
                    <RiProgress4Line className='create-task-grid-item-icon-left hide-elem' />
                    <h3 className='create-task-grid-item-text'>16 points</h3>
                    <GoTriangleDown className='create-task-grid-item-icon-right hide-elem'/>

                  </div> 
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                    <div className='create-task-grid-item p-[10px]'  onClick={()=>set_new_create_task_point('32')}>
                    <FaCheckCircle className='create-task-grid-item-icon-left completed-cion hide-elem' />
                    <h3 className='create-task-grid-item-text'>32 points</h3>
                    <GoTriangleDown className='create-task-grid-item-icon-right hide-elem'/>

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
            
             <Card className='create-task-grid-item-2 browse-developers p-[10px]'>
                <h3 className='create-task-grid-item-text pt-[2px] ml-[-10px]'>Browse Developers</h3>
                <GoTriangleRight className='create-task-grid-item-icon-right mt-[-1.5px]'/>
                </Card>

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

             <div className='before-render-data-kanban'>
               <div className='before-render-data-kanban-items'>
              
                <FaRegCircle className='before-render-data-icon-kanban plus-icon-circle'/>
                <p className='before-render-data-text-kanban mt-[11.5px] ml-[-27px]'>Todo</p>
                <FaPlus className='before-render-data-icon-kanban plus-icon-circle' />
               </div>

               <div className='before-render-data-kanban-items'>
              
              <RiProgress4Line className='before-render-data-icon-kanban progress-icon'/>
              <p className='before-render-data-text-kanban mt-[11.5px] ml-[-27px]'>In Progress</p>
              <FaPlus className='before-render-data-icon-kanban plus-icon-circle' />
             </div>


             <div className='before-render-data-kanban-items'>
              
              <FaCheckCircle className='before-render-data-icon-kanban completed-cion'/>
              <p className='before-render-data-text-kanban mt-[11.5px] ml-[-27px]'>Complete</p>
              <FaPlus className='before-render-data-icon-kanban plus-icon-circle' />
             </div>

            </div>
            <div className='task-render-kanban'>
                <Card className='task-card-kanban'>
                    <CardContent>
                        <p className='task-card-duration-kanban mt-[12px]'>1 Jun -- 5 Jun</p>
                        <h3 className='task-card-title-kanban mt-[10px]'>Design Homepage</h3>
                        <p className='task-card-description-kanban mt-[7px]'>Create a modern, visually appealing, and responsive homepage design that captures user attention.</p>
                    </CardContent>
                    <div className='task-card-footer-kanban'>
                    <div className='avatar-views-kanban mt-[0px] '>

                    <Avatar className="avatar-icon-kanban" style={{width:'22px',position:'absolute',height:'22px',border:'1px solid #ccc'}}>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback></AvatarFallback>
        
                </Avatar>

                <Avatar className="avatar-icon-kanban ml-[15px]" style={{width:'22px',position:'absolute',height:'22px',border:'1px solid #ccc'}}>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback></AvatarFallback>
        
                </Avatar>

                <div className="avatar-icon-kanban ml-[25px]" style={{justifyContent:'center',display:'flex',flexDirection:'column',borderRadius:'100px',background:'#ccc',width:'22px',position:'absolute',height:'22px',border:'1px solid #ccc'}}>
                   <FaPlus style={{justifyContent:'center',justifySelf:'center',alignSelf:'center',fontSize:'12px',color:'black'}}/>
                </div>
                        
                    </div>
                    <p className='task-card-points-kanban ml-[20px]'>16pts</p>
                    <p className='task-card-budget-text-kanban'>$800 estimate</p>
                    </div>
                </Card>

                <Card className='task-card-kanban'>
                    <CardContent>
                        <p className='task-card-duration-kanban mt-[12px]'>1 Jun -- 5 Jun</p>
                        <h3 className='task-card-title-kanban mt-[10px]'>Test accessibility</h3>
                        <p className='task-card-description-kanban mt-[7px]'>Ensure that the web app is accessible to all users, including 
those with disabilities, by conducting comprehensive 
accessibility testing.</p>
                    </CardContent>
                    <div className='task-card-footer-kanban'>
                    <div className='avatar-views-kanban mt-[0px] '>

                    <Avatar className="avatar-icon-kanban" style={{width:'22px',position:'absolute',height:'22px',border:'1px solid #ccc'}}>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback></AvatarFallback>
        
                </Avatar>

                <Avatar className="avatar-icon-kanban ml-[15px]" style={{width:'22px',position:'absolute',height:'22px',border:'1px solid #ccc'}}>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback></AvatarFallback>
        
                </Avatar>

                <div className="avatar-icon-kanban ml-[25px]" style={{justifyContent:'center',display:'flex',flexDirection:'column',borderRadius:'100px',background:'#ccc',width:'22px',position:'absolute',height:'22px',border:'1px solid #ccc'}}>
                   <FaPlus style={{justifyContent:'center',justifySelf:'center',alignSelf:'center',fontSize:'12px',color:'black'}}/>
                </div>
                        
                    </div>
                    <p className='task-card-points-kanban ml-[20px]'>16pts</p>
                    <p className='task-card-budget-text-kanban'>$800 estimate</p>
                    </div>
                </Card>

                <Card className='task-card-kanban'>
                    <CardContent>
                        <p className='task-card-duration-kanban mt-[12px]'>1 Jun -- 5 Jun</p>
                        <h3 className='task-card-title-kanban mt-[10px]'>Test accessibility</h3>
                        <p className='task-card-description-kanban mt-[7px]'>Ensure that the web app is accessible to all users, including 
those with disabilities, by conducting comprehensive 
accessibility testing.</p>
                    </CardContent>
                    <div className='task-card-footer-kanban'>
                    <div className='avatar-views-kanban mt-[0px] '>

                    <Avatar className="avatar-icon-kanban" style={{width:'22px',position:'absolute',height:'22px',border:'1px solid #ccc'}}>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback></AvatarFallback>
        
                </Avatar>

                <Avatar className="avatar-icon-kanban ml-[15px]" style={{width:'22px',position:'absolute',height:'22px',border:'1px solid #ccc'}}>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback></AvatarFallback>
        
                </Avatar>

                <div className="avatar-icon-kanban ml-[25px]" style={{justifyContent:'center',display:'flex',flexDirection:'column',borderRadius:'100px',background:'#ccc',width:'22px',position:'absolute',height:'22px',border:'1px solid #ccc'}}>
                   <FaPlus style={{justifyContent:'center',justifySelf:'center',alignSelf:'center',fontSize:'12px',color:'black'}}/>
                </div>
                        
                    </div>
                    <p className='task-card-points-kanban ml-[20px]'>16pts</p>
                    <p className='task-card-budget-text-kanban'>$800 estimate</p>
                    </div>
                </Card>


              
            </div>

        </div>
    )
}