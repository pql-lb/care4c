import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const Svg = () => {
    useEffect(() => {
        gsap.fromTo(
            "#path5",
            { strokeDasharray: "1000", strokeDashoffset: "1000" },
            {
                strokeDashoffset: 0,
                duration: 3,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: "#svg1",
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <svg
            id="svg1"
            style={{
                position: "absolute",
                left: "-10%",
                width: "120%",
                top: "10%",
                zIndex: 10,
                // transform: "rotate(180deg)",
            }}
            viewBox="0 0 322.86547 110.27426"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs id="defs1"></defs>

            <path
                style={{
                    fill: "none",
                    fillOpacity: 1,
                    stroke: "aqua",
                    strokeWidth: 11,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeDasharray: "1000",
                    strokeDashoffset: "1000",
                    strokeOpacity: 1,
                    paintOrder: "markers fill stroke",
                }}
                d="M -6.1474774,109.11772 C 6.0629086,96.514537 22.269265,81.285362 40.760774,85.363753 c 15.453574,3.40836 27.098577,15.155917 36.501716,26.806897 9.596,11.88994 17.680639,25.27528 31.47053,33.30903 7.18551,4.18615 14.61955,7.23062 23.43854,6.81583 17.98058,-0.84568 35.10341,-7.33616 52.8845,-9.20799 12.81427,-1.34898 26.54308,1.86938 35.9744,11.04564"
                id="path5"
                transform="matrix(1.2202456,-0.38414414,0.3143478,1.4911833,-11.048422,-87.58127)"
            />
        </svg>
    );
};
