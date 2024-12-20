import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules"; // Import necessary modules
import gsap from "gsap";

const Inner = () => {
    const [swiperInstance, setSwiperInstance] = useState(null);

    const handleSlideChange = (swiper: any) => {
        const totalSlides = swiper.slides.length;

        // Reset all slide classes
        swiper.slides.forEach((slide: any) => {
            slide.classList.remove(
                "swiper-slide-prev-prev",
                "swiper-slide-next-next"
            );
        });

        // Get the index of the active slide
        const activeIndex = swiper.activeIndex;

        // Calculate the "prev-prev" slide (2 slides before active slide)
        const prevPrevIndex = (activeIndex - 2 + totalSlides) % totalSlides;
        const prevIndex = (activeIndex - 1 + totalSlides) % totalSlides;
        console.log(prevIndex, swiper.slides[prevIndex]);
        // Calculate the "next-next" slide (2 slides after active slide)
        const nextNextIndex = (activeIndex + 2) % totalSlides;
        const nextIndex = (activeIndex + 1) % totalSlides;
        // Apply classes for "prev-prev" and "next-next" slides
        swiper.slides[prevPrevIndex].classList.add("swiper-slide-prev-prev");
        swiper.slides[nextNextIndex].classList.add("swiper-slide-next-next");

        swiper.slides.map((slide, index) => {
            const div = slide.querySelector(".div");
            const div2 = slide.querySelector(".divprev");
            const height1 =
                nextIndex === index
                    ? 350
                    : index === prevIndex
                    ? 350
                    : index === prevPrevIndex
                    ? 300
                    : index === nextNextIndex
                    ? 300
                    : index === activeIndex
                    ? 400
                    : 300;
            const height2 =
                index === nextIndex
                    ? 350
                    : index === prevIndex
                    ? 350
                    : index === prevPrevIndex
                    ? 300
                    : index === nextNextIndex
                    ? 300
                    : index === activeIndex
                    ? 400
                    : 300;
            console.log(height1, height2);
            gsap.fromTo(
                div,
                { x: "10vw" },
                { y: 0, x: 0, duration: 0.2, height: height2 }
            );
            // gsap.set(div2, { display: "block" });
            // gsap.fromTo(div2, { x: 0 }, { x: "-20vw" });
        });
    };
    return (
        <Swiper
            onInit={(swiper) => setSwiperInstance(swiper)}
            onSlideChange={handleSlideChange} // Handle slide change
            spaceBetween={0}
            slidesPerView={"auto"}
            loop={true}
            centeredSlides={true}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            speed={0}
        >
            <SwiperSlide style={{ width: window.innerWidth / 6 }}>
                <div className="div w-[20vw] mx-auto h-[300px] bg-gold">
                    Slide 1
                </div>
            </SwiperSlide>
            <SwiperSlide style={{ width: window.innerWidth / 6 }}>
                {/* <div className="divprev w-[20vw] mx-auto h-[300px] bg-gold">
                    Slide 1
                </div> */}
                <div className="div w-[20vw] mx-auto h-[300px] bg-gradient1">
                    Slide 2
                </div>
            </SwiperSlide>
            <SwiperSlide style={{ width: window.innerWidth / 6 }}>
                {/* <div className="divprev w-[20vw] mx-auto h-[300px] bg-gradient1">
                    Slide 2
                </div> */}
                <div className="div w-[20vw] mx-auto h-[300px] bg-gradient2">
                    Slide 3
                </div>
            </SwiperSlide>
            <SwiperSlide style={{ width: window.innerWidth / 6 }}>
                {/* <div className="divprev w-[20vw] mx-auto h-[300px] bg-gradient2">
                    Slide 3
                </div> */}
                <div className="div w-[20vw] mx-auto h-[300px] bg-gold">
                    Slide 4
                </div>
            </SwiperSlide>
            <SwiperSlide style={{ width: window.innerWidth / 6 }}>
                <div className="div w-[20vw] mx-auto h-[300px] bg-gradient1">
                    Slide 5
                </div>
            </SwiperSlide>
            <SwiperSlide style={{ width: window.innerWidth / 6 }}>
                <div className="div w-[20vw] mx-auto h-[300px] bg-gradient2">
                    Slide 1
                </div>
            </SwiperSlide>
            <SwiperSlide style={{ width: window.innerWidth / 6 }}>
                <div className="div w-[20vw] mx-auto h-[300px] bg-gold">
                    Slide 2
                </div>
            </SwiperSlide>
            <SwiperSlide style={{ width: window.innerWidth / 6 }}>
                <div className="div w-[20vw] mx-auto h-[300px] bg-gradient1">
                    Slide 3
                </div>
            </SwiperSlide>
            <SwiperSlide style={{ width: window.innerWidth / 6 }}>
                <div className="div w-[20vw] mx-auto h-[300px] bg-gradient2">
                    Slide 4
                </div>
            </SwiperSlide>
            <SwiperSlide style={{ width: window.innerWidth / 6 }}>
                <div className="div w-[20vw] mx-auto h-[300px] bg-gold">
                    Slide 5
                </div>
            </SwiperSlide>
        </Swiper>
    );
};
export const Carousel = ({ pageData }: any) => {
    const slides = [
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    ];
    return (
        <div className="h-screen py-5">
            <h2 className="font-montserrat text-[100px] font-bold uppercase text-center text-gradient2 opacity-40">
                {pageData.cardsTitle}
            </h2>
            <Inner slides={slides} />
        </div>
    );
};
