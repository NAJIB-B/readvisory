'use client';
import Image from "next/legacy/image";
import { Text } from "../Text";
import { LinedInfo } from "./LinedInfo";
import plan from "../../../public/images/Group 80401.png"
import scout from "../../../public/images/Group 80392.png"
import nego from "../../../public/images/Group 80394.png"
import doc from "../../../public/images/Group 80395.png"
import perf from "../../../public/images/Group 80396.png"
import frame from "../../../public/images/Frame 1311.png"


export const Acquisition =()=>{
    return(
        <div>
            <div className="py-20 bg-light-cream">
                <Text
                    value="ACQUISITION, INVESTMENT & REVIEWS"
                    style="text-center font-semibold text-2xl mb-6 mx-3"
                />
                <div className="flex flex-wrap justify-between mb-8 px-14">
                    <div className="p-8 md:w-1/2 xl:w-1/2 xl:w-1/2 sm:w-full xs:w-full xxs:w-full bg-light-grey xl:rounded-l-xl md:rounded-l-xl xl:rounded-l-xl xl:rounded-tr-none md:rounded-tr-none xl:rounded-tr-none sm:rounded-t-xl xs:rounded-t-xl xxs:rounded-t-xl">
                        <LinedInfo
                            num={1}
                            title="Acquisitions Advise"
                            info="Property acquisition can be tricky and
                            time consuming, we simplifying the
                            process for clients by breaking it into
                            5 simple steps."
                        />
                    </div>
                    <div className="p-8 grid xs:grid-cols-1 xxs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-2 bg-dark-moderate md:w-1/2 xl:w-1/2 xl:w-1/2 sm:w-full xs:w-full xxs:w-full xl:rounded-r-xl md:rounded-r-xl sm:rounded-b-xl xs:rounded-b-xl xxs:rounded-b-xl xl:rounded-r-xl xl:rounded-bl-none md:rounded-bl-none xl:rounded-bl-none">
                        {[
                            {
                                icon:plan,
                                text:"Planning"
                            },{
                                icon:scout,
                                text:"Scouting"
                            },{
                                icon:nego,
                                text:"Negotiation"
                            },{
                                icon:doc,
                                text:"Documentation"
                            },{
                                icon:perf,
                                text:"Perfection"
                            }
                        ].map((info,index)=>{
                            const{
                                icon,text
                            }=info;
                            return(
                                <div 
                                    key={index}
                                    className="flex items-center mb-6"
                                >
                                    <div className="relative w-14 h-14 me-2">
                                        <Image
                                            src={icon}
                                            alt="object not found"
                                            layout="fill"
                                            objectFit="cover"
                                            placeholder="blur"
                                        />
                                    </div>
                                    <span >
                                        <Text 
                                            style="text-sm leading-7 xs:w-full sm:w-full md:w-1/2 xl:w-1/2 c-top-black"
                                            value={text}
                                        />
                                    </span>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
                <div className="flex flex-wrap justify-between px-6 m-auto mb-10">
                        {
                            [
                                {
                                    num:2,
                                    title:"Mortgage/Property Financing",
                                    text:"We review available options and provideb independent advice on sustainable financing opportunities."
                                },{
                                    num:3,
                                    title:"Strategic Property Review",
                                    text:"We can undertake a strategic review of client Real Estate assets alongside a comprehensive review of the market realities and propose a suitable asset utilization plan."
                                },{
                                    num:4,
                                    title:"Opinions of Value",
                                    text:"We provide objective reports outlining current market realities in relation to a wide range of property types, for accounting, personal, acquisition or disposal purposes."
                                },{
                                    num:5,
                                    title:"Investment Advice",
                                    text:"We find the right real estate investment opportunities and robustly manage these investments to deliver maximum returns for clients."
                                }
                            ].map((info,index)=>{
                                const{
                                    num,title,text
                                }=info;
                                return(
                                    <div 
                                        className="xl:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full xs:w-ful mb-6"
                                        key={index}
                                    >  
                                        <LinedInfo
                                            num={num}
                                            title={title}
                                            info={text}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="flex flex-wrap justify-between px-14 py-20 bg-dark-moderate m-1-">
                    <div className="xl:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2">
                        <Text 
                            style="text-4xl font-bold xs:w-full sm:w-full md:w-3/4 xl:w-3/4 c-gold mb-5"
                            value="Asset Transfer/
                            Estate Planning"
                        />
                        <Text 
                            style="text-sm text-white font-bold mb-3"
                            value="Sale Coordination"
                        />
                        <Text 
                            style="text-xs font-semibold text-white mb-2"
                            value="Looking to sell a property?"
                        />
                        <Text 
                            style="text-xs leading-5 c-top-black xl:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4"
                            value="We organise sales of single properties or portfolios of properties, our services also include guidance on sale and leaseback, due- diligence and suitable agency arrangements."
                        />
                        <Text 
                            style="text-white text-sm font-bold mb-2"
                            value="Estate Planning"
                        />
                        <Text 
                            style="text-xs leading-5 c-top-black xl:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4"
                            value="Real estate investment can continue to yield results long after the lifetime of the initial investor, therefore they are very popular generational gifts. At R.E Advisory, we guide clients through the legal and regulatory framework and provide a platform for the safe transfer of these gift as intended."
                        />
                    </div>
                    <div className="xl:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full xs:w-full xxs:w-full relative sm:h-96 xxs:h-96 xs:h-96 md:h-auto xl:h-auto xl:h-auto">
                        <Image
                            src={frame}
                            alt="object not found"
                            layout="fill"
                            objectFit="cover"
                            placeholder="blur"
                            className="rounded-xl"
                        />
                    </div>
                </div>
            <div className="p-8 bg-thindark-black">
            </div>
        </div>
    )
}