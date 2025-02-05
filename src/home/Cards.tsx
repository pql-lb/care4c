import React from "react";
import { Svg } from "./Svg.tsx";

export const Cards = ({ pageData }: any) => {
    return (
        <div className=" my-20 mb-40 h-fit relative">
            <div className="w-[75px] xl:w-[150px] xl:h-[150px] h-[75px] absolute -right-[10px] bottom-[-10%] border-2 border-bubble opacity-10 rounded-full"></div>
            <div className="wrapper z-30 relative">
                <div className="md:w-[50%] lg:w-[60%] grid lg:grid-cols-2 gap-5 lg:gap-10">
                    {pageData.features.map((card, index) => {
                        return (
                            <div
                                className={`bg-lightYellow bg-opacity-90 min-h-[225px] w-full  rounded-md p-5 ${
                                    index % 2 === 0
                                        ? ""
                                        : "lg:translate-y-[25px]"
                                }`}
                            >
                                <img
                                    className="h-[50px] mb-4"
                                    src={card.fields.file.url}
                                />
                                <h3 className="font-poppins font-semibold mb-4 text-2xl">
                                    {card.fields.title}
                                </h3>
                                <p className="font-inter pb-4 text-grey text-base pr-4">
                                    {card.fields.description}
                                </p>
                            </div>
                        );
                    })}
                    <button className="duration-400 hover:bg-white hover:text-background bg-gradient1 py-2 font-poppins text-base sm:text-lg  font-semibold text-white rounded-md">
                        {pageData.featuresButtonText}
                    </button>
                </div>
            </div>
            <Svg />
            <div className="md:absolute top-0 w-full h-full">
                <div className="wrapper h-full  relative ">
                    <div className="md:hidden block h-[400px]"></div>
                    <img className="absolute z-10  phone1" src="./phone1.png" />
                    <img className="absolute z-30  phone2" src="./phone2.png" />
                </div>
            </div>
        </div>
    );
};
