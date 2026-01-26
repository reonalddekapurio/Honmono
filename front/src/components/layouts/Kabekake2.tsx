import Link from "next/link";

export function Kabekake2() {
    return (
        <div className="relative flex justify-center my-8">
        {/* 左の棒 */}
        <div className="absolute -top-4 left-1/2 w-17 h-[2px] z-10 bg-black origin-right -translate-x-full -rotate-12"/>

        {/* 右の棒 */}
        <div className=" absolute -top-4 left-1/2 w-17 h-[2px] z-10 bg-black origin-left rotate-12"/>

        {/* ピン */}
        <div className="absolute -top-4 w-3 h-3 bg-black rounded-full z-10" />

        {/* 本体 */}
        <div className="bg-gray-300 px-6 py-2 z-0 rounded-md text-sm font-medium text-black">
            　　急上昇　　
        </div>
        </div>
    );
}
