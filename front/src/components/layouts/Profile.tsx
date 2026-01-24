
import Image from "next/image";
import { ProfileNav } from "../elements/ProfileNav";


export function ProfileUi() {
    return (
        <div className="flex flex-col w-[353px] h-auto bg-[url('/img/news-paper/news-paper-type1.svg')] bg-center bg-no-repeat bg-cover">
            <div className="flex flex-col items-center justify-center mb-8 mt-6 gap-2">
                <div className="w-[100px] h-[100px] overflow-hidden rounded-full">
                    <Image 
                        src="/img/dummy-img.svg" 
                        alt="newspaper"
                        width={100} 
                        height={100} 
                        className="w-full h-full object-cover"
                    />
                </div>
                <p>ユーザー名</p>
                <button>プロフィールを編集</button>
            </div>
            <ProfileNav />
        </div>
    )
}