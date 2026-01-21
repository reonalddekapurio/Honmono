import Image from "next/image";
import Link from "next/link";
import { Newspaper,User} from "../../types/newspaper"; 

interface NewspaperCardProps {
    newspaper: Newspaper;
    user: User;
}

export function ProfileNewspaperCard({ newspaper, user }: NewspaperCardProps) {
    const isLongTitle = newspaper.title.length > 8;
    const displayTitle = isLongTitle 
        ? newspaper.title.substring(0, 8) + "..." 
        : newspaper.title;
    
    const isLongDescription = newspaper.description.length > 20;
    const displayDescription = isLongDescription 
        ? newspaper.description.substring(0, 20) + "......" 
        : newspaper.description;
    
    return (
        <div className="relative flex flex-col align-start justify-center w-[150px] h-[190px] gap-2 bg-[url('/img/newspaper2.svg')] bg-no-repeat bg-center bg-cover shadow-md p-3">
            <div className="flex flex-col align-start justify-center w-full overflow-hidden">
                <Image 
                    src={newspaper.images} 
                    alt="newspaper"
                    width={115} 
                    height={78} 
                    className="w-full h-full object-cover"
                />
            </div>
                <div className="w-[115px]">
                <p className="text-black text-[12px] font-bold">{displayTitle}</p>
                <p className="text-gray text-[8px] font-md">{displayDescription}</p>
                {isLongDescription && (
                    <Link href={`/newspaper/${newspaper.id}`}>
                        <button className="text-red text-[8px] font-bold mt-1 hover:underline">
                            もっとみる 
                        </button>
                    </Link>
                )}
            </div>
            <div className="absolute bottom-4 right-6 flex items-center justify-center w-4 h-4 rounded-full overflow-hidden">
                <Image 
                src={user.icon_url} 
                alt="user-icon"
                width={16} 
                height={16}
                className="w-full h-full object-cover"
                />
            </div>
        </div>
    )
}