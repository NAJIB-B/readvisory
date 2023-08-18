'use client';
import { useForm } from "react-hook-form"
import Button from "../button/button";
import { InputField } from "../custormFormField";
import { Text } from "../Text";

export const Talk =()=>{
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const SubmitHandler =({
        age,
        objectives,
        Purpose,
        location,
        property,
        roomNo,
        mode,
        range,
        email,
        income
    })=>{
            console.log(
                age,
                objectives,
                Purpose,
                location,
                property,
                roomNo,
                mode,
                range,
                email,
                income
            )
    }

    return(
        <form 
            onSubmit={handleSubmit(SubmitHandler)}
            className="py-10 formBg px-4"
        >
            <div className="m-auto xxs:w-full xs:w-full sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4 m-auto grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-28 m-auto">
                {
                    [
                        {
                            title:"email",
                            labelName:"Email Address",
                            selectArrayOption:null,
                            type:"email",
                            error:errors.email,
                            placeHold:"enter email",
                            subTitle:null

                        },
                        {
                            title:"age",
                            labelName:"Age",
                            selectArrayOption:[1,2,3,4,5,6,7,8,9],
                            type:"select",
                            error:errors.age,
                            placeHold:"select age",
                            subTitle:null

                        },
                        {
                            title:"objectives",
                            labelName:"Objectives",
                            selectArrayOption:["objectives1","objectives2"],
                            type:"select",
                            placeHold:"select objectives",
                            error:errors.objectives,
                            subTitle:null

                        },
                        {
                            title:"Purpose",
                            labelName:"purpose",
                            selectArrayOption:["purpose1","purpose2"],
                            type:"select",
                            error:errors.Purpose,
                            placeHold:"select purpose",
                            subTitle:null

                        },
                        {
                            title:"location",
                            labelName:"Location",
                            selectArrayOption:["location1","location2"],
                            type:"select",
                            error:errors.location,
                            subTitle:null,
                            placeHold:"select location",

                        },
                        {
                            title:"property",
                            labelName:"Property Type",
                            selectArrayOption:["type1","type2"],
                            type:"select",
                            error:errors.property,
                            placeHold:"select property",
                            subTitle:null

                        },

                        {
                            title:"roomNo",
                            labelName:"No.of rooms/ Total Sqm.",
                            selectArrayOption:null,
                            type:"number",
                            placeHold:"enter room No",
                            error:errors.roomNo,
                            subTitle:"(Residential and small business space)"

                        },
                        {
                            title:"mode",
                            labelName:"Mode of Acquisition",
                            selectArrayOption:["mode1","mode2"],
                            type:"select",
                            placeHold:"select mode",
                            error:errors.mode,
                            subTitle:null

                        },
                        {
                            title:"range",
                            labelName:"Price Range",
                            selectArrayOption:[1,2,3,4,5,6,7,8,9],
                            placeHold:"select range",
                            type:"select",
                            error:errors.range,
                            subTitle:null

                        },{
                            title:"income",
                            labelName:"Monthly Net income",
                            selectArrayOption:[1,2,3,4,5,6,7,8,9],
                            type:"select",
                            placeHold:"select income",
                            error:errors.range,
                            subTitle:"(for calculation of marriage repayment)"

                        }
                    ].map((option,index)=>{
                        const{
                            title,
                            labelName,
                            subTitle,
                            placeHold,
                            selectArrayOption,
                            type,
                            error
                        }=option
                        switch(type){
                            case "select":
                            return(
                                <div
                                    className="flex w-full mb-3"
                                    key={index}
                                >
                                    <div className="me-3">
                                        <Text
                                            style="text-sm text-black"
                                            value={index+1}
                                        />
                                    </div>
                                    <div className="w-full">
                                        <InputField
                                            name={title}
                                            type={type}
                                            subTitle={subTitle}
                                            placeHolder={placeHold}
                                            labelTitle={labelName}
                                            labelStyle="text-sm font-bold text-start c-mid-grey mb-3"
                                            selectArrayOption={selectArrayOption}
                                            register={register}
                                            errors={error}
                                            style="w-full text-start rounded-md p-3 text-xs border"
                                        />
                                    </div>
                                </div>
                            )
                            break;
                            default :
                            return(
                                <div 
                                    className="flex w-full mb-3"
                                    key={index}
                                >
                                    <div className="me-3">
                                        <Text
                                            style="text-sm text-black"
                                            value={index+1}
                                        />
                                    </div>
                                    <div className="w-full">
                                        <InputField
                                            name={title}
                                            subTitle={subTitle}
                                            placeHolder={placeHold}
                                            type={type}
                                            labelTitle={labelName}
                                            labelStyle="text-sm font-bold text-start c-mid-grey mb-3"
                                            register={register}
                                            errors={errors}
                                            style="w-full text-start rounded-md p-3 text-xs border"
                                        />
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div className="w-fit-content m-auto my-8">
                <Button
                    buttonStyle="px-12 py-2 m-auto bg-dark-moderate"
                    textStyle="text-white"
                    text="submit"
                />
            </div>
        </form>
    )
}