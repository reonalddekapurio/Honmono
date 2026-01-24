import Image from "next/image"

interface Props {
  children: string; // 子要素はテキストのみを受け取るのでstring
  onClick?: () => void;
}

export function ButtonWithBgImage({
  children,
  onClick
}: Props){
  return (
    <button
      onClick={onClick}
      className="relative w-36.75 h-7.75 text-white text-base font-yosugara"
    >
      <Image 
        src="/img/tag/tag-red.svg"
        alt=""
        fill
        className="absolute object-cover"
        priority
      />
      <span className="relative z-10">
        {children}
      </span>
    </button>
  )
}