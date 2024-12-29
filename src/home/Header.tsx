import React from "react";
import { Button } from "./Button.tsx";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className="relative z-50">
            <div className="wrapper py-8 flex items-center justify-between">
                <Link className="shrink-0" to="/">
                    <img
                        className="h-[30px] sm:h-[40px] lg:h-[60px]"
                        src="./care_logo.png"
                    />
                </Link>
                <nav>
                    <ul className="hidden md:flex font-inter text-lg gap-9 text-gradient2">
                        <Link to="/" className="hover:font-bold cursor-pointer">
                            Home
                        </Link>
                        <Link
                            to="/services"
                            className="hover:font-bold cursor-pointer"
                        >
                            Services
                        </Link>
                        <Link
                            to="/contact"
                            className="hover:font-bold cursor-pointer"
                        >
                            Contact Us
                        </Link>
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
