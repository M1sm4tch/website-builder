import React from 'react'
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline'
import CurrentDate from './CurrentDate'

interface props {
    className: String
}
const LastUpdated = ({className}:props) => {
  return (
    <div className={`flex flex-row items-center ${className} sm:flex-wrap sm:justify-between h-5 `}>
      <CheckCircleIcon className="h-full" />
      <p>Last Updated -</p>
      <CurrentDate />
      <InformationCircleIcon className="h-full" />
      <p>Advertising Disclosure</p>
    </div>
  )
}

export default LastUpdated