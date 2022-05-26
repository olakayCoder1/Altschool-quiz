

export default function Nav(){
    return (
        <nav className=" flex flex-col justify-between h-screen w-3/12 bg-gray-700 border-r-2 sticky top-0">
            <div>
                <div className=" h-14 p-3 text-lg font-medium border-box border-b-2 bg-white">
                    <h2>olakayCoder1 Altschool Quiz</h2>
                </div>
                <div className=" w-full">
                    <a href="/home" className=" active:bg-red-400" ><p className=" px-6 py-3 w-full text-base text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer">Home</p></a>
                    <a href="/home" className=" active:bg-red-400"><p className=" px-6 py-3 text-base text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" >Quiz</p></a>
                    <a  href="/progress" className=" active:bg-red-400"><p className=" px-6 py-3 text-base text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer" >Progress</p></a>
                    <a href="/question" className=" active:bg-red-400" ><p className=" px-6 py-3 text-base text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer">Ask question</p></a>
                    <a href="/test" className=" active:bg-red-400"><p className=" px-6 py-3 text-base text-white font-medium hover:bg-white hover:text-gray-700 cursor-pointer">Add question</p></a>
                </div>
            </div>
            <div>
                <p className=" text-xs font-medium text-white py-3 text-center">Copyright @2020 olakayCoder1</p>
            </div>
        </nav>
    )
}