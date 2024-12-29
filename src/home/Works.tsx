import React, { useEffect, useState, useRef } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import client from "../helpers/client.tsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const Works = ({ pageData }) => {
    const [videoUrl, setVideoUrl] = useState("");
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        if (pageData.howItWorksVideo) {
            client
                .getAsset(pageData.howItWorksVideo)
                .then((asset: any) => {
                    setVideoUrl(asset.fields.file.url);
                })
                .catch((err) => console.error(err));
        }
    }, [pageData]);
    return (
        <div className="py-20 mt-32 md:mt-20 relative">
            <div className="w-[75px] h-[75px] absolute left-[40%] top-[0%] border-bubble border-2 opacity-10 rounded-full"></div>
            <div className="wrapper ">
                <div className="flex md:flex-row flex-col gap-10 md:gap-20 mb-10">
                    <div className="md:w-[50%]">
                        <h2 className="text-gold mb-10 sm:pr-10 md:pr-20 text-4xl sm:text-5xl md:text-6xl uppercase font-montserrat font-bold leading-tight">
                            {pageData.howItWorksTitle}
                        </h2>
                        <div className="text-white text-base sm:text-lg  font-poppins">
                            {documentToReactComponents(
                                pageData.howItWorksDescription_
                            )}
                        </div>
                    </div>
                    <div className="md:w-[50%]">
                        <div className="aspect-square max-h-[300px] bg-gold w-full h-full flex justify-center items-center text-3xl text-gradient1 uppercase font-bold">
                            {videoUrl ? (
                                <video controls width="640" height="360">
                                    <source
                                        src={`https:${videoUrl}`}
                                        type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                "Explainer Video"
                            )}
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {pageData.howItWorksStatisticBoxes.map((item: any, i) => {
                        return (
                            <div
                                className={`flex gap-2 p-4 bg-gradient-to-r ${
                                    i % 2 === 0
                                        ? "from-gradient1 to-gradient2 "
                                        : "to-gradient1 from-gradient2 "
                                } rounded-xl `}
                            >
                                <div>
                                    <img
                                        className="max-h-[75px]"
                                        src={item.fields.file.url}
                                    />
                                </div>
                                <div className="text-background h-full flex flex-col justify-center">
                                    <h3 className="text-sm mb-0.5 font-light font-inter">
                                        {item.fields.title}
                                    </h3>
                                    <p className="font-bold text-4xl font-publicSans">
                                        <Counter
                                            end={item.fields.description}
                                        />
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const Counter = ({ start = 0, end = 100, duration = 2 }) => {
    const numberRef = useRef(null);

    useEffect(() => {
        if (numberRef.current) {
            const obj = { value: Number(start) };

            gsap.to(obj, {
                value: Number(end),
                duration,
                ease: "power1.out",
                onUpdate: () => {
                    if (numberRef.current) {
                        const num =
                            typeof obj.value === "number" ? obj.value : 100;
                        numberRef.current.textContent = Math.floor(num);
                    }
                },
                scrollTrigger: {
                    trigger: numberRef.current.parentElement,
                    start: "0% 90%",
                },
            });
        }
    }, [end, numberRef]);

    return <span ref={numberRef}>{start}</span>;
};
