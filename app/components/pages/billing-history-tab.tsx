
import { ScrollArea } from '@radix-ui/react-scroll-area'
import './billing-history-tab.css'

export default function BillingHistoryTab(){

    return(
        <div className='billing-history-container'> 

         <div className='p-[0px]'>
         <div className='billing-history-view-cols'>  
         <span className='billing-history-view-cols-text'>Invoice</span>
         <span  className='billing-history-view-cols-text '>Status</span>
         <span  className='billing-history-view-cols-text ml-[-12px]'>Costs</span>
         <span  className='billing-history-view-cols-text'>Last editted</span>
            
         </div>
         </div>

         <ScrollArea className='billing-history-scrollview'>
            <div className='billing-history-scrollview-inner'>

                <div className='billing-history-item'>
                    <span className='history-label-text ml-[10px]'>CEA68068 0010</span>
                    <div className='mt-[-10px]'>
                    <span className='history-label-text billing-history-item-paid-label ml-[-6px] text-white'>Paid</span>
                    </div>
                    
                    <span className='history-label-text ml-[15px]'>$98</span>
                    <span className='history-label-text ml-[19px]'>April 21, 2024, 09:30AM</span>
                </div>

                <div className='billing-history-item'>
                    <span className='history-label-text ml-[10px]'>CEA68068 0010</span>
                    <div className='mt-[-10px]'>
                    <span className='history-label-text billing-history-item-paid-label ml-[-6px] text-white'>Paid</span>
                    </div>
                    
                    <span className='history-label-text ml-[15px]'>$98</span>
                    <span className='history-label-text ml-[19px]'>April 21, 2024, 09:30AM</span>
                </div>

                <div className='billing-history-item'>
                    <span className='history-label-text ml-[10px]'>CEA68068 0010</span>
                    <div className='mt-[-10px]'>
                    <span className='history-label-text billing-history-item-paid-label billing-history-item-unpaid-label ml-[-6px] text-white'>Unpaid</span>
                    </div>
                    
                    <span className='history-label-text ml-[15px]'>$98</span>
                    <span className='history-label-text ml-[19px]'>April 21, 2024, 09:30AM</span>
                </div>
            </div>
         </ScrollArea>
        </div>
    )
}