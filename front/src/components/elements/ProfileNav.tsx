"use client";

import { useState } from "react";
import {Menu,Heart} from "lucide-react"
import { ProfileNewspaperCard } from "./ProfileNewspaperCard";
import { Newspaper, User } from "@/types/newspaper";

export function ProfileNav() {
    const [activeTab, setActiveTab] = useState<"menu" | "heart">("menu");

    const mockNewspapers: { newspaper: Newspaper; user: User }[] = [
        {
            newspaper: {
                id: 1,
                title: "朝刊",
                description: "今日の主要なニュース速報。国内外の最新情報を早朝からお伝えします。政治経済から文化スポーツまで幅広くカバー。",
                images: "/img/sample1.jpg",
                likes: 120,
                is_liked: false
            },
            user: {
                id: 1,
                name: "山田太郎",
                icon_url: "/img/icon1.jpg"
            }
        },
        {
            newspaper: {
                id: 2,
                title: "夕刊",
                description: "夕方のニュース特集版。午前から午後にかけての重要なニュースをまとめてお届けします。読者の皆様に最新情報をお伝えするのが使命です。",
                images: "/img/sample2.jpg",
                likes: 85,
                is_liked: false
            },
            user: {
                id: 2,
                name: "鈴木花子",
                icon_url: "/img/icon2.jpg"
            }
        },
        {
            newspaper: {
                id: 3,
                title: "号外",
                description: "速報ニュース。突発的な重要ニュースが発生した際に配信される特別版です。社会に大きな影響を与える情報をいち早くキャッチしてお知らせします。",
                images: "/img/sample3.jpg",
                likes: 200,
                is_liked: false
            },
            user: {
                id: 3,
                name: "佐藤次郎",
                icon_url: "/img/icon3.jpg"
            }
        }
    ];

    return (
        <div className="w-full">
            <div className="flex justify-center gap-38.25 w-full border-b border-gray pb-2">
                <button onClick={() => setActiveTab("menu")} className="bg-none border-none cursor-pointer">
                    <Menu size={20} className={activeTab === "menu" ? "text-red" : "text-gray"} />
                </button>
                <button onClick={() => setActiveTab("heart")} className="bg-none border-none cursor-pointer">
                    <Heart size={20} className={activeTab === "heart" ? "text-red" : "text-gray"} fill={activeTab === "heart" ? "currentColor" : "none"} />
                </button>
            </div>
            <div className="p-4">
                {activeTab === "menu" && (
                    <div className="flex flex-wrap gap-4 justify-center">
                        {mockNewspapers.map((item) => (
                            <ProfileNewspaperCard key={item.newspaper.id} newspaper={item.newspaper} user={item.user} />
                        ))}
                    </div>
                )}
                {activeTab === "heart" && (
                    <div className="flex flex-wrap gap-4 justify-center">
                        {mockNewspapers.slice(0, 2).map((item) => (
                            <ProfileNewspaperCard key={item.newspaper.id} newspaper={item.newspaper} user={item.user} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}