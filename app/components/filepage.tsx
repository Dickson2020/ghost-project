import './filepage.css'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { AvatarFallback, AvatarImage, Avatar } from "@/components/ui/avatar";
import { FaBox, FaCalendar, FaFolder, FaImage, FaPlus, FaSliders, FaYoutube } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { ScrollArea } from '@/components/ui/scroll-area';
import { GoTriangleRight } from 'react-icons/go';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { HiDocumentArrowUp } from "react-icons/hi2";


export default function DocumentView(){
   

  

   const [pageTitle, setPageTitle] = useState("Documents")

   useEffect(()=>{
    setPageTitle("Documents")
   }, [])

    useEffect(()=>{
        const container_element = document.getElementById('file-container') as HTMLDivElement
        if(container_element){
         container_element.style.height = window.innerHeight - 2 + 'px'
        
        }
      

    
    },[])

    return(
        <div className='file-container' id='file-container'>

            
            <div className='file-top-view'>

                

              {(pageTitle != "Documents")? 

              <div className='page-title-grid'> 


       <p onClick={()=>setPageTitle("Documents")} className='file-top-view-title ml-[-10px]'>Documents</p>
       <GoTriangleRight className='mt-[5px]'/>
       <p className='file-top-view-title ml-[10px]'>{pageTitle}</p>

              </div> : 
              
              <p className='file-top-view-title ml-[10px]'>{pageTitle}</p>
              
              }


                <div className='create-team-dialog-footer-file p-[7px] gap-3 mt-[-38px]'>

            
        
      <div className='top-filter-icon'> <FaSliders className='doc-filter mt-[9.5px]'/> </div>
        <Card><Input className='search-doc-input' placeholder='Search documents'/></Card>

        <DropdownMenu>
        <DropdownMenuTrigger asChild>
                <Card className='create-team-dialog-footer-button ml-[1.1px]' >
                    <p className='create-team-dialog-footer-button-text'>Create</p>
                    <div className='create-team-dialog-footer-button-tip'>N</div>
                </Card>
            </DropdownMenuTrigger>
          <DropdownMenuContent className="w-36">
          <DropdownMenuItem className='p-[5px] cursor-item-grid-item'> 
             <HiDocumentArrowUp className='create-grid-view-icon' />
            <span className='create-grid-view-text'>File</span>
</DropdownMenuItem>
          

          <DropdownMenuItem className='p-[4px] cursor-item-grid-item'>
          <FaFolder className='create-grid-view-icon' />
            <span className='create-grid-view-text'>Folder</span>

          </DropdownMenuItem>
           

          </DropdownMenuContent>

       

          </DropdownMenu>
               
            </div>


            </div>

             <div className='before-render-data-file'>
              
             <div className='p-[20px]'>

             <p className='before-render-data-file-titles'>Folders</p>

              <div className='before-render-data-file-container mt-[20px]'>

                <div className='grid grid-cols-3 gap-4'>
                    <Card onClick={()=>setPageTitle("Legal Documents")} className='before-render-data-file-container-grid-item folder-col pointer'>
                        <FaFolder  className='folder-col-icon'/>
                        <p className='folder-col-title'>Legal Documents</p>
                    </Card>


                    <Card onClick={()=>setPageTitle("Brand")} className='before-render-data-file-container-grid-item folder-col pointer'>
                        <FaFolder  className='folder-col-icon'/>
                        <p className='folder-col-title'>Brand</p>
                        <Avatar className="folder-col-avatar" style={{opacity:'1'}}>
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                       <AvatarFallback>CN</AvatarFallback>
                  
                      </Avatar>
                    </Card>

                </div>

              </div>
                
            </div>
        


            <div className='p-[20px]'>

<p className='before-render-data-file-titles'>Files</p>
<ScrollArea className='w-[100%] h-[400px] pt-[8px]'>
    
 <div className='before-render-data-file-container mt-[20px]'>

<div className='grid grid-cols-3 gap-4'>
   


    <Card className='before-render-data-file-container-grid-item pointer p-[5px]'>
       <div className='w-[100%] file-col'>
       <FaBox  className='file-col-icon' style={{transform: 'rotateX(-45deg)'}}/>
        <p className='file-col-title'>Echoverse_Overview.pdf</p>
        <Avatar className="file-col-avatar mt-[-3px]" style={{opacity:'1'}}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
       <AvatarFallback>CN</AvatarFallback>
  
      </Avatar>
       </div>

       <div className='file-preview-container'>
       <img alt="preview image" src="/screenshot.png"   className='file-preview-image' />
       </div>
    </Card>


    <Card className='before-render-data-file-container-grid-item pointer p-[10px]'>
       <div className='w-[100%] file-col'>
       <FaBox  className='file-col-icon' style={{transform: 'rotateX(-45deg)'}}/>
        <p className='file-col-title'>Echoverse_Overview.pdf</p>
        <Avatar className="file-col-avatar mt-[-3px]" style={{opacity:'1'}}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
       <AvatarFallback>CN</AvatarFallback>
  
      </Avatar>
       </div>

       <div className='file-preview-container'>
       <img alt="preview image" src="/screenshot.png"   className='file-preview-image' />
       </div>
    </Card>

    <Card className='before-render-data-file-container-grid-item pointer p-[10px]'>
       <div className='w-[100%] file-col'>
       <FaImage  className='file-col-icon' style={{transform: 'rotateX(-45deg)'}}/>
        <p className='file-col-title'>Branding.png</p>
        <Avatar className="file-col-avatar mt-[-3px]" style={{opacity:'1'}}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
       <AvatarFallback>CN</AvatarFallback>
  
      </Avatar>
       </div>

       <div className='file-preview-container'>
       <img alt="preview image" src="/holo.png"   className='file-preview-image' />
       </div>
    </Card>

</div>


<div className='grid grid-cols-3 gap-4 mt-[12px]'>
   


   <Card className='before-render-data-file-container-grid-item pointer p-[10px]'>
      <div className='w-[100%] file-col'>
      <FaBox  className='file-col-icon' style={{transform: 'rotateX(-45deg)'}}/>
       <p className='file-col-title'>VID_20231023_175045.mp4</p>
       <Avatar className="file-col-avatar mt-[-3px]" style={{opacity:'1'}}>
     <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
 
     </Avatar>
      </div>

      <div className='file-preview-container'>
      <img alt="preview image" src="/screenshot.png"   className='file-preview-image' />
      </div>
   </Card>


   <Card className='before-render-data-file-container-grid-item pointer p-[10px]'>
      <div className='w-[100%] file-col'>
      <FaYoutube  className='file-col-icon' style={{transform: 'rotateX(-45deg)'}}/>
       <p className='file-col-title'>Music_totally_related_to_the_project.mp3</p>
       <Avatar className="file-col-avatar mt-[-3px]" style={{opacity:'1'}}>
     <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
 
     </Avatar>
      </div>

      <div className='file-preview-container'>
       <img alt="preview image" src="/music.png"   className='file-preview-image' />
      </div>
   </Card>

   

</div>

</div>
</ScrollArea>
   
</div>


            </div>
            

        </div>
    )
}