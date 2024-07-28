import { Card } from '@/components/ui/card';
import './create-team.css'
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




export default function BillingView(){

    return(
        <div className='create-team-container'>

            <div className='create-team-view1'>
                <p className='create-team-view1-text'>Billing</p>

            </div>

          

        </div>
    )
}