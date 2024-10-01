'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";

export const SignUpForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // router.replace('/home')
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
           

            <div className="rounded-lg p-8 flex flex-col items-center min-w-[400px]">

                <Input type="email"
                    placeholder="Digite seu Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <Input type="password"
                    placeholder="Digite sua Senha"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                   <Input type="password"
                    placeholder="Confirme sua Senha"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />


                {/* <div className="flex mt-4 space-x-14 bg-red-50">
                    <div>
                        <input type="checkbox" name="remember" id="remember" />
                        <label className="text-white ml-2" htmlFor="remember">Lembrar de mim</label>
                    </div>
                    <div>
                        <Link href={"/(auth)/forgot"} className="text-white ml-2"> Esqueceu sua senha?</Link>
                    </div>
                </div> */}
                <button
                    type="submit"
                    className=" text-white w-4/5 mt-8 h-11 bg-[#367AFF] border-none outline-none rounded-lg shadow-md cursor-pointer text-lg font-bold" >
                    Cadastrar
                </button>
            </div>
        </form>
    )
}