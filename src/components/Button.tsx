import type { ButtonType } from "../type/type";

export default function Button({buttonText,bgColor,textColor}:ButtonType) {
  return (
    <button className={`${bgColor || "bg-blue-500"} ${textColor || "text-white"} px-4 py-2 rounded-md`}>
        {buttonText}
      </button>
  )
}
