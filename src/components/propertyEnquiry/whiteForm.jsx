'use client';
import { useForm } from "react-hook-form"
import { InputField } from "../custormFormField";
import { Text } from "../Text";
import Button from "../button/button";

export const WhiteForm =()=>{
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const SubmitHandler =({
        firstName,
        lastName,
        email,
        phoneNumber,
        message
    })=>{
            console.log(
                firstName,
                message,
                lastName,
                email,
                phoneNumber
            )
    }
    return(
        <form
            className="py-12 lg:px-10 md:px-10 sm:px-2 xs:px-2 xxs:px-2 xl:px-10"
            onSubmit={handleSubmit(SubmitHandler)}
        >
            <div  className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-5">
            {
                    [
                        {
                            title:"firstName",
                            labelName:"Fist Name*",
                            selectArrayOption:null,
                            type:"text",
                            error:errors.firstName,
                            placeHold:"I"
                        },
                        {
                            title:"lastName",
                            labelName:"Last Name*",
                            selectArrayOption:null,
                            type:"text",
                            placeHold:"Doe",
                            error:errors.lastName
                        },
                        {
                            title:"email",
                            labelName:"Email",
                            selectArrayOption:null,
                            type:"email",
                            error:errors.email,
                            placeHold:""
                        },
                        {
                            title:"phoneNumber",
                            labelName:"Phone Number",
                            selectArrayOption:null,
                            type:"number",
                            error:errors.phoneNumber,
                            placeHold:"+234 676 898 787"
                        }
                    ].map((option,index)=>{
                        const{
                            title,
                            labelName,
                            placeHold,
                            selectArrayOption,
                            type,
                            error
                        }=option
                        switch(type){
                            case "select":
                            return(
                                <InputField
                                    key={index}
                                    name={title}
                                    type={type}
                                    placeHolder={placeHold}
                                    labelTitle={labelName}
                                    labelStyle="text-sm font-bold text-start mb-1"
                                    selectArrayOption={selectArrayOption}
                                    register={register}
                                    errors={error}
                                    style="w-full text-start p-3 text-xs border-bottom"
                                />
                            )
                            break;
                            default :
                            return(
                                <InputField
                                    key={index}
                                    name={title}
                                    placeHolder={placeHold}
                                    type={type}
                                    labelTitle={labelName}
                                    labelStyle="text-sm font-bold text-start mb-1"
                                    register={register}
                                    errors={errors}
                                    style="w-full text-start p-3 text-xs border-bottom"
                                />
                            )
                        }
                    })
                }
            </div>
            <div>
                <Text
                    style="font-semibold text-sm mb-4"
                    value="Select Subject?"
                />
                <div className="flex mb-5 flex-wrap">
                    {
                        ["Resedential","commercial","Property type","General EnQuiry"].map((rad,index)=>{
                            return(
                                <InputField
                                    key={index}
                                    name="radname"
                                    type="radio"
                                    labelTitle={rad}
                                    labelStyle="text-xs font-bold text-start text-black mb-1 me-8"
                                    register={register}
                                    errors={errors.radname}
                                    style="text-start p-3 text-xs me-2"
                                />
                            )
                        })
                    }
                </div>
                <div className="mb-5">
                    <InputField
                        name="messageText"
                        type="text"
                        placeHolder="Write your message"
                        labelTitle="Message"
                        labelStyle="text-sm font-bold text-start text-black mb-1"
                        register={register}
                        errors={errors.messageText}
                        style="text-start p-3 text-xs border-bottom me-4"
                    />
                </div>
            </div>
            <div>
                <Button
                    buttonStyle="px-12 py-2 m-auto bg-dark-moderate"
                    textStyle="text-white"
                    text="submit"
                />
            </div>
        </form>
    )
}