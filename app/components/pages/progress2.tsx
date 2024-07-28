import './progress.css'
import { FaCircle, FaCircleCheck, FaCircleDot } from "react-icons/fa6";


export default function CustomProgressBar2(){

    return(
        <div className='progress-bar-container2'>
            <div className='progress-tint2'>

            </div>
            <div className='tint-details'>
                <p className='tint-details-text'>Agree 3</p>
                <FaCircleDot className='tint-details-icon2'/>
            </div>

        </div>
    )
}