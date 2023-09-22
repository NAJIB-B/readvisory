'use client'
import { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

export const QueryForm =()=>{
    const [suggestion, setSuggestion] = useState([]);
    const[active,setAcive] = useState({
        suggestIndex:0,
        formField:''
    });
    const allsg= ["How to become rich","How to become rich without working","How to become thin without working out","How to become beautifull without makeup"]
    const handleChange =(e)=>{
        setAcive((prev)=>{
            return{
                ...prev,
                formField:e.target.value
            }
        })
        if(e.target.value ==""){
            return setSuggestion(()=>[])
        }
        const available = allsg.filter((sug)=>sug.includes(e.target.value))
        setSuggestion(()=>available)
    }
    return(
        <div className="flex flex-col items-center justify-center p-4">
            <div 
                style={{zIndex:'100',marginTop:"6rem"}}
                className="relative mb-2 rounded flex w-full items-center justify-center w-full bg-white rounded-md p-2">
                {/*search icon*/}
                <span
                    className="me-2 input-group-text flex items-center whitespace-nowrap rounded px-3 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                    id="basic-addon2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                        fillRule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clipRule="evenodd" />
                    </svg>
                </span>
                <div className="relative flex w-full flex-wrap items-stretch">
                    <input
                        type="search" 
                        className="relative m-0 mr-3 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                        placeholder="Search"
                        aria-label="Search"
                        onChange={handleChange}
                        aria-describedby="button-addon2"
                        value={active.formField}
                    />
                    <button
                        className="relative z-[2] rounded-r text-dark px-3 py-2 text-xs font-medium uppercase transition duration-150 ease-in-out "
                        type="button"
                        id="button-addon2"
                        style={{
                            backgroundColor:"#CEA964"
                        }}
                        data-te-ripple-init>
                        Search
                    </button>
                </div>
            </div>
            {
                suggestion.length>0 
                    && <div className="lg:w-3/4 xl:w-3/4 grid xs:w-full xxs:w-full sm:w-full md:w-3/4 xl:w-3/4 p-2 bg-white">
                        {
                            suggestion?.map((suggest,index)=>{
                                return(
                                    <div 
                                        key={index}
                                        onClick={
                                            ()=>{
                                                setAcive({
                                                    suggestIndex:index,
                                                    formField:suggest
                                                })
                                                setSuggestion(()=>[])
                                            }
                                        }
                                        className={`${index == active.suggestIndex?"bg-gold text-white":null} p-3 mb-3 rounded-md flex flex-row align-items-center`}
                                    >
                                        <span className="me-2 text-dark">
                                            <AiOutlineClockCircle/>
                                        </span>
                                        <span className="text-dark text-xs">
                                            {suggest}
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
            }
        </div>
    )
}