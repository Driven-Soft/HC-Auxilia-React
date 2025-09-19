import type { ReactNode } from "react"
import { useNavigate } from "react-router-dom"
 
interface WrapperProps {
  children: ReactNode
  className?: string
  to?: string
  onClick?: () => void
  type?: string
}
 
const ButtonWrapper = ({ onClick, children, className = "", to }: WrapperProps) => {
  const navigate = useNavigate()
 
  const handleClick = () => {
    if (to) {
      navigate(to)
    }
    if (onClick) {
      onClick()
    }
  }
 
  return (
    <div className="flex justify-center pb-4">
      <button
        onClick={handleClick}
        className={`
          bg-gradient-to-r from-[#3F58FF] to-[#0022FF]
          text-white font-semibold px-6 py-3 rounded-md
          text-center
          transition-all duration-200 ease-in-out
          hover:brightness-125 hover:scale-110
          shadow-[0_6px_25px_rgba(0,0,0,0.45)]
          ${className}
        `}
      >
        {children}
      </button>
    </div>
  )
}
 
export default ButtonWrapper;