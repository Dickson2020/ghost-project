import './filepage.css'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { AvatarFallback, AvatarImage, Avatar } from "@/components/ui/avatar";
import { FaCalendar, FaPlus, FaSliders } from "react-icons/fa6";
import { useEffect, useState } from 'react';

import { Input } from '@/components/ui/input';


export default function DocumentView(){
   

  

  

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

            
        
        <Card><Input className='search-doc-input' placeholder='Search documents'/></Card>


                <Card className='create-team-dialog-footer-button ml-[1.1px]' >
                    <p className='create-team-dialog-footer-button-text'>Create</p>
                    <div className='create-team-dialog-footer-button-tip'>N</div>
                </Card>

               
            </div>


            </div>

             <div className='before-render-data-file'>
              
           

            </div>
            

        </div>
    )
}