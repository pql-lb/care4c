import React from "react";
import { Svg } from "./Svg.tsx";

export const Cards = ({ pageData }: any) => {
    return (
        <div className="h-screen py-20 mt-10 relative">
            <div className="wrapper flex z-30 relative">
                <div className="w-[60%] grid grid-cols-2 gap-10">
                    {pageData.features.map((card, index) => {
                        return (
                            <div
                                className={`bg-lightYellow bg-opacity-90 min-h-[225px] w-full  rounded-md p-5 ${
                                    index % 2 === 0 ? "" : "translate-y-[25px]"
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
                    <button className="duration-400 hover:bg-white hover:text-background bg-gradient1 py-2 font-poppins text-lg font-semibold text-white rounded-md">
                        {pageData.featuresButtonText}
                    </button>
                </div>
                <div className="w-[40%]"></div>
            </div>
            <Svg />
            <img
                className="absolute z-10 -right-[35vh] bottom-[10%] h-[70vh]"
                src="./phone1.png"
            />
            <img
                className="absolute z-30 right-[0vh] bottom-[10%] h-[70vh]"
                src="./phone2.png"
            />
        </div>
    );
};
