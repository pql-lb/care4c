import React from "react";
import { Svg } from "./Svg.tsx";

export const Cards = ({ pageData }: any) => {
    return (
        <div className="h-screen py-20 mt-10 relative">
            <div className="wrapper flex z-20 relative">
                <div className="w-[60%] grid grid-cols-2 gap-10">
                    {pageData.features.map((card, index) => {
                        return (
                            <div
                                className={`bg-lightYellow min-h-[225px] w-full  rounded-md p-5 ${
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
                    <button className="duration-400 hover:bg-black bg-gradient1 py-2 font-poppins text-lg font-semibold text-white rounded-md">
                        {pageData.featuresButtonText}
                    </button>
                </div>
                <div className="w-[40%]"></div>
            </div>
            <Svg />
        </div>
    );
};
