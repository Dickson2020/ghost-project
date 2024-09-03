import './members.css'
import { AvatarFallback, AvatarImage, Avatar } from "@/components/ui/avatar";
import { useEffect } from 'react';
import { FaHeart, FaPlus } from 'react-icons/fa6';
import { IoEllipsisHorizontal } from "react-icons/io5";
import { IoMdArrowDropright } from "react-icons/io";
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { FaSliders } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";
import { RiQuestionFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";



export default function MembersPage(){

    useEffect(()=>{
        const container_element = document.getElementById('members-page-container') as HTMLDivElement
        if(container_element){
         container_element.style.height = window.innerHeight - 2 + 'px'
        
        }

    
    },[])


    return(
        <div className='members-page-container' id='members-page-container'>

            <div className='members-page-container-first-view'>
                <div className='members-page-container-first-view-head'>
                    <p className='members-page-container-first-view-head-title'>Members</p>
                </div>

                <div className='members-page-container-first-view-body p-[15px]'>
                <div className='item-group-2'>
                        <div>
                            <div className='coloured-icon-1 mt-[4px]' />
                        </div>

                        <div>
                            <p className='item-group-2-item-name'>Frontend</p>
                        </div>

                        <div className='item-group-2-item-icon-view'>
                            <FaHeart className='w-[7.4px] h-[7.4px] icon-element' />
                        </div>
                    </div>


                    <div className='item-group-1 mt-[20px]'>
                        <div>
                <Avatar className="item-group-1-avatar">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                  
                </Avatar>
                        </div>

                        <div>
                            <p className='item-group-1-item-name'>Sophia Carter</p>
                            <p className='item-group-1-item-email'>sophia@gmail.com</p>
                        </div>

                        <div className='item-group-1-item-icon-view'>
                            <IoEllipsisHorizontal className='w-[8px] h-[8px] icon-element' />
                        </div>
                    </div>


                    <div className='item-group-1 mt-[10px]'>
                        <div>
                <Avatar className="item-group-1-avatar">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                  
                </Avatar>
                        </div>

                        <div>
                            <p className='item-group-1-item-name'>Olivia Patel</p>
                            <p className='item-group-1-item-email'>oliviapatel@gmail.com</p>
                        </div>

                        <div className='item-group-1-item-icon-view'>
                            <IoEllipsisHorizontal className='w-[8px] h-[8px] icon-element' />
                        </div>
                    </div>


                    <div className='item-group-1 mt-[10px]'>
                        <div>
                <Avatar className="item-group-1-avatar">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                  
                </Avatar>
                        </div>

                        <div>
                            <p className='item-group-1-item-name'>Liam Rodiguez</p>
                            <p className='item-group-1-item-email'>liam@gmail.com</p>
                        </div>

                        <div className='item-group-1-item-icon-view'>
                            <IoEllipsisHorizontal className='w-[8px] h-[8px] icon-element' />
                        </div>
                    </div>

                    <div className='item-group-2 mt-[10px]'>
                        <div>
                            <div className='coloured-icon-2 mt-[4px]' />
                        </div>

                        <div>
                            <p className='item-group-2-item-name'>Backend</p>
                        </div>

                        <div className='item-group-2-item-icon-view'>
                            <IoMdArrowDropright className='w-[7.4px] h-[7.4px] icon-element' />
                        </div>
                    </div>


                    <div className='item-group-2 mt-[10px]'>
                        <div>
                            <div className='coloured-icon-3 mt-[4px]' />
                        </div>

                        <div>
                            <p className='item-group-2-item-name'>Cybersec</p>
                        </div>

                        <div className='item-group-2-item-icon-view'>
                            <IoMdArrowDropright className='w-[7.4px] h-[7.4px] icon-element' />
                        </div>
                    </div>

                    <div className='item-group-2 mt-[10px]'>
                        <div>
                        <FaPlus className='w-[7.4px] h-[7.4px] icon-element' />
                        </div>

                        <div>
                            <p className='item-group-2-item-name text-opacity'>Add team</p>
                        </div>

                        <div className='item-group-2-item-icon-view'>
                            <IoMdArrowDropright className='w-[7.4px] h-[7.4px] icon-element' />
                        </div>
                    </div>





                </div>
            </div>

            <div className='members-page-container-second-view'>
            <div className='members-page-container-second-view-head'>
                    <p className='members-page-container-second-view-head-title'>Add developers</p>
                </div>

                <div className='members-page-container-second-view-body p-[15px]'>
                    <div className='horizontal-form-group'>
                        <Card className='card-element'>
                          <div className='selector-label-gray'>
                            <p className='selector-label-gray-text'>Teams</p>
                          </div>

                          <div className='selector-label-white'>
                            <p className='selector-label-white-text'>Developers</p>
                          </div>

                        </Card>

                        <div>
                            <Input className='search-developers-input focus:outline-none' placeholder='Search developers by name, profession, description'/>
                        </div>

                        <div className='icons-view-right-elements'>
                            <FaSliders className='ml[15px] icons-element'/>
                            <FaFilter className='ml-[15-px] icons-element'/>
                        </div>
                    </div>

                    <div className='developer-cards p-[10px]'>
                        <div className='developer-cards-row'>
                            <Card className='developer-cards-detail'>
                               <div className='headview'>
                                <div className='avatar-overviews'>
                                    <Avatar className='avatar-overviews-avatar'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <Avatar className='avatar-overviews-avatar ml-[-10px]'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />                  <AvatarFallback>CN</AvatarFallback>
                                        <AvatarFallback>CN</AvatarFallback>

                                    </Avatar>
                                    <Avatar className='avatar-overviews-avatar ml-[-10px]'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>

                                    </Avatar>
                                    <Avatar className='avatar-overviews-avatar ml-[-10px]'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </div>
                                <Card className='click-to-assign-card'>
                                    <p className='click-to-assign-card-text'>Click to assign</p>
                                </Card>
                               </div>

                               <div className='bodyview'>
                               <p className='developer-cards-detail-title'>Wormbo Swapfadden</p>
                                <p className='developer-cards-detail-description'>
                                Our developer team is a skilled and passionate group dedicated to delivering high-quality software solutions
                                </p>
                               </div>

                               <div className='footerview'>
                                <div className='footerview-left'>
                                    <div className='footerview-left-text'>$1,223</div>
                                    <div className='footerview-right-icon'>
                                        <RiQuestionFill className='footerview-left-icon'/>
                                    </div>
                                </div>

                                <div className='footerview-right-rating'>
                                <FaStar className='footerview-right-rating-icon active-rating'/>
                                <FaStar className='footerview-right-rating-icon active-rating'/>
                                <FaStar className='footerview-right-rating-icon active-rating'/>
                                <FaStar className='footerview-right-rating-icon active-rating'/>
                                <FaStar className='footerview-right-rating-icon inactive-rating'/>
                                </div>
                               </div>
                            </Card>

                            <Card className='developer-cards-detail'>
                               <div className='headview'>
                                <div className='avatar-overviews'>
                                    <Avatar className='avatar-overviews-avatar'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <Avatar className='avatar-overviews-avatar ml-[-10px]'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />                  <AvatarFallback>CN</AvatarFallback>
                                        <AvatarFallback>CN</AvatarFallback>

                                    </Avatar>
                                    <Avatar className='avatar-overviews-avatar ml-[-10px]'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>

                                    </Avatar>
                                    <Avatar className='avatar-overviews-avatar ml-[-10px]'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </div>
                                <Card className='click-to-assign-card'>
                                    <p className='click-to-assign-card-text'>Click to assign</p>
                                </Card>
                               </div>

                               <div className='bodyview'>
                               <p className='developer-cards-detail-title'>Wormbo Swapfadden</p>
                                <p className='developer-cards-detail-description'>
                                Our developer team is a skilled and passionate group dedicated to delivering high-quality software solutions
                                </p>
                               </div>

                               <div className='footerview'>
                                <div className='footerview-left'>
                                    <div className='footerview-left-text'>$1,223</div>
                                    <div className='footerview-right-icon'>
                                        <RiQuestionFill className='footerview-left-icon'/>
                                    </div>
                                </div>

                                <div className='footerview-right-rating'>
                                <FaStar className='footerview-right-rating-icon active-rating'/>
                                <FaStar className='footerview-right-rating-icon active-rating'/>
                                <FaStar className='footerview-right-rating-icon active-rating'/>
                                <FaStar className='footerview-right-rating-icon active-rating'/>
                                <FaStar className='footerview-right-rating-icon inactive-rating'/>
                                </div>
                               </div>
                            </Card>


                            <Card className='developer-cards-detail'>
                               <div className='headview'>
                                <div className='avatar-overviews'>
                                    <Avatar className='avatar-overviews-avatar'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <Avatar className='avatar-overviews-avatar ml-[-10px]'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />                  <AvatarFallback>CN</AvatarFallback>
                                        <AvatarFallback>CN</AvatarFallback>

                                    </Avatar>
                                    <Avatar className='avatar-overviews-avatar ml-[-10px]'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>

                                    </Avatar>
                                    <Avatar className='avatar-overviews-avatar ml-[-10px]'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </div>
                                <Card className='click-to-assign-card'>
                                    <p className='click-to-assign-card-text'>Click to assign</p>
                                </Card>
                               </div>

                               <div className='bodyview'>
                               <p className='developer-cards-detail-title'>Wormbo Swapfadden</p>
                                <p className='developer-cards-detail-description'>
                                Our developer team is a skilled and passionate group dedicated to delivering high-quality software solutions
                                </p>
                               </div>

                               <div className='footerview'>
                                <div className='footerview-left'>
                                    <div className='footerview-left-text'>$1,223</div>
                                    <div className='footerview-right-icon'>
                                        <RiQuestionFill className='footerview-left-icon'/>
                                    </div>
                                </div>

                                <div className='footerview-right-rating'>
                                <FaStar className='footerview-right-rating-icon active-rating'/>
                                <FaStar className='footerview-right-rating-icon active-rating'/>
                                <FaStar className='footerview-right-rating-icon active-rating'/>
                                <FaStar className='footerview-right-rating-icon active-rating'/>
                                <FaStar className='footerview-right-rating-icon inactive-rating'/>
                                </div>
                               </div>
                            </Card>
                        </div>

                        <div className='developer-cards-row'>
                            <Card className='developer-cards-detail'>
                               <div className='headview'>
                                <div className='avatar-overviews'>
                                    <Avatar className='avatar-overviews-avatar'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <Avatar className='avatar-overviews-avatar ml-[-10px]'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />                  <AvatarFallback>CN</AvatarFallback>
                                        <AvatarFallback>CN</AvatarFallback>

                                    </Avatar>
                                    <Avatar className='avatar-overviews-avatar ml-[-10px]'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>

                                    </Avatar>
                                    <Avatar className='avatar-overviews-avatar ml-[-10px]'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </div>
                                <Card className='click-to-assign-card'>
                                    <p className='click-to-assign-card-text'>Click to assign</p>
                                </Card>
                               </div>

                               <div className='bodyview'>
                               <p className='developer-cards-detail-title'>Wormbo Swapfadden</p>
                                <p className='developer-cards-detail-description'>
                                Our developer team is a skilled and passionate group dedicated to delivering high-quality software solutions
                                </p>
                               </div>

                               <div className='footerview'>
                                <div className='footerview-left'>
                                    <div className='footerview-left-text'>$1,223</div>
                                    <div className='footerview-right-icon'>
                                        <RiQuestionFill className='footerview-left-icon'/>
                                    </div>
                                </div>

                                <div className='footerview-right-rating'>
                                <FaStar className='footerview-right-rating-icon active-rating'/>
                                <FaStar className='footerview-right-rating-icon active-rating'/>
                                <FaStar className='footerview-right-rating-icon active-rating'/>
                                <FaStar className='footerview-right-rating-icon active-rating'/>
                                <FaStar className='footerview-right-rating-icon inactive-rating'/>
                                </div>
                               </div>
                            </Card>

                            <Card className='developer-cards-detail'>
                               <div className='headview'>
                                <div className='avatar-overviews'>
                                    <Avatar className='avatar-overviews-avatar'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <Avatar className='avatar-overviews-avatar ml-[-10px]'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />                  <AvatarFallback>CN</AvatarFallback>
                                        <AvatarFallback>CN</AvatarFallback>

                                    </Avatar>
                                    <Avatar className='avatar-overviews-avatar ml-[-10px]'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>

                                    </Avatar>
                                    <Avatar className='avatar-overviews-avatar ml-[-10px]'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </div>
                                <Card className='click-to-assign-card'>
                                    <p className='click-to-assign-card-text'>Click to assign</p>
                                </Card>
                               </div>

                               <div className='bodyview'>
                               <p className='developer-cards-detail-title'>Wormbo Swapfadden</p>
                                <p className='developer-cards-detail-description'>
                                Our developer team is a skilled and passionate group dedicated to delivering high-quality software solutions
                                </p>
                               </div>

                               <div className='footerview'>
                                <div className='footerview-left'>
                                    <div className='footerview-left-text'>$1,223</div>
                                    <div className='footerview-right-icon'>
                                        <RiQuestionFill className='footerview-left-icon'/>
                                    </div>
                                </div>

                                <div className='footerview-right-rating'>
                                <FaStar className='footerview-right-rating-icon active-rating'/>
                                <FaStar className='footerview-right-rating-icon active-rating'/>
                                <FaStar className='footerview-right-rating-icon active-rating'/>
                                <FaStar className='footerview-right-rating-icon active-rating'/>
                                <FaStar className='footerview-right-rating-icon inactive-rating'/>
                                </div>
                               </div>
                            </Card>


                            <Card className='developer-cards-detail'>
                               <div className='headview'>
                                <div className='avatar-overviews'>
                                    <Avatar className='avatar-overviews-avatar'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <Avatar className='avatar-overviews-avatar ml-[-10px]'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />                  <AvatarFallback>CN</AvatarFallback>
                                        <AvatarFallback>CN</AvatarFallback>

                                    </Avatar>
                                    <Avatar className='avatar-overviews-avatar ml-[-10px]'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>

                                    </Avatar>
                                    <Avatar className='avatar-overviews-avatar ml-[-10px]'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </div>
                                <Card className='click-to-assign-card'>
                                    <p className='click-to-assign-card-text'>Click to assign</p>
                                </Card>
                               </div>

                               <div className='bodyview'>
                               <p className='developer-cards-detail-title'>Wormbo Swapfadden</p>
                                <p className='developer-cards-detail-description'>
                                Our developer team is a skilled and passionate group dedicated to delivering high-quality software solutions
                                </p>
                               </div>

                               <div className='footerview'>
                                <div className='footerview-left'>
                                    <div className='footerview-left-text'>$1,223</div>
                                    <div className='footerview-right-icon'>
                                        <RiQuestionFill className='footerview-left-icon'/>
                                    </div>
                                </div>

                                <div className='footerview-right-rating'>
                                <FaStar className='footerview-right-rating-icon active-rating'/>
                                <FaStar className='footerview-right-rating-icon active-rating'/>
                                <FaStar className='footerview-right-rating-icon active-rating'/>
                                <FaStar className='footerview-right-rating-icon active-rating'/>
                                <FaStar className='footerview-right-rating-icon inactive-rating'/>
                                </div>
                               </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}