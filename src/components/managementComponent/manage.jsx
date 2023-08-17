import { Text } from "../Text";

export const ManagementComponent =()=>{
    return(
        <div className="py-20 bg-light-cream px-14">
            {
                [
                    {
                        heading:"Asset Management/Agency",
                        info:"Asset management is about vision; the ability to see a building’s potential, and to understand what’s needed to achieve it. At R. E Advisory, we offer our clients a platform based on extensive knowledge and industry expertise which allows them the opportunity to develop their vision for the property while also helping them to generate maximum return."
                    },
                    {
                        heading:"Facility Management",
                        info:"Buildings regardless of purpose or age require care and attention. We provide a wide arrange of facility management services, targeted at maintaining the integrity, comfort and suitability for occupant use, guaranteeing maximum returns to property owners while representing value for money to occupants."
                    },
                    {
                        heading:"Lease/Tenancy Management",
                        info:"At R.E Advisory we understand that Rent should count as passive income, to help our clients achieve dream, we deploy our experience to manage leasehold properties, thereby providing hassle-free returns for the property owner, while guaranteeing the occupier a peaceful enjoyment of the property."
                    },
                    {
                        heading:"Transaction Documentation",
                        info:"We prepare comprehensive transaction documentation, including offer letters, negotiation instruments, tenancy and lease agreements, sales agreements, deeds, wills and codicils and other instruments of transfer with the aim of securing the clients’ interests."
                    },
                ].map((manageinfo,index)=>{
                    const{
                        heading,
                        info
                    }=manageinfo;
                    return(
                        <div 
                            key={index}
                            className="mb-8"
                        >
                            <Text
                                style="font-bold text-2xl text-black mb-4"
                                value={heading}
                            />
                            <Text
                                style="text-sm text-black leading-6"
                                value={info}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}