import React from "react";
import { Button } from "./Button.tsx";

export const Header = () => {
    return (
        <div className="relative z-50">
            <div className="wrapper py-8 flex items-center justify-between">
                <img className="h-[60px]" src="./care_logo.png" />
                <nav>
                    <ul className="flex font-inter text-lg gap-9 text-gradient2">
                        <li className="hover:font-bold cursor-pointer">Home</li>
                        <li className="hover:font-bold cursor-pointer">
                            Services
                        </li>
                        <li className="hover:font-bold cursor-pointer">
                            Contact Us
                        </li>
                    </ul>
                </nav>
                <div className="flex">
                    <Button text="Log In" small={true} />
                    <button>L</button>
                </div>
            </div>
        </div>
    );
};
