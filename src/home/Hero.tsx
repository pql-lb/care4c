import React from "react";
import { usePageData } from "../wrappers/content.tsx";
import { Button } from "./Button.tsx";

export const Hero = ({ pageData }: any) => {
    return (
        <>
            <div className="w-[75px] h-[75px] opacity-10 rounded-full bg-bubble absolute -left-[25px] top-[45vh]"></div>
            <div className="w-[75px] h-[75px] opacity-10 rounded-full border-2 bg-transparent border-bubble absolute left-[45vw] top-[50vh]"></div>
            <div className="w-[75px] h-[75px] opacity-10 rounded-full bg-bubble absolute top-[20vh] -right-[20px]"></div>
            <div className="wrapper min-h-[100vh]  py-20 w-full relative flex">
                <div className="w-[50%]">
                    <h1 className="mb-8 text-custom font-bold uppercase font-montserrat">
                        <span className="block text-white">
                            {pageData.titleWhite}
                        </span>
                        <span className="block text-gold">
                            {pageData.titleYellow}
                        </span>
                    </h1>
                    <div className="pr-40 w-full relative">
                        <div className="flex mb-8 text-white font-poppins text-custom2">
                            <div className="w-[50px] mr-[25px] shrink-0">A</div>
                            <p className="">{pageData.subtitle}</p>
                        </div>
                        <div className="flex  w-full justify-between">
                            <Button text={pageData.solutionLink} />
                            <button className="text-offblack font-poppins px-8 xl:min-w-[200px] text-lg py-2 block rounded-[4px] bg-gold">
                                {pageData.contactUsButton}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-[50%] relative flex items-center justify-center">
                    <div className="h-custom overflow-y-clip w-[400px] relative">
                        <img
                            className=" z-20 w-full  absolute top-0"
                            src="mobile.png"
                        />
                        <div className="h-[60%] z-30 bg-gradient-to-b from-transparent to-background w-full absolute bottom-0 left-0"></div>
                    </div>
                    <img
                        className="absolute z-10 block h-[140vh] max-w-none -ml-[30vh]"
                        src="/blur2.png"
                    />
                </div>
            </div>
        </>
    );
};
