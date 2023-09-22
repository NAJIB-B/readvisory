'use client';
import { useEffect } from "react";
import { QueryForm } from "./queryForm";
  
export const QueryModal =()=>{
    useEffect(() => {
        const init = async () => {
        const { 
            Modal,
            Ripple,
            initTE
        } = await import("tw-elements");
            initTE({ Modal, Ripple });
        };
        init();
      }, []);
    return(
        <div
            data-te-modal-init
            style={{background:"none",marginTop:"3rem"}}
            className="fixed mt-8 left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div
                data-te-modal-dialog-ref
                style={{background:"none"}}
                className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
                <div
                style={{background:"none"}}
                className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                <div className="relative flex-auto p-4" data-te-modal-body-ref>
                    <QueryForm/>
                </div>
                </div>
            </div>
        </div>
    )
}