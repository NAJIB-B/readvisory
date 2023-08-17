'use client';
import Image from "next/legacy/image"
import BgUrl from "../../public/images/unsplash_RFDP7_80v5A.png"
import call from "../../public/images/Phone Calling Rounded.png"
import location from "../../public/images/Map Point.png"
import mail from "../../public/images/Mailbox.png"
import letter from "../../public/images/Letter.png"
import link from "../../public/images/link.png"
import insta from "../../public/images/Vector (13).png"
import face from "../../public/images/Facebook logo.png"
import icon366 from "../../public/images/Group 80366.png"
import icon from "../../public/images/Group 80368.png"
import { Text } from "./Text";

export const Footer =()=>{
    return(
        <div className="p-14 bg-thindark-black mt-1-">
            <div className="grid grid-flow-row-dense lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-4 mb-8">
                <div className="col-span-2">
                    <div 
                        style={{backgroundImage: `url("${BgUrl.src}")`}}
                        className="footer-img rounded-xl border-dark-moderate px-5 pt-12 h-full relative"
                    >
                        <div className="absolute w-2 link-icon h-2 mb-4">
                            <Image
                                src={link}
                                alt="object not found"
                                layout="fill"
                                objectFit="cover"
                                placeholder="blur"
                            />
                        </div>
                        <div className="relative w-8 h-8 mb-6">
                            <Image
                                src={icon}
                                alt="object not found"
                                layout="fill"
                                objectFit="cover"
                                placeholder="blur"
                            />
                        </div>
                        <div className="xs:w-full sm:w-full md:w-2/3 lg:w-2/3 mb-5">
                            <span className="text-4xl font-bold text-white">Allow Us bring your <span className="text-4xl font-bold c-gold mb-5">dreams to Life</span></span>
                        </div>
                    </div>
                </div>
                <div className="xs:col-span-2 xxs:col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1">
                    <div className="px-4 rounded-xl bg-light-black pb-8 pt-12 xs:w-full sm:w-full">
                        {
                            [
                                {
                                    icon:call,
                                    text:"+234 - 90995000"
                                },{
                                    icon:location,
                                    text:"No. 40, Lusaka Street, Wuse - Abuja"
                                },{
                                    icon:letter,
                                    text:"enquiries@readvisory.ng"
                                },{
                                    icon:mail,
                                    text:"P.O Box 5192, Central Post Office, Area 10, Garki - Abuja"
                                }
                            ].map((info,index)=>{
                                const{
                                    icon,
                                    text
                                }=info;
                                return(
                                    <div 
                                        key={index}
                                        className="flex items-center mb-6"
                                    >
                                        <div className="me-2 relative w-4 h-4">
                                            <Image
                                                src={icon}
                                                alt="object not found"
                                                layout="fill"
                                                objectFit="cover"
                                                placeholder="blur"
                                            />
                                        </div>
                                        <div>
                                            <Text
                                                style="text-xs c-gold"
                                                value={text}
                                            />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <hr className="hr-footer mb-3"/>
            <div className="flex flex-wrap justify-between pt-6">
                <div className="flex mb-2">
                    <div 
                        className="flex me-3"
                    >  
                        <span className="w-4 h-4 me-1 relative">
                            <Image
                                src={icon}
                                alt="object not found"
                                layout="fill"
                                objectFit="cover"
                                placeholder="blur"
                            />
                        </span>
                        <span className="font-extrabold text-xs c-top-black">readvisory.ng</span>
                    </div>
                    <div 
                        className="relative w-6 h-6 me-3"
                    >  
                        <Image
                            src={insta}
                            alt="object not found"
                            layout="fill"
                            objectFit="cover"
                            placeholder="blur"
                        />
                    </div>
                    <div 
                        className="relative w-6 h-6"
                    >  
                        <Image
                            src={face}
                            alt="object not found"
                            layout="fill"
                            objectFit="cover"
                            placeholder="blur"
                        />
                    </div>
                </div>
                <div className="relative">
                    <Text
                        style="text-xs c-top-black text-center"
                        value="© 2023 readvisory.ng"
                    />
                </div>
                <div className="flex items-center">
                    <div className="me-1 w-12 h-12 relative">
                        <Image
                            src={icon366}
                            alt="object not found"
                            layout="fill"
                            objectFit="cover"
                            placeholder="blur"
                        />
                    </div>
                    <div>
                        <Text   
                            style="text-xs c-top-black"
                            value="Need Help? Call Us Now"
                        />
                        <Text   
                            style="text-xs c-top-black"
                            value="+234 - 90995000"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}