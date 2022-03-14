import Image from 'next/image'
import React from 'react'

const ResultCard = () => {
    return (
        <div className="">
            <div className="result grid grid-cols-3 desktop-only shadow-around rounded-3xl flex items-center p-5 mb-6">
                <div className="infos flex">
                    <div className="picture relative w-[100px] h-[100px]">
                        <img src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80" alt="" className="w-[91px] h-[94px] rounded-xl bg-gray" />
                        <span className="w-[25px] h-[25px] flex justify-center absolute bottom-0 right-0 border-solid border-[#e22424] border rounded-full bg-white">
                            <Image
                                src="/manIcon.svg"
                                alt=""
                                width={13}
                                height={15}
                            />
                        </span>
                    </div>
                    <div className="about ml-4">
                        <p className="mt-4">Masud Reja</p>
                        <p className="mt-4">Id: Dp2935-897</p>
                    </div>
                </div>
                <div className="date-about">
                    <p>13th sept 2021, 10:00 AM</p>
                    <p>Meeting For Vendor Community.</p>
                </div>
                <div className="accept-cancel flex justify-end">
                    <button className="accept-btn rounded-lg mr-10 px-10 py-2 bg-[#e22424] border-solid border-2 border-[#e22424] text-white">Accept</button>
                    <button className="cancel-btn rounded-lg px-10 py-2 bg-white border-2 border-solid border-[#e22424] text-[#e22424]">Cancel</button>
                </div>
            </div>
            <div className="result mobile-only shadow-around rounded-3xl p-5 mb-6 grid grid-cols-1">
                <div className="infos flex">
                    <div className="picture relative w-[100px] h-[100px]">
                        <img src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80" alt="" className="w-[91px] h-[94px] rounded-xl bg-gray" />
                        <span className="w-[25px] h-[25px] flex justify-center absolute bottom-0 right-0 border-solid border-[#e22424] border rounded-full bg-white">
                            <Image
                                src="/manIcon.svg"
                                alt=""
                                width={13}
                                height={15}
                            />
                        </span>
                    </div>
                    <div className="about ml-4">
                        <p className="mt-4">Masud Reja</p>
                        <p className="mt-4">Id: Dp2935-897</p>
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="date-about">
                        <p>13th sept 2021, 10:00 AM</p>
                        <p>Meeting For Vendor Community.</p>
                    </div>
                    <div className="accept-cancel flex justify-end">
                        <button className="accept-btn rounded-lg mr-10 px-10 py-2 bg-[#e22424] border-solid border-2 border-[#e22424] text-white">Accept</button>
                        <button className="cancel-btn rounded-lg px-10 py-2 bg-white border-2 border-solid border-[#e22424] text-[#e22424]">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultCard