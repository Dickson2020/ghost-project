"use client"

import './components/style.css'
import SideNavigation from './components/sidebar'
import DashboardView from './components/pages/dashboard';
import FeedView from './components/pages/feed';

export default function Home() {

  
  return (
   <div className='main-conatiner w-[100%]'>

    <table>
      <tbody>
      <tr>
        <td> <div className='left-pane'>
       <SideNavigation />

    </div></td>

    <td>
    <div className='body-pane'>
        <FeedView />
        <DashboardView />
        
      </div>
    </td>
      </tr>
      </tbody>
    </table>

   


     


   </div>
  );
}
