"use client"
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import './dashboard.css'
import { AvatarFallback, AvatarImage, Avatar } from "@/components/ui/avatar";
import { FaPlus } from "react-icons/fa6";


export default function DashboardView(){

    return(
        <div className='dashboad-container'>

            <div className='dashboard-top-view'>

                <p className='dashboard-top-view-title ml-[10px]'>EchoVerse</p>

                <Card className='top-view-text-card'>
                EchoVerse is an experimental project aiming to create an immersive audio experience through collaborative 
                soundscapes. Participants contribute various sounds, from everyday noises to musical snippets
                </Card>

            </div>

            <div className='before-render-data'>
                <p className='before-render-data-text'>This weeks tasks</p>
                <FaPlus className='before-render-data-icon' />
            </div>
            <div className='task-render'>
                <Card className='task-card'>
                    <CardContent>
                        <p className='task-card-duration mt-[12px]'>1 Jun -- 5 Jun</p>
                        <h3 className='task-card-title mt-[10px]'>Design Homepage</h3>
                        <p className='task-card-description mt-[7px]'>Create a modern, visually appealing, and responsive homepage design that captures user attention.</p>
                    </CardContent>
                    <div className='task-card-footer'>
                    <div className='avatar-views mt-[0px]'>

                    <Avatar className="avatar-icon" style={{width:'22px',position:'absolute',height:'22px',border:'1px solid #ccc'}}>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback></AvatarFallback>
        
                </Avatar>

                <Avatar className="avatar-icon ml-[15px]" style={{width:'22px',position:'absolute',height:'22px',border:'1px solid #ccc'}}>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback></AvatarFallback>
        
                </Avatar>

                <div className="avatar-icon ml-[25px]" style={{justifyContent:'center',display:'flex',flexDirection:'column',borderRadius:'100px',background:'#ccc',width:'22px',position:'absolute',height:'22px',border:'1px solid #ccc'}}>
                   <FaPlus style={{justifyContent:'center',justifySelf:'center',alignSelf:'center',fontSize:'12px',color:'black'}}/>
                </div>
                        
                    </div>
                    <p className='task-card-points'>16pts</p>
                    <p className='task-card-budget-text'>$800 estimate</p>
                    </div>
                </Card>

                <Card className='task-card mt-[-40px]'>
                    <CardContent>
                        <p className='task-card-duration mt-[12px]'>4 Jun -- 6 Jun</p>
                        <h3 className='task-card-title mt-[10px]'>Design Homepage</h3>
                        <p className='task-card-description mt-[7px]'>Develop robust user login and registration functionalities, ensuring security and ease of use.                        </p>
                    </CardContent>
                    <div className='task-card-footer'>
                    <div className='avatar-views mt-[0px]'>

                    <Avatar className="avatar-icon" style={{width:'22px',position:'absolute',height:'22px',border:'1px solid #ccc'}}>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback></AvatarFallback>
        
                </Avatar>

                <Avatar className="avatar-icon ml-[15px]" style={{width:'22px',position:'absolute',height:'22px',border:'1px solid #ccc'}}>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback></AvatarFallback>
        
                </Avatar>

                <div className="avatar-icon ml-[25px]" style={{justifyContent:'center',display:'flex',flexDirection:'column',borderRadius:'100px',background:'#ccc',width:'22px',position:'absolute',height:'22px',border:'1px solid #ccc'}}>
                   <FaPlus style={{justifyContent:'center',justifySelf:'center',alignSelf:'center',fontSize:'12px',color:'black'}}/>
                </div>
                        
                    </div>
                    <p className='task-card-points'>8pts</p>
                    <p className='task-card-budget-text'>$800 estimate</p>
                    </div>
                </Card>
            </div>
            
            
        </div>
    )
}