import Image from "next/image"

import { AuthButton } from "@/components/layouts/AuthButton"

export default function First() {
    return (
        
        <div className="flex flex-col pt-30 items-center justify-start h-screen">
            <Image src="/img/honmono-logo.svg" 
            alt="homono-logo" 
            width={239} 
            height={239} 
            className="mb-30"
            />
            <div className="flex flex-col gap-4">
            <AuthButton label="ログイン" link="/login" />
            <p className="text-gray text-center text-xs">または</p>
            <AuthButton label="新規登録" link="/register" />
            </div>
        </div>
    )
}