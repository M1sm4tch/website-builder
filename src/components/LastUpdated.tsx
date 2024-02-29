import React from 'react'
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline'
import CurrentDate from './CurrentDate'

interface props {
    className: String
}
const LastUpdated = ({className}:props) => {
  return (
    <div className={`flex flex-row items-center ${className}`}>
        <CheckCircleIcon className='h-6'/>
        <p>Last Updated -</p>
        <CurrentDate />
        <InformationCircleIcon className='h-6'/>
        <p>Advertising Disclosure</p>
    </div>
  )
}

export default LastUpdated