import React, { useContext } from 'react'
import { AuthContext } from '../../context/Authenticate';




export default function NavLinksItem(props) {
    const {open} = useContext(AuthContext)
    
  return (
    <a href={props.linkHref} className=" active:bg-red-400">
        <p className=" px-6 py-3 w-full text-base text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer">
            {props.linkImg}{open && <span className=" pl-4 lg:hidden">{props.linkName}</span>}<span className="hidden pl-4 lg:inline-block">{props.linkName}</span>
        </p>
    </a>
  )
}
