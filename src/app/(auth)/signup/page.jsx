'use client';
import { SignInForm } from "@/components/auth/signin-form";
import { SignUpForm } from "@/components/auth/signup-form";
import { Logo } from "@/components/ui/logo";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
    

    return (
        <div className="flex h-min-full w-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="flex min-h-full flex-col items-center w- justify-center py-12 sm:px-6 lg:px-8 bg-black border-2 rounded-md border-white border-radius-2xl">
                <header>
                    <Logo size={400} />
                </header>
                <h2 className="text-3xl mt-8 flex justify-items-start text-white mr-56 pl-8">Cadastre-se</h2>

                <SignUpForm />

                
            </div>
        </div>
    );
}