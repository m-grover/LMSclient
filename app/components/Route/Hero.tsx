import Image from "next/image";
import Link from "next/link";
import React,{FC} from "react";
import {BiSearch} from "react-icons/bi";

type Props={};

const Hero: FC<Props>= (props)=>{
    return(
        <div className="w-full 1000px:flex items-center">
            <div className="flex top-[100px] 1000px:top-[unset] 1500px:h-[700px]  1100px:h-[600px] h-[50vh] w-full hero_animation ">
                <div className="1000px:w-[40%] flex 1000px:min-h-screen items-center justify-center pt-[70px] 1000px:pt-[0] z-10">
                    <Image
                    src={require("../../../public/assets/hero.jpg")}
                    alt=""
                    className="object-contain 1100px:max-w-[90%] w-[90%] 1500px:max-w-[85%] h-[auto] z-[10]"
                    />
                </div>
                <div className="1000px:w-[60%] flex flex-col items-center justify-center 1000px:mt-[0px] text-center 1000px:text-left mt-[150px]">
                    <h2 className="dark:text-white text-[#000000c7] text-[30px] px-3 1000px:text-[70px] font-[600] font-Josefin py-2 1000px:leading-[75px] 1500px:[w-60%]">
                    Learn. Engage. Succeed.
                    </h2>
                    <br/>
                    <p className="dark:text-[#edfff4] text-[#000000ac] font-Josefin font-[600] text-[18px] 1500px:!w-[55%] 1100px:!w-[78%]">
                    We have 30k+ Online courses & 100k+ registered students.
                    Embark on your learning journey today at LMS. 
                    Enrich your mind, acquire new skills, and achieve your goals!
                    </p>
                    <br/>
                    <br/>
                    <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] h-[50px] bg-transparent relative">
                        <input 
                        type="search"
                        placeholder="Search Courses..."
                        className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none dark:text-[#ffffffe6] text-[20px] font-[500] font-Josefin"
                        />
                        <div className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#39c1f3] rounded-r-[5px] md:pt-1 md:pl-1 lg:pt-2 lg:pl-2">
                            <BiSearch className="text-white" size={30} />
                        </div>
                    </div>
                    <br />
                    <br/>
                    <div className="1500px:!w-[55%] 1100px:!w-[78&] flex items-center">
                        <Image
                        src={require("../../../public/assets/client-3.jpg")}
                        alt=""
                        className="rounded-full"
                        height={40}
                        />
                        <Image
                        src={require("../../../public/assets/client-2.jpg")}
                        alt=""
                        className="rounded-full ml-[-30px]"
                        height={40}
                        />
                        <Image
                        src={require("../../../public/assets/client-1.jpg")}
                        alt=""
                        className="rounded-full ml-[-20px]"
                        height={40}
                        />
                        <pre className="font-Josefin dark:text-[#edfff4] text-[#000000b3] 100px:pl-3 text-[18px] font-[600]">
                        100k+ People already trusted us.{"  "}
                        <Link
                        href="/courses"
                        className="dark:text-[#46e256] text-[crimson]"
                        >
                            View Courses
                        </Link>{" "}
                        </pre>
                    </div>
                    <br/>
                </div>
            </div>
        </div>
    )
}
export default Hero;