import { Card } from '@/components/ui/card'
import {TooltipProps} from 'recharts'
import './tool-tip.css'
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent'
const CustomToolTip = ({active, payload, label}: TooltipProps<ValueType, NameType>) =>{


    if(active && payload && label){
        return(
            <Card className='custom-tooltip'>

                <p className='tooltip-date'>{payload[0].payload.value.date}</p>
               
                <div className='grid-tooltip-item'>
                    <div className='colored-label-icon-1'/>
                    <p className='label-text'>{payload[0].payload.value.started}</p>
                </div>
                <div className='grid-tooltip-item'>
                    <div className='colored-label-icon-2'/>
                    <p className='label-text'>{payload[0].payload.value.complete}</p>
                </div>
                <div className='grid-tooltip-item'>
                    <div className='colored-label-icon-3'/>
                    <p className='label-text'>{payload[0].payload.value.estimate}</p>
                </div>
                
                </Card>
        )
    }

    return null
}

export default CustomToolTip