'use client'

import { RadioGroup,Label,Radio } from '@headlessui/react';
import HandleComponent from '@/app/components/HandleComponent'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { ScrollArea } from '@/components/ui/scroll-area'
import NextImage from 'next/image'
import { Rnd } from 'react-rnd'
import { cn } from '@/lib/utils'
import { useRef, useState } from 'react'
import { COLORS, MODELS } from '@/app/validators/option-validatior'
interface DesignconfigProps {
    configId: string,
    imageUrl: string,
    imagedimensions: { width: number, height: number }
}

const DesignConfigurator = ({ configId, imageUrl, imagedimensions }: DesignconfigProps) => {
    const [options, setoptions] = useState<{
        color: (typeof COLORS)[number]
        model:(typeof MODELS)[number]
    }>({
        color: COLORS[0],
        model:MODELS[0]
    })
    return (
        <div className='relative mt-20  grid grid-cols-1 pb-20'>
            <div className='relative h-[37.5rem]  overflow-hidden w-[80%] flex  justify-center items-center col-span-2 border-2 border-dashed border-zinc-400 focus:ring-gray-200 p-20 left-4'>
                <div className='relative w-60 bg-opacity-50 pointer-events-none aspect-[896/1251]'>
                    <AspectRatio ratio={896 / 1831} className='pointer-events-none z-50 '>
                        <NextImage src="/phone-template-dark-edges.png" fill className='' alt='' />
                    </AspectRatio>
                    <div className='absolute z-40 inset-0 right-[3px] top-px bottom-px left-[3px] rounded-[32px] shadow-[0_0_0_99999px_rgba(229,231,235,0.6)] ' />
                    <div className={cn('absolute z-40 inset-0  bottom-px  rounded-[32px]', `bg-${options.color.tw} -z-10`)} />
                </div>
                <Rnd default={{
                    x: 150,
                    y: 205,
                    width: imagedimensions.width / 4,
                    height: imagedimensions.height / 4,
                }}
                    resizeHandleComponent={{
                        bottomLeft: <HandleComponent />,
                        bottomRight: <HandleComponent />,
                        topRight: <HandleComponent />,
                        topLeft: <HandleComponent />
                    }}
                    lockAspectRatio>
                    <div className='relative h-full w-full'>
                        <NextImage alt='image' src={imageUrl} fill />
                    </div>
                </Rnd>

            </div>
            <div className='h-[37.5rem] w-full flex flex-col col-span-ful lg:col-span-1'>
                <ScrollArea className='relative flex-1 overflow-auto '>
                    <div className='px-8 pb-12 pt-8'>
                        <h2 className='tracking-tight font-bold text-3xl'>
                            Customize your case
                        </h2>
                    </div>
                    <div className='h-px bg-zinc-400 w-full ' />
                    <div className='relative h-full flex flex-col mt-4'>
                        <div className='flex flex-col gap-6'>
                            <RadioGroup  value={options.color} onChange={(val) => {
                                setoptions((prev) => ({
                                    ...prev,
                                    color:val,
                                }))
                            }}>
                                <Label>Color:{options.color.label}</Label>
                                <div className='mt-3 flex items-center space-x-3'>
                                    {COLORS.map((color) => (
                                        <Radio
                                            key={color.label}
                                            value={color}
                                            className={({  checked }) =>
                                                cn(
                                                    'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 active:ring-0 focus:ring-0 active:outline-none focus:outline-none border-2 border-transparent',
                                                    {
                                                        [`border-${color.tw}`]: checked,
                                                    }
                                                )
                                            }>
                                            <span
                                                className={cn(
                                                    `bg-${color.tw}`,
                                                    'h-8 w-8 rounded-full border border-black border-opacity-10'
                                                )}
                                            />
                                        </Radio>
                                    ))}
                                </div>
                            </RadioGroup>
                            <RadioGroup  >

                            </RadioGroup>
                        </div>

                    </div>

                </ScrollArea>
            </div>
        </div>
    )
}

export default DesignConfigurator
