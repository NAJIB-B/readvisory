import slide1 from '../../../public/images/image 27.png';
import slide2 from '../../../public/images/image 25.png';
import slide3 from '../../../public/images/image 24.png';
import slide4 from '../../../public/images/image 26.png';
import Image from 'next/legacy/image';
import { Text } from '../Text';

export const Blog =()=>{
    return(
        <div className='py-[4rem] px-container-md md:px-container-md lg:px-container-lg xl:px-container-xl grid xs:grid-cols-1 xxs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-14 '>
            {
                [
                    {
                        img:slide1,
                        info:"Firm advocates crowdfunding to meet nation’s housing needs"
                    },{
                        img:slide2,
                        info:"‘Exorbitant planning permit rates could stifle real estate growth’"
                    },{
                        img:slide3,
                        info:"Abuja Estate Firm Plans 500 Housing Units"
                    },{
                        img:slide4,
                        info:"Abuja’s Booming Real Estate Market 2023"
                    }
                ].map((slides,index)=>{
                    const{
                        img,info
                    }=slides;
                    return(
                        <div 
                            key={index}
                            className="mb-0 cursor"
                        >
                            <div className="relative w-full h-[20rem]">
                                <Image
                                    src={img}
                                    alt="object not found"
                                    layout="fill"
                                    objectFit="contain"
                                    placeholder="blur"
                                    className='rounded-lg w-full h-[28rem]'
                                />
                            </div>
                            <div>
                                <Text
                                    style="text-lg text-start text-secondary-8 font-semibold"
                                    value={info}
                                />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}