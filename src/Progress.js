


export default function Progress(){
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-9/12">
            <div className=" h-14 p-3 text-lg font-medium border-box border-b-2 bg-white">
                    <h2 className=" float-right mx-12">PROGRESS</h2>
            </div>
            <div>
                <h3 className=" px-6 py-6 text-gray-700">Headings must have content and the content must be accessible by a screen reader</h3>
            </div>
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Quiz category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Review
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Score
                        </th>
                       
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b hover:bg-gray-600 hover:text-white">
                        <th scope="row" className="px-6 py-4 font-medium hover:bg-gray-600 hover:text-white">
                            Week three questions
                        </th>
                        <td className="px-6 py-4">
                            25/08/2030
                        </td>
                        <td className="px-6 py-4">
                            Fair
                        </td>
                        <td className="px-6 py-4">
                            49%
                        </td>
                        {/* <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
                        </td> */}
                    </tr>
                    <tr className="bg-white border-b hover:bg-gray-600 hover:text-white">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap hover:bg-gray-600 hover:text-white">
                            Random  questions
                        </th>
                        <td className="px-6 py-4">
                            25/08/2030
                        </td>
                        <td className="px-6 py-4">
                            Excellent
                        </td>
                        <td className="px-6 py-4">
                            99%
                        </td>
                        {/* <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td> */}
                    </tr>
                    <tr className="bg-white  hover:bg-gray-600 hover:text-white">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap hover:bg-gray-600 hover:text-white">
                            Random questions
                        </th>
                        <td className="px-6 py-4">
                            25/08/2030
                        </td>
                        <td className="px-6 py-4">
                            Good
                        </td>
                        <td className="px-6 py-4">
                            79%
                        </td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    )
}