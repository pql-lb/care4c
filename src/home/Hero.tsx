import React from "react";
import { Button } from "./Button.tsx";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
export const Hero = ({ pageData }: any) => {
    gsap.registerPlugin(ScrollToPlugin);
    const handleClick = () => {
        gsap.to(window, { scrollTo: "#carousel" });
    };
    return (
        <div className=" relative z-20">
            <div className="w-[75px] xl:w-[150px] xl:h-[150px] h-[75px] opacity-10 rounded-full bg-bubble absolute -left-[25px] top-[45vh]"></div>
            <div className="w-[75px] xl:w-[150px] xl:h-[150px] h-[75px] opacity-10 rounded-full border-2 bg-transparent border-bubble absolute left-[45vw] top-[50vh]"></div>
            <div className="w-[75px] xl:w-[150px] xl:h-[150px] h-[75px] opacity-10 rounded-full bg-bubble absolute top-[20vh] -right-[20px]"></div>
            <div className="wrapper h-full pt-10 w-full relative flex lg:flex-row flex-col">
                <div className="lg:w-[50%] z-[999] mb-20 lg:mb-0 relative">
                    <h1 className="mb-[5vh] text-custom font-bold uppercase font-montserrat">
                        <span className="block text-white">
                            {pageData.titleWhite}
                        </span>
                        <span className="block text-gold">
                            {pageData.titleYellow}
                        </span>
                    </h1>
                    <div className="sm:pr-40 w-full relative">
                        <div className="flex mb-[5vh] text-white font-poppins text-custom2">
                            <div className="w-[50px] mr-[25px] shrink-0">
                                <svg
                                    className="w-full"
                                    viewBox="0 0 300 299.999988"
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="xMidYMid meet"
                                    version="1.0"
                                >
                                    <defs>
                                        <clipPath id="9043a1b3dc">
                                            <path
                                                d="M 6.46875 129 L 293.53125 129 L 293.53125 150 L 6.46875 150 Z M 6.46875 129 "
                                                clip-rule="nonzero"
                                            />
                                        </clipPath>
                                        <clipPath id="e5b175a816">
                                            <path
                                                d="M 167 22.039062 L 293.53125 22.039062 L 293.53125 257 L 167 257 Z M 167 22.039062 "
                                                clip-rule="nonzero"
                                            />
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#9043a1b3dc)">
                                        <path
                                            fill="#fee893"
                                            d="M 16.976562 149.734375 L 284.359375 149.734375 C 285.019531 149.734375 285.671875 149.667969 286.316406 149.539062 C 286.960938 149.410156 287.589844 149.222656 288.195312 148.96875 C 288.804688 148.71875 289.382812 148.410156 289.929688 148.042969 C 290.476562 147.675781 290.984375 147.261719 291.449219 146.796875 C 291.914062 146.332031 292.332031 145.824219 292.695312 145.277344 C 293.0625 144.730469 293.371094 144.152344 293.625 143.542969 C 293.875 142.933594 294.066406 142.308594 294.195312 141.660156 C 294.324219 141.015625 294.386719 140.363281 294.386719 139.707031 C 294.386719 139.046875 294.324219 138.394531 294.195312 137.75 C 294.066406 137.105469 293.875 136.476562 293.625 135.867188 C 293.371094 135.261719 293.0625 134.683594 292.695312 134.136719 C 292.332031 133.585938 291.914062 133.082031 291.449219 132.617188 C 290.984375 132.148438 290.476562 131.734375 289.929688 131.367188 C 289.382812 131.003906 288.804688 130.695312 288.195312 130.441406 C 287.589844 130.191406 286.960938 130 286.316406 129.871094 C 285.671875 129.742188 285.019531 129.679688 284.359375 129.679688 L 16.976562 129.679688 C 16.316406 129.679688 15.664062 129.742188 15.019531 129.871094 C 14.375 130 13.746094 130.191406 13.140625 130.441406 C 12.53125 130.695312 11.953125 131.003906 11.40625 131.367188 C 10.859375 131.734375 10.351562 132.148438 9.886719 132.617188 C 9.421875 133.082031 9.003906 133.585938 8.640625 134.136719 C 8.273438 134.683594 7.964844 135.261719 7.710938 135.867188 C 7.460938 136.476562 7.269531 137.105469 7.140625 137.75 C 7.011719 138.394531 6.949219 139.046875 6.949219 139.707031 C 6.949219 140.363281 7.011719 141.015625 7.140625 141.660156 C 7.269531 142.308594 7.460938 142.933594 7.710938 143.542969 C 7.964844 144.152344 8.273438 144.730469 8.640625 145.277344 C 9.003906 145.824219 9.421875 146.332031 9.886719 146.796875 C 10.351562 147.261719 10.859375 147.675781 11.40625 148.042969 C 11.953125 148.410156 12.53125 148.71875 13.140625 148.96875 C 13.746094 149.222656 14.375 149.410156 15.019531 149.539062 C 15.664062 149.667969 16.316406 149.734375 16.976562 149.734375 Z M 16.976562 149.734375 "
                                            fill-opacity="1"
                                            fill-rule="nonzero"
                                        />
                                    </g>
                                    <g clip-path="url(#e5b175a816)">
                                        <path
                                            fill="#fee893"
                                            d="M 177.40625 256.6875 C 178.734375 256.691406 180.015625 256.4375 181.242188 255.925781 C 182.472656 255.417969 183.554688 254.6875 184.492188 253.746094 L 291.445312 146.792969 C 291.910156 146.328125 292.328125 145.820312 292.691406 145.273438 C 293.058594 144.726562 293.367188 144.148438 293.621094 143.542969 C 293.871094 142.933594 294.0625 142.304688 294.191406 141.660156 C 294.320312 141.015625 294.382812 140.363281 294.382812 139.707031 C 294.382812 139.046875 294.320312 138.394531 294.191406 137.75 C 294.0625 137.105469 293.871094 136.476562 293.621094 135.871094 C 293.367188 135.261719 293.058594 134.683594 292.691406 134.136719 C 292.328125 133.589844 291.910156 133.085938 291.445312 132.621094 L 184.492188 25.667969 C 184.03125 25.175781 183.53125 24.730469 182.980469 24.339844 C 182.433594 23.949219 181.851562 23.617188 181.238281 23.34375 C 180.621094 23.070312 179.984375 22.859375 179.328125 22.714844 C 178.671875 22.566406 178.007812 22.488281 177.332031 22.476562 C 176.660156 22.464844 175.992188 22.519531 175.332031 22.644531 C 174.667969 22.765625 174.023438 22.953125 173.402344 23.207031 C 172.777344 23.457031 172.183594 23.769531 171.621094 24.140625 C 171.0625 24.511719 170.542969 24.9375 170.066406 25.414062 C 169.589844 25.886719 169.167969 26.40625 168.792969 26.96875 C 168.421875 27.53125 168.109375 28.121094 167.859375 28.746094 C 167.605469 29.371094 167.417969 30.015625 167.296875 30.675781 C 167.175781 31.339844 167.117188 32.007812 167.128906 32.679688 C 167.144531 33.351562 167.222656 34.015625 167.367188 34.675781 C 167.511719 35.332031 167.722656 35.96875 167.996094 36.582031 C 168.269531 37.199219 168.605469 37.78125 168.996094 38.328125 C 169.386719 38.875 169.828125 39.378906 170.320312 39.839844 L 270.175781 139.707031 L 170.320312 239.574219 C 169.621094 240.273438 169.035156 241.0625 168.570312 241.9375 C 168.101562 242.8125 167.773438 243.734375 167.582031 244.707031 C 167.386719 245.675781 167.339844 246.65625 167.4375 247.644531 C 167.535156 248.628906 167.773438 249.578125 168.152344 250.496094 C 168.53125 251.410156 169.035156 252.25 169.660156 253.019531 C 170.289062 253.785156 171.015625 254.441406 171.839844 254.992188 C 172.664062 255.542969 173.550781 255.964844 174.496094 256.253906 C 175.445312 256.539062 176.414062 256.683594 177.40625 256.6875 Z M 177.40625 256.6875 "
                                            fill-opacity="1"
                                            fill-rule="nonzero"
                                        />
                                    </g>
                                </svg>
                            </div>
                            <p className="">{pageData.subtitle}</p>
                        </div>
                        <div className="xl:max-w-[450px] flex gap-5 w-fit lg:w-full justify-between">
                            <Button
                                onClick={handleClick}
                                text={pageData.solutionLink}
                            />
                            <button className="text-offblack duration-400 hover:bg-white font-poppins xs:whitespace-pre px-6 md:px-8 xl:min-w-[200px] text-base md:text-lg py-2 block rounded-[4px] bg-gold">
                                {pageData.contactUsButton}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[50%] relative flex items-end justify-center">
                    <div className="h-custom  overflow-hidden overflow-y-clip w-[400px] relative">
                        <img
                            className=" z-20 w-full  absolute top-0"
                            src="mobile.png"
                        />
                        <div className="h-[60%] z-30 bg-gradient-to-b from-transparent to-background w-full absolute bottom-0 left-0"></div>
                    </div>
                    <img
                        className="absolute z-10 block h-[1000px] -bottom-[180px] max-w-none -ml-[150px]"
                        src="/blur2.png"
                    />
                </div>
            </div>
        </div>
    );
};
