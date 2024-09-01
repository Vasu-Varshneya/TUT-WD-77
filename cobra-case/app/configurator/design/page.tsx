import { notFound } from 'next/navigation'
import React from 'react'
import { db } from '@/db'
import DesignConfigurator from './DesignConfigurator'
interface PageProps{
    searchParams:{
      [key:string]: string | string[] | undefined
    }
}
// server side component rendering 
// it is being run on server side so it is async in nature.
const Page =async ({searchParams}:PageProps) => {
  const {id} = searchParams
  if(!id || typeof id!=='string'){
    return notFound()
  }
  const configuration = await db.configuration.findUnique({
    where:{id},
  })
  if(!configuration){
    return notFound();
  }
  const {width,height,imageUrl}  = configuration
  return (
    <DesignConfigurator configId={configuration.id}  imageUrl={imageUrl} imagedimensions={{
      width,
      height
    }}/>
  )
}
export default Page
