import backimage from './coding2.jpg'

export default function Home(){
    return (
        <div className='pt-16 mx-auto w-9/12'>
            <form className=' flex flex-row justify-evenly px-16 bg-gray-300 p-6'>
                <select className=' border-2 border-gray-800 px-10 py-3 rounded-lg text-lg bg-gray-500 text-white font-medium hover:bg-gray-700 hover:text-white cursor-pointer      '>
                    <option value="random">RANDOM</option>
                    <option value="one">WEEK ONE</option>
                    <option value="two">WEEK TWO</option>
                    <option value="three">WEEK THREE</option>
                    <option value="four">WEEK FOUR</option>
                </select>
                <select className=' border-2 border-gray-800 px-10 py-3 rounded-lg text-lg bg-gray-500 text-white font-medium hover:bg-gray-700 hover:text-white cursor-pointer'>
                    <option value={20}>20 QUESTIONS</option>
                    <option value={50}>50 QUESTIONS</option>
                    <option value={100}>100 QUESTIONS</option>
                </select>
                <input type="submit" value="START QUIZ" className=' border-2 border-green-600 bg-green-600 px-10 py-3 rounded-lg text-lg font-medium text-white cursor-pointer hover:bg-green-700' />
            </form>
        </div>
    )
}