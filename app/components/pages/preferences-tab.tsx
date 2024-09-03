import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import './preferences-tab.css'
import { Card } from "@/components/ui/card";
import { FaSort } from "react-icons/fa6";

export default function PreferenceTab(){
    return(
        <div className='preference-container'>
            <ScrollArea className='w-[100%] h-[00%]'>
            <div className="p-[10px]">
                <div className='preference-container-scroll'>

                    <div className='normal-form-group'>
                        <p className="pr-form-title">Company name</p>
                        <p className="mt-[6px] pr-form-description">If specified, this will appear on invoices instead of your 
                        organisations name</p>
                        <Input className="pr-form-input ml-[-4px] mt-[6px] form-input focus:outline-none w-[100%] h-[30px]" placeholder="Aaraav Sareen"/>
                    </div>

                    <div className='normal-form-group mt-[10px]'>
                        <p className="pr-form-title">Purchase order number</p>
                        <p className="mt-[6px] pr-form-description">This will be displayed on future invoices.</p>
                        <Input className="pr-form-input ml-[-4px] mt-[6px] form-input focus:outline-none w-[100%] h-[30px]" placeholder="1234"/>
                    </div>

                    <div className='normal-form-group mt-[10px]'>
                        <p className="pr-form-title">Billing email</p>
                        <p className="mt-[6px] pr-form-description">Invoices and other billing notifications will be sent here</p>
                        <Input className="pr-form-input ml-[-4px] mt-[6px] form-input focus:outline-none w-[100%] h-[30px]" placeholder="johndoe@gmail.com"/>
                    </div>

                    <div className='normal-form-group mt-[10px]'>
                        <p className="pr-form-title">Primary physical address</p>
                        <p className="mt-[6px] pr-form-description">Physical address of your company</p>

                        <Card className='w-[100%] h-[40px] pr-form-selection'>
                            <span className="pr-form-selection-title">Country</span>
                            <FaSort className="pr-form-selection-icon"/>
                        </Card>

                        <Input className="pr-form-input ml-[-4px] mt-[6px] form-input focus:outline-none w-[100%] h-[30px]" placeholder="Address"/>

                        <div className='grid grid-rows-1 gap-10'>
                        <Input className="pr-form-input ml-[-4px] mt-[6px] form-input focus:outline-none w-[100%] h-[30px]" placeholder="City"/>
                        <Input className="pr-form-input ml-[-4px] mt-[6px] form-input focus:outline-none w-[100%] h-[30px]" placeholder="Postal code"/>

                        </div>
                        <Input className="pr-form-input ml-[-4px] mt-[6px] form-input focus:outline-none w-[100%] h-[30px]" placeholder=" State, country, province or region"/>

                    </div>

                    <div className='normal-form-group mt-[10px]'>
                        <p className="pr-form-title">Business tax ID                       
                        </p>
                        <p className="mt-[6px] pr-form-description">
                        If you are a business tax registrant, please enter your business tax ID here.
                        </p>
                        <div className='pr-form-business-tax gap-10'>
                        <Card className='w-[100%] h-[40px] pr-form-selection'>
                            <span className="pr-form-selection-title">Select type</span>
                            <FaSort className="pr-form-selection-icon"/>
                        </Card>
                    <Input className="pr-form-input ml-[-4px] mt-[6px] form-input focus:outline-none w-[100%] h-[30px]" placeholder="00 12345678"/>

                        </div>  
                        </div>

                </div>
            </div>
           
            </ScrollArea>
        </div>
    )
}