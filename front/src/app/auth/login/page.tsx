import {TextForm} from "@/components/layouts/TextForm"
import { AuthButton } from "@/components/layouts"

export default function Login() {
    return (
        <div className="flex flex-col items-center justify-start w-full h-screen pt-30">
            <div className="flex flex-col gap-4 w-75 h-auto mb-26">
                <p className="text-xl font-md text-black mb-12">ホンモノにログイン</p>
                <TextForm label="メールアドレス" />
                <TextForm label="パスワード" />
            </div>
            <AuthButton  label="ログイン" link="/" />
        </div>
    )
}