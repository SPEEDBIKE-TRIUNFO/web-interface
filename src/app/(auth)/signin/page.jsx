'use client';
import { SignInForm } from "@/components/auth/signin-form";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";

export default function Page() {
    

    return (
        <div className="flex h-min-full w-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="flex min-h-full flex-col items-center w- justify-center py-12 sm:px-6 lg:px-8 bg-black border-2 rounded-md border-white border-radius-2xl">
                <header>
                    <Logo size={400} />
                </header>
                <h2 className="text-3xl mt-8 flex justify-items-start text-white mr-72">Login</h2>

                <SignInForm />

                <div className="text-white mt-4">
                    <a className="text-gray-400" >Não tem uma conta? </a>
                    <Link href={"/signup"} className="text-[#eee]  text-bold hover:underline font-medium">Cadastre-se</Link>
                </div>
            </div>
        </div>
    );
}