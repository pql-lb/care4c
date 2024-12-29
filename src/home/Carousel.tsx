import React, { useState, useRef, useCallback, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules"; // Import necessary modules
import gsap from "gsap";

const Inner = ({ pageData }: any) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const directionRef = useRef(0);
    const [direction, setDirection] = useState(0);
    const [rerender, setRe] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState(null);

    const handleSlideChange = useCallback(
        (swiper: any) => {
            const totalSlides = swiper.slides.length;

            swiper.slides.forEach((slide: any) => {
                slide.classList.remove(
                    "swiper-slide-prev-prev",
                    "swiper-slide-next-next"
                );
            });

            const activeIndex = swiper.activeIndex;
            // Calculate the "prev-prev" slide (2 slides before active slide)
            const prevPrevIndex = (activeIndex - 2 + totalSlides) % totalSlides;
            const prevIndex = (activeIndex - 1 + totalSlides) % totalSlides;
            // console.log(prevIndex, swiper.slides[prevIndex]);
            // Calculate the "next-next" slide (2 slides after active slide)
            const nextNextIndex = (activeIndex + 2) % totalSlides;
            const nextIndex = (activeIndex + 1) % totalSlides;
            // Apply classes for "prev-prev" and "next-next" slides
            swiper.slides[prevPrevIndex].classList.add(
                "swiper-slide-prev-prev"
            );
            swiper.slides[nextNextIndex].classList.add(
                "swiper-slide-next-next"
            );

            swiper.slides.map((slide, index) => {
                const div = slide.querySelector(".div");
                const x =
                    index === nextIndex
                        ? -25
                        : index === prevIndex
                        ? 25
                        : index === prevPrevIndex
                        ? 75
                        : index === nextNextIndex
                        ? -75
                        : 0;
                const xPrev =
                    index === nextIndex
                        ? -125
                        : index === prevIndex
                        ? -75
                        : index === prevPrevIndex
                        ? -25
                        : index === nextNextIndex
                        ? -175
                        : activeIndex
                        ? -100
                        : 0;
                let height2;
                if (window.innerWidth > 768) {
                    height2 =
                        index === nextIndex
                            ? 375
                            : index === prevIndex
                            ? 375
                            : index === activeIndex
                            ? 425
                            : 325;
                } else {
                    height2 =
                        index === nextIndex
                            ? 275
                            : index === prevIndex
                            ? 275
                            : index === activeIndex
                            ? 325
                            : 225;
                }
                const opacity =
                    direction > 0 && index === nextNextIndex
                        ? 0
                        : direction < 0 && index === prevPrevIndex
                        ? 0
                        : 1;
                // console.log(height1, height2);
                if (direction < 0) {
                    gsap.fromTo(
                        div,
                        { x: "10vw", opacity: opacity, x: xPrev },
                        {
                            y: 0,
                            x: x,
                            duration: 0.3,
                            height: height2,
                            opacity: 1,
                        }
                    );
                } else {
                    gsap.fromTo(
                        div,
                        { x: "10vw", opacity: opacity },
                        {
                            y: 0,
                            x: x,
                            duration: 0.3,
                            height: height2,
                            opacity: 1,
                        }
                    );
                }
            });
        },
        [direction]
    );
    useEffect(() => {
        if (swiperInstance) {
            if (directionRef.current < direction) {
                swiperInstance.slideNext();
            } else {
                swiperInstance.slidePrev();
            }
            directionRef.current = direction;
        }
    }, [direction, swiperInstance, rerender]);
    return (
        <Swiper
            onInit={(swiper) => setSwiperInstance(swiper)}
            onSlideChange={handleSlideChange} // Handle slide change
            spaceBetween={0}
            slidesPerView={"auto"}
            loop={true}
            centeredSlides={true}
            // modules={[Navigation]}
            navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
            }}
            speed={0}
            className="-translate-y-[50px] relative wrapper overflow-visible"
        >
            <button
                ref={prevRef}
                onClick={() => {
                    setDirection(-1);
                    setRe(Date.now());
                }}
                className="w-[50px] rotate-180 absolute top-[30%] -left-[25px] z-50"
            >
                <img src="./arrow.png" alt="Previous" />
            </button>
            <button
                ref={nextRef}
                onClick={() => {
                    setDirection(1);
                    setRe(Date.now());
                }}
                className="w-[50px] absolute top-[30%] -right-[25px] z-50"
            >
                <img src="./arrow.png" alt="Next" />
            </button>
            <SwiperSlide
                style={{
                    width:
                        window.innerWidth > 768
                            ? "22%"
                            : window.innerWidth > 580
                            ? "40%"
                            : "100%",
                }}
            >
                <div className="div w-sw relative mx-auto rounded-lg h-[225px] md:h-[325px] bg-gold">
                    <div className="p-5 flex flex-col justify-between h-full">
                        <div className="flex items-center h-full">
                            <img
                                className="aspect-square rounded-md object-cover"
                                src={pageData.cardMedia[0].fields.file.url}
                            />
                        </div>
                        <div className="relative w-full font-poppins py-2 text-center rounded-md bg-white">
                            {pageData.cardMedia[0].fields.description}
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide
                style={{
                    width:
                        window.innerWidth > 768
                            ? "22%"
                            : window.innerWidth > 580
                            ? "40%"
                            : "100%",
                }}
            >
                <div className="div w-sw relative mx-auto rounded-lg h-[225px] md:h-[325px] bg-gradient1">
                    <div className="p-5 flex flex-col justify-between h-full">
                        <div className="flex items-center h-full">
                            <img
                                className="aspect-square rounded-md object-cover"
                                src={pageData.cardMedia[1].fields.file.url}
                            />
                        </div>
                        <div className="relative w-full font-poppins py-2 text-center rounded-md bg-white">
                            {pageData.cardMedia[1].fields.description}
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide
                style={{
                    width:
                        window.innerWidth > 768
                            ? "22%"
                            : window.innerWidth > 580
                            ? "40%"
                            : "100%",
                }}
            >
                <div className="div w-sw relative mx-auto rounded-lg h-[225px] md:h-[325px] bg-gradient2">
                    <div className="p-5 flex flex-col justify-between h-full">
                        <div className="flex items-center h-full">
                            <img
                                className="aspect-square rounded-md object-cover"
                                src={pageData.cardMedia[2].fields.file.url}
                            />
                        </div>
                        <div className="relative w-full font-poppins py-2 text-center rounded-md bg-white">
                            {pageData.cardMedia[2].fields.description}
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide
                style={{
                    width:
                        window.innerWidth > 768
                            ? "22%"
                            : window.innerWidth > 580
                            ? "40%"
                            : "100%",
                }}
            >
                <div className="div w-sw relative mx-auto rounded-lg h-[225px] md:h-[325px] bg-gold">
                    <div className="p-5 flex flex-col justify-between h-full">
                        <div className="flex items-center h-full">
                            <img
                                className="aspect-square rounded-md object-cover"
                                src={pageData.cardMedia[3].fields.file.url}
                            />
                        </div>
                        <div className="relative w-full font-poppins py-2 text-center rounded-md bg-white">
                            {pageData.cardMedia[3].fields.description}
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide
                style={{
                    width:
                        window.innerWidth > 768
                            ? "22%"
                            : window.innerWidth > 580
                            ? "40%"
                            : "100%",
                }}
            >
                <div className="div w-sw relative mx-auto rounded-lg h-[225px] md:h-[325px] bg-gradient1">
                    <div className="p-5 flex flex-col justify-between h-full">
                        <div className="flex items-center h-full">
                            <img
                                className="aspect-square rounded-md object-cover"
                                src={pageData.cardMedia[4].fields.file.url}
                            />
                        </div>
                        <div className="relative w-full font-poppins py-2 text-center rounded-md bg-white">
                            {pageData.cardMedia[4].fields.description}
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide
                style={{
                    width:
                        window.innerWidth > 768
                            ? "22%"
                            : window.innerWidth > 580
                            ? "40%"
                            : "100%",
                }}
            >
                <div className="div w-sw relative mx-auto rounded-lg h-[225px] md:h-[325px] bg-gradient2">
                    <div className="p-5 flex flex-col justify-between h-full">
                        <div className="flex items-center h-full">
                            <img
                                className="aspect-square rounded-md object-cover"
                                src={pageData.cardMedia[0].fields.file.url}
                            />
                        </div>
                        <div className="relative w-full font-poppins py-2 text-center rounded-md bg-white">
                            {pageData.cardMedia[0].fields.description}
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide
                style={{
                    width:
                        window.innerWidth > 768
                            ? "22%"
                            : window.innerWidth > 580
                            ? "40%"
                            : "100%",
                }}
            >
                <div className="div w-sw relative mx-auto rounded-lg h-[225px] md:h-[325px] bg-gold">
                    <div className="p-5 flex flex-col justify-between h-full">
                        <div className="flex items-center h-full">
                            <img
                                className="aspect-square rounded-md object-cover"
                                src={pageData.cardMedia[1].fields.file.url}
                            />
                        </div>
                        <div className="relative w-full font-poppins py-2 text-center rounded-md bg-white">
                            {pageData.cardMedia[1].fields.description}
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide
                style={{
                    width:
                        window.innerWidth > 768
                            ? "22%"
                            : window.innerWidth > 580
                            ? "40%"
                            : "100%",
                }}
            >
                <div className="div w-sw relative mx-auto rounded-lg h-[225px] md:h-[325px] bg-gradient1">
                    <div className="p-5 flex flex-col justify-between h-full">
                        <div className="flex items-center h-full">
                            <img
                                className="aspect-square rounded-md object-cover"
                                src={pageData.cardMedia[2].fields.file.url}
                            />
                        </div>
                        <div className="relative w-full font-poppins py-2 text-center rounded-md bg-white">
                            {pageData.cardMedia[2].fields.description}
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide
                style={{
                    width:
                        window.innerWidth > 768
                            ? "22%"
                            : window.innerWidth > 580
                            ? "40%"
                            : "100%",
                }}
            >
                <div className="div w-sw relative mx-auto rounded-lg h-[225px] md:h-[325px] bg-gradient2">
                    <div className="p-5 flex flex-col justify-between h-full">
                        <div className="flex items-center h-full">
                            <img
                                className="aspect-square rounded-md object-cover"
                                src={pageData.cardMedia[3].fields.file.url}
                            />
                        </div>
                        <div className="relative w-full font-poppins py-2 text-center rounded-md bg-white">
                            {pageData.cardMedia[3].fields.description}
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide
                style={{
                    width:
                        window.innerWidth > 768
                            ? "22%"
                            : window.innerWidth > 580
                            ? "40%"
                            : "100%",
                }}
            >
                <div className="div w-sw relative mx-auto rounded-lg h-[225px] md:h-[325px] bg-gold">
                    <div className="p-5 flex flex-col justify-between h-full">
                        <div className="flex items-center h-full">
                            <img
                                className="aspect-square rounded-md object-cover"
                                src={pageData.cardMedia[4].fields.file.url}
                            />
                        </div>
                        <div className="relative w-full font-poppins py-2 text-center rounded-md bg-white">
                            {pageData.cardMedia[4].fields.description}
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};
export const Carousel = ({ pageData }: any) => {
    console.log(pageData);
    return (
        <div id="carousel" className="min-h-screen h-fit py-10 relative">
            <div className="w-[75px] h-[75px] absolute -left-[10px] bottom-[10%] bg-bubble opacity-10 rounded-full"></div>
            <div className="w-[75px] h-[75px] absolute left-[50%] bottom-[5%] border-bubble border-2 opacity-10 rounded-full"></div>
            <div className="w-[75px] h-[75px] absolute -right-[10px] bottom-[15%]  bg-bubble opacity-10 rounded-full"></div>
            <h2 className="font-montserrat leading-tight text-[40px] sm:text-[60px] lg:text-[100px] font-bold uppercase text-center text-gradient2 opacity-40">
                {pageData.cardsTitle}
            </h2>
            <Inner pageData={pageData} />
        </div>
    );
};
