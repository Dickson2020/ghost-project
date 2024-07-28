import './progress.css'
import { FaCircleCheck } from "react-icons/fa6";


export default function CustomProgressBar(){

    return(
        <div className='progress-bar-container'>
            <div className='progress-tint'>

            </div>
            <div className='tint-details'>
                <p className='tint-details-text'>Agree 3</p>
                <FaCircleCheck className='tint-details-icon'/>
            </div>

        </div>
    )
}