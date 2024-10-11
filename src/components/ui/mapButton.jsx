
'use client'

import { useRouter } from "next/navigation"

export const MapButton = ({ text, onClick }) => {

 const router = useRouter();


    // const handleClick = () => {
    //     if (text === "Mapa 1") {
    //         console.log("Mapa 1")
    //         router.push('/matriz/[id]', `/matriz/${id}` )
    //     } else if (text === "Mapa 2") {
    //         console.log("Mapa 2")
    //         router.push('/matriz/2')
    //     }
    // }

    return (
        <div 
    
        className=' cursor-pointer  flex flex-col items-center w- justify-center py-12 sm:px-6 lg:px-8 bg-slate-500 border-2 rounded-md border-white border-radius-2xl'
           onClick={onClick}
           >
            {text}
        </div>
    )
}