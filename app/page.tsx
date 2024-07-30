"use client"

import './components/style.css'
import SideNavigation from './components/sidebar'
import DashboardView from './components/pages/dashboard';
import FeedView from './components/pages/feed';
import { useEffect, useState } from 'react';
import KanbanView from './components/kanban-view';

export default function Home() {

  const  [navigation, setNavigation] = useState('dashboard')
  const [pageEl,setPageEl] = useState<JSX.Element>( 
            <div className='body-pane-dashboard'>
             <FeedView />
             <DashboardView />
          </div>
          )

  useEffect(()=>{
  if(typeof document != 'undefined'){
    
    const container_element = document.getElementById('main-conatiner') as HTMLDivElement
    if(container_element){
     container_element.style.height = window.innerHeight - 2 + 'px'
    
    }

    const body_pane_element = document.getElementById('body-pane') as HTMLDivElement
    if(body_pane_element){
      body_pane_element.style.height = window.innerWidth - 280 + 'px'
    
    }
    
  }


  },[])

  function changePage(page_name: string){

    setNavigation(page_name)
    
  }


  function renderMenuPage(){

    let element = (<div />)

    switch(navigation){
      case 'dashboard':
        element =  (
          <div className='body-pane-dashboard'>
             <FeedView />
             <DashboardView />
          </div>
        )

      break

      case 'kanban':

      element = (
        <div>

          <KanbanView />

        </div>
      )

      break;

      default:
        element =  (
          <div className='body-pane-dashboard'>
             <FeedView />
             <DashboardView />
          </div>
        )
    }

     return element
  }
  
    
  useEffect(()=>{
    setPageEl(renderMenuPage())
  },[navigation])
  
  return (
   <div id='main-conatiner' className='main-conatiner w-[100%]'>

    <table>
      <tbody>
      <tr>
        <td> <div className='left-pane'>
       <SideNavigation changePage = {changePage}/>

    </div></td>

    <td>
    <div className='body-pane'>
       
       {pageEl}
        
      </div>
    </td>
      </tr>
      </tbody>
    </table>

   


     


   </div>
  );
}
