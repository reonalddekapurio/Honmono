
import { BottomNav } from "@/components/layouts/BottomNav"
import { ProfileNav } from "@/components/elements/ProfileNav"

export default function Profile() {
    return (
        <div className="flex flex-col items-center">
        <div className="w-[353px] h-auto bg-[url('/img/newspaper.svg')] bg-center bg-cover shadow-2xl">
            <ProfileNav />
        </div>
        <BottomNav />
        </div>
    )
}