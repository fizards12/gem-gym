import { Spinner } from '@material-tailwind/react'
import React from 'react'

function Loading() {
  return (
    <div className='h-screen flex items-center justify-center'>
      <Spinner color='orange' className='w-7 h-7'/>
    </div>
  )
}

export default Loading