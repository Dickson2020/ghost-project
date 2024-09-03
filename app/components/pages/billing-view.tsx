import { Card } from '@/components/ui/card';
import './billing-view.css'
import { GoTriangleLeft } from "react-icons/go";
import { LuSlidersHorizontal } from "react-icons/lu";
import { FaFilter } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import { AvatarFallback, AvatarImage, Avatar } from "@/components/ui/avatar";
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
import { useState } from 'react';
import PaymentMethodsTab from './payment-methods-tab';
import BillingHistoryTab from './billing-history-tab';
import PreferenceTab from './preferences-tab';




export default function BillingView(){

    const [tabView, setTabView] = useState('overview')
    const [tabComponent,setTabComponent] = useState(<div />)

    function changeTab(tab_name: string){
        setTabView(tab_name)
        switch(tab_name){
            case 'overview':
            setTabComponent(<div />) 
            break

            case 'payment_methods':
                setTabComponent(<PaymentMethodsTab />)
                break
            
            case 'billing_history':
                setTabComponent(<BillingHistoryTab />)
                break

            case 'preferences':
                setTabComponent(<PreferenceTab />)
                break

                
        }
       
    }

   
    return(
        <div className='billing-container'>

            <div className='billing-view-title'>
                <p className='billing-view-title-text p-[10px]'>Billing</p>

                 <div className='billing-view-tab'>

               <div onClick={()=>changeTab('overview')} className={`billing-view-tab-button flex-1 ${ tabView == 'overview' ? 'active-tab' : 'inactive-tab'}`}>
                <p className={`billing-view-tab-title active-tab-title ${ tabView == 'overview' ? 'active-tab-title' : 'inactive-tab-title'}`}>Overview</p>
               </div>


               <div onClick={()=>changeTab('payment_methods')} className={`billing-view-tab-button flex-1 ${ tabView == 'payment_methods' ? 'active-tab' : 'inactive-tab'}`}>
                <p className={`billing-view-tab-title active-tab-title ${ tabView == 'payment_methods' ? 'active-tab-title' : 'inactive-tab-title'}`}>Payment methods</p>
               </div>

               <div onClick={()=>changeTab('billing_history')} className={`billing-view-tab-button flex-1 ${ tabView == 'billing_history' ? 'active-tab' : 'inactive-tab'}`}>
                <p className={`billing-view-tab-title active-tab-title ${ tabView == 'billing_history' ? 'active-tab-title' : 'inactive-tab-title'}`}>Billing history</p>
               </div>

               <div onClick={()=>changeTab('preferences')} className={`billing-view-tab-button flex-1 ${ tabView == 'preferences' ? 'active-tab' : 'inactive-tab'}`}>
                <p className={`billing-view-tab-title active-tab-title ${ tabView == 'preferences' ? 'active-tab-title' : 'inactive-tab-title'}`}>Preferences</p>
               </div>


            </div>
            </div>

          <div className='billing-view-tab-view'>


            {
                tabComponent
            }
            
             </div>

        

        </div>
    )
}