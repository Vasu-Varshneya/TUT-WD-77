import { ArrowRight, Check, Star } from "lucide-react";
import Image from "next/image";
import Phone from "./components/Phone";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import { Icons } from "./components/Icons";
import { Reviews } from "./components/Reviews";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="bg-slate-50 p-4">

      <section>
        <MaxWidthWrapper className='pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52'>
          <div className="flex flex-col items-center lg:m-auto ">
            <div className="absolute pt-10 mx:auto px-4 mt-5 lg:mt-16">
              <h1 className="text-5xl md:text-6xl lg:7xl tracking-tight relative !leading-tight w-fit p-2 ">
                Your Image on a <span className="font-bold text-white bg-green-500"> Custom </span>Phone Case
              </h1>
              <p className="flex items-center justify-center mx:auto font-bold p-5">Case Cobra allows you to protect your memories and not just your phone.Capture your own memory by using one of our phone cases.</p>
              <ul className="flex flex-col items-center font-medium">
                <div className="space-y-2">
                  <li className="flex gap-2.5 ">
                    <Check classname="h-5 w-5 shrink-0" />
                    High Quality, Durable Material</li>
                  <li className="flex gap-2.5 ">
                    <Check classname="h-5 text-green-500 w-5 shrink-0" />
                    5 year print guarantee</li>
                  <li className="flex gap-2.5 ">
                    <Check classname="h-5 text-green-600 w-5 shrink-0" />
                    Modern Iphone models supported </li>
                </div>
              </ul>
              <div className="flex justify-center items-center sm:items-start py-5 ">
                <img className=" rounded-md" width={20} src="/user.avif" alt="" />
                <img className=" rounded-md" width={20} src="/user1.avif" alt="" />
                <img className=" rounded-md" width={20} src="/user2.avif" alt="" />
                <img className=" rounded-md" width={30} height={100} src="/user3.avif" alt="" />
                <img className=" rounded-md" width={20} src="/user4.avif" alt="" />
              </div>
              <div className="m-auto">
                <div className=" flex items-center justify-center sm:items-start ">
                  <Star className="w-5 fill-green-600" />
                  <Star className="w-5 fill-green-600" />
                  <Star className="w-5 fill-green-600" />
                  <Star className="w-5 fill-green-600" />
                  <Star className="w-5 fill-green-600" />
                </div>
                <p className=" flex justify-center gap-2">
                  <span className="font-semibold">1,250 </span> happy customers</p>
              </div>
            </div>
          </div>
          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit ">
            <div className="relative md:max-w-xl">
              <img src="/snake.png" className="absolute -left-12 -mt-36 md:my-20 md:-mt-36  lg:-left-96 w-20 lg:-mt-14 select-none xl-block " width={60} alt="" />
              <Phone className="w-64" imgSrc={'/user4.avif'} />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      {/*value proposition section */}
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32" >
          <div className="flex lg:flex-row items-center gap-4 sm:gap-6 ">
            <h1 className="font-bold md:text-6xl text-5xl text-center order-1 !leading-tight lg:mx-auto ">What Our {' '} <span className="relative px-2 ">Customers <Icons.underline /> </span>{' '}say</h1>
            <img src="/snake.png" className="order-0  w-24 lg:order-2" alt="" />
          </div>
          <div className="mx-auto grid grid-cols-1 max-w-2xl px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex justify-center p-5 gap-0.5 mb-2">
                <Star className="fill-green-600 text-green-600 w-5" />
                <Star className="fill-green-600 text-green-600 w-5" />
                <Star className="fill-green-600 text-green-600 w-5" />
                <Star className="fill-green-600 text-green-600 w-5" />
                <Star className="fill-green-600 text-green-600 w-5" />
              </div>
              <p>"The case feels durable and I even got a compliment on the design. Had the case for two and a half months now and <span className="bg-slate-800 text-white p-0.5">the image is super clear </span>on the case I had before, the image started fading into yellow-ish color after couple weeks. Love it" </p>

            </div>
            <div className="flex gap-4 mt-2 ">
              <img className="object-cover " src="/user5.webp" alt="" width={30} />
              <p className="p-2">Jonathan</p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 max-w-2xl px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex justify-center p-5 gap-0.5 mb-2">
                <Star className="fill-green-600 text-green-600 w-5" />
                <Star className="fill-green-600 text-green-600 w-5" />
                <Star className="fill-green-600 text-green-600 w-5" />
                <Star className="fill-green-600 text-green-600 w-5" />
                <Star className="fill-green-600 text-green-600 w-5" />
              </div>
              <p>"The quality of the custom case is so high that when I put my phone together with my keys in the pocket <span className="bg-slate-800 text-white p-0.5">it never gets a scratch</span> and never gets damaged."</p>

            </div>
            <div className="flex gap-4 mt-2 ">
              <img className="object-cover " src="/user6.webp" alt="" width={30} />
              <p className="p-2">Mira</p>
            </div>
          </div>
        </MaxWidthWrapper>
        <div className="pt-16">
          <Reviews />
        </div>
      </section>
      <section>
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h1 className="font-bold md:text-6xl text-5xl text-center order-1 !leading-tight lg:mx-auto ">Upload your photo and {' '} <span className="bg-green-600 text-white relative px-2 ">get your own case. </span>{' '}</h1>
            </div>
          </div>
          <div className="px-6 max-w-6xl mx-auto">
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
              <img src="/arrow.png" className="absolute z-10 left-1/2 md:top-1/2 rotate-90 md:rotate-0 -translate-x-1/2 -translate-y-1/2 top-[25rem]" />
              <div className='relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl'>
                <img
                  src='/horse_phone.jpg'
                  className='rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full'
                />
              </div>
              <Phone className="w-60" imgSrc='/horse_phone.jpg' />
            </div>
          </div>
          <ul className="flex flex-col items-center font-medium">
                <div className="space-y-2">
                  <li className="flex gap-2.5 ">
                    <Check classname="h-5 w-5 shrink-0" />
                    High Quality, Durable Material</li>
                  <li className="flex gap-2.5 ">
                    <Check classname="h-5 text-green-500 w-5 shrink-0" />
                    5 year print guarantee</li>
                  <li className="flex gap-2.5 ">
                    <Check classname="h-5 text-green-600 w-5 shrink-0" />
                    Modern Iphone models supported </li>
                  <li className="flex gap-2.5 ">
                    <Check classname="h-5 text-green-600 w-5 shrink-0" />
                    Wireless Charging Compatible </li>  
                </div>
              </ul>
              <div className="flex justify-center pt-4">
                <Link href="/configurator/upload" className={buttonVariants({
                  size:'sm',
                  className:'mx-auto mt-8 py-5'
                })}>
                   Create your own case now <ArrowRight />
                </Link>
              </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
