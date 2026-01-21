
import { BottomNav } from "@/components/layouts/BottomNav"
import { ProfileUi } from "@/components/layouts/Profile"

export default function Profile() {
    return (
        <div className="flex items-start justify-center w-full h-screen pt-10">
        <ProfileUi />
        <BottomNav />
        </div>
    )
}