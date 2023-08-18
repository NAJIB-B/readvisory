'use client';
import { Text } from "./Text";
import { Footer } from "./footer";

export const SubRouteLayout =({children,title,bgUrl})=>{
    return(
        <div>
            <div
                style={{
                    backgroundImage: `url(${bgUrl.src})`,
                    width: '100%',
                    height: '100%',
                }}
                className="px-20 pt-36 pb-20 w-full border BgImage"
            >
                <Text
                    style="my-10 text-2xl  text-center border-black text-white font-bold"
                    value={title}
                />

            </div>
            <div>
                {children}
            </div>
            <Footer/>
        </div>
    )
}