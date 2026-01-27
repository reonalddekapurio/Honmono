"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home,ChartNoAxesCombined,CircleUser } from "lucide-react";


export function BottomNav() {
    const pathname = usePathname();
    return (
        <div className="fixed bottom-0 w-full h-17.5 bg-white shadow-2xl">
            <div className="flex w-full h-full">
                <Link href="/" className={`flex items-center justify-center h-full w-1/3 ${pathname === '/' ? 'text-red' : 'text-gray'}`}>
                    <Home size={30} />
                </Link>
                <Link href="/rankings" className={`flex items-center justify-center h-full w-1/3 ${pathname === '/rapidris' ? 'text-red' : 'text-gray'}`}>
                    <ChartNoAxesCombined size={30} />
                </Link>
                <Link href="/profile" className={`flex items-center justify-center h-full w-1/3 ${pathname === '/profile' ? 'text-red' : 'text-gray'}`}>
                    <CircleUser size={30} />
                </Link>
            </div>
        </div>
    )
}