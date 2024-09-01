'use client'
import React, { useState, useTransition } from 'react'
import { useToast } from '@/components/ui/use-toast'
import { cn } from '@/lib/utils'
import DropZone, { FileRejection } from 'react-dropzone'
import { Image, Loader2, MousePointerSquareDashed } from 'lucide-react'
import { Progress } from '@radix-ui/react-progress'
import { useUploadThing } from '@/lib/uploadthing'
import { useRouter } from 'next/navigation'
const page = () => {
  const {toast} = useToast()
  const [isDragOver, setDragOver] = useState<boolean>(false);
  const [uploadProgress,setUploadProgress] = useState<number>(0)
  const router = useRouter()
  const {startUpload, isUploading } = useUploadThing('imageUploader',{
    onClientUploadComplete:([data])=>{
      const configId = data.serverData.configId
      startTransition(()=>{
        router.push(`/configurator/design?id=${configId}`)
      })
    },
    onUploadProgress(p){
      setUploadProgress(p);
    }
  })
  const onDropRejected = (rejectedfiles:FileRejection[]) => {
    const [file] = rejectedfiles
    setDragOver(false);
    toast({
      title:`${file.file.type} is not supported`,
      description:`Please use JPG,JPEG or PNG format.`,
      variant:'destructive'
    })
  }

  const onDropAccepted = (acceptedFiles:File[]) => {
    startUpload(acceptedFiles,{configId:undefined})
    setDragOver(false);
  }
  // const isUploading=true;
  const [isPending,startTransition] = useTransition()
  return (
    <div className={cn('relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center', {
      'bg-blue-900/10 ring-blue-900/25 ': isDragOver,
    })}>
      <div className='relative flex flex-1 flex-col items-center justify-center w-full'>
        <DropZone onDropRejected={onDropRejected}
          onDropAccepted={onDropAccepted}
          accept={{
            'image.png': ['.png'],
            'image.jpeg': ['.jpeg'],
            'image/jpg': ['.jpg'],
          }}
          onDragEnter={() => setDragOver(true)}
          onDragLeave={() => setDragOver(false)}>
          {({ getRootProps, getInputProps }) => (
            <div
              className='h-full w-full flex-1 flex flex-col items-center justify-center'
              {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragOver?(<MousePointerSquareDashed className="h-6 w-6 text-zinc-500 mb-2" />)
              : isUploading || isPending ?(
                <Loader2 className="animate-spin h-6 w-6 mb-2 text-zinc-500"/>
              ) :(
                <Image className="h-6 w-6 text-zinc-500 mb-2 "/>
              )}
              <div className='flex justify-center items-center '>
              {isUploading ? (
                  <div className='flex flex-col items-center'>
                    <p>Uploading...</p>
                    <Progress
                      className='mt-2 w-40 h-2 bg-gray-300'
                    />
                  </div>
                ) : isPending ? (
                  <div className='flex flex-col items-center'>
                    <p>Redirecting, please wait...</p>
                  </div>
                ) : isDragOver ? (
                  <p>
                    <span className='font-semibold'>Drop file</span> to upload
                  </p>
                ) : (
                  <p>
                    <span className='font-semibold'>Click to upload</span> or
                    drag and drop
                  </p>
                )}
              </div>
              {isPending? null :(
                <p className='text-xs text-zinc-400'>JPG,JPEG,PNG</p>
              ) }
            </div>
          )}
        </DropZone>
      </div>

    </div>
  )
}

export default page
