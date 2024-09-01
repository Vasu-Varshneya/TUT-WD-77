import React, { ReactNode } from 'react'
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import Steps from '@/components/ui/Steps'
const layout = ({children}:{children:ReactNode}) => {
  return (
    <MaxWidthWrapper className='flex-1 flex flex-col'>
      <Steps/>
      {children}
    </MaxWidthWrapper>
  )
}

export default layout
