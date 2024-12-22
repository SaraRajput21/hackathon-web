import { BsSearch } from "react-icons/bs";
import { FaUser , FaRegHeart } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import Wrapper from "@/components/Wrapper";
const SecHeader= () => {
  return (<Wrapper>
    <header className=" mt-2 px-8 ">
        <div className="   sm:block mt-16 h-[95px] bg-white ;">
            <div className="container py-6 sm:flex justify-between items-center">
                <div className="font-bold px-4 text-3xl ml-10 text-center pb-4 sm:pb-0 text-blue-600">
                    MORENT
                </div>
                {/* search bar */}
                <div className="sm:w-[300px] md:w-[40%] relative mr-52">
  <BsSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 text-lg" />
  <HiOutlineDotsVertical className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 text-lg"/>
  <input
    className="border-gray-200 border p-2 pl-10 rounded-xl w-full"
    type="text"
    placeholder="Search here..."
    
  />

</div>

              <div className="hidden lg:flex gap-5 text-gray-500 text-[30px] mr-[-90px]">

              <div className="relative">
              <FaRegHeart />
              <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px]
              text-white grid place-items-center translate-x-1 translate-y-1">0</div>
              </div>

              <div className="relative">
              <IoIosNotifications />
              <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[17px] h-[17px] text-[12px]
              text-white grid place-items-center translate-x-1 translate-y-1">0</div>
              </div>
              <IoMdSettings />
              <FaUser />


              </div>
            </div>
        </div>
        </header>
        </Wrapper>
  )
}

export default SecHeader