import React from "react";

export const Button = ({ text, small, onClick }: any) => {
    return (
        <button
            onClick={onClick}
            className="relative font-poppins inline-block p-[1px] font-medium text-white   group"
        >
            <span className="absolute inset-0 bg-gradient-to-r from-gradient1 to-gradient2 rounded-[5px] group-hover:blur-sm"></span>
            <span
                className={`relative text-gradient2 block bg-background py-2 ${
                    small
                        ? "px-6 xl:min-w-[100px]"
                        : "xs:whitespace-pre px-6 md:px-8 xl:min-w-[200px] text-base md:text-lg"
                }   rounded-[5px]`}
            >
                {text}
            </span>
        </button>
    );
};
