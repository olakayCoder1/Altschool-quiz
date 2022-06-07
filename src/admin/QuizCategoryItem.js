import React from 'react'

export default function QuizCategoryItem(props) {
  return (
    <tr className="bg-white border-b hover:bg-gray-600 hover:text-white">
        <th scope="row" className="px-6 py-4 font-medium hover:bg-gray-600 hover:text-white">
            {props.username} 
        </th>
        <th scope="row" className="px-6 py-4 font-medium hover:bg-gray-600 hover:text-white">
            {props.email}
        </th> 
        <td className="px-6 py-4">
            {props.track}
        </td>
        <td className="px-6 py-4 text-red-400 cursor-pointer">
            Delete
        </td>
    </tr>
  )
}
