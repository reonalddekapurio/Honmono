"use client";

import { useState } from "react";
import {Menu,Heart} from "lucide-react"

export function ProfileNav() {
    const [activeTab, setActiveTab] = useState<"menu" | "heart">("menu");

    return (
        <div className="flex justify-center gap-[153px] w-full border-b border-gray pb-2">
            <button onClick={() => setActiveTab("menu")} className="bg-none border-none cursor-pointer">
                <Menu size={20} className={activeTab === "menu" ? "text-red" : "text-gray"} />
            </button>
            <button onClick={() => setActiveTab("heart")} className="bg-none border-none cursor-pointer">
                <Heart size={20} className={activeTab === "heart" ? "text-red" : "text-gray"} fill={activeTab === "heart" ? "currentColor" : "none"} />
            </button>
        </div>
    )
}