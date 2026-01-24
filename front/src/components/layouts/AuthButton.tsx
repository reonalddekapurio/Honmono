import Link from "next/link";

interface AuthButtonProps {
    label: string
    link: string
}

export function AuthButton({label, link}: AuthButtonProps) {
    return (
        <Link href={link}>
            <button className="w-70 h-10 bg-red text-white font-md py-2 px-4 rounded-full">
                <p>{label}</p>
            </button>
        </Link>
    )
}