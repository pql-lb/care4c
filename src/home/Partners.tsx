import React from "react";
import { Link } from "react-router-dom";

export const Partners = ({ pageData }: any) => {
    return (
        <div className="mt-20 relative">
            <div className="">
                <div className="w-[75px] xl:w-[150px] xl:h-[150px] h-[75px] absolute left-[50%] -top-[20%] border-bubble border-2 opacity-10 rounded-full"></div>
                <div className="wrapper">
                    <h2 className="text-gold mb-10 sm:pr-10 md:pr-20 text-4xl sm:text-5xl md:text-6xl uppercase font-montserrat font-bold leading-tight">
                        Partners
                    </h2>
                </div>
                <div className="bg-bubble py-10">
                    <div className="wrapper  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 xl:gap-20">
                        {pageData.partnersIcons.map((item: any, i) => {
                            return (
                                <div className="flex h-full items-center justify-center w-full">
                                    <Link to={item.fields.file.description}>
                                        <img
                                            className="max-h-[120px] object-contain"
                                            src={item.fields.file.url}
                                        />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
