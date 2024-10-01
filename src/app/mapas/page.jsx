'use client'
import { Logo } from "@/components/ui/logo";
import { MapButton } from "@/components/ui/mapButton";
import Link from "next/link";

const SelectMapa = () => {



    return (
        <div className="flex h-min-full w-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="flex min-h-full flex-col items-center w- justify-center py-12 sm:px-6 lg:px-8 bg-black border-2 rounded-md border-white border-radius-2xl">
                <header>
                    <Logo size={400} />
                </header>
                <h2 className="text-3xl mt-8 flex justify-items-start text-white ">Selecione o Mapa</h2>

                <div className='flex flex-row justify-between align-center gap-10 mt-5'>
                   <MapButton text="Mapa 1" />
                   <MapButton text="Mapa 2" />
                </div>


            </div>
        </div>
    );
}

export default SelectMapa;