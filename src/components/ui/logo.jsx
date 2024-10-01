import Image from "next/image"
import Link from "next/link"

export const Logo = ({size}) => {
    return (
        <Link href="/">
            <Image
                src="/logo_triunfo.png"
                alt="Triunfo Engenharia"
                width={size}
                height={size}
                quality={100}
            />
        </Link> 
    )
}