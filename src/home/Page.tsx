import React, { Suspense } from "react";
import { PageProvider, usePageData } from "../wrappers/content.tsx";
import { Hero } from "./Hero.tsx";
import { Header } from "./Header.tsx";
import { Carousel } from "./Carousel.tsx";
import { Cards } from "./Cards.tsx";
import { Works } from "./Works.tsx";
import { Partners } from "./Partners.tsx";
import { Footer } from "./Footer.tsx";
import { Wrapper } from "./Wrapper.tsx";

const Inner = () => {
    const { pageData, loading, error } = usePageData();
    if (loading || error) {
        return null;
    }
    return (
        <>
            <Header />
            <Wrapper>
                <Hero pageData={pageData} />
            </Wrapper>
            <Wrapper>
                <Carousel pageData={pageData} />
            </Wrapper>
            <Wrapper>
                <Cards pageData={pageData} />
            </Wrapper>
            <Wrapper>
                <Works pageData={pageData} />
            </Wrapper>
            <Wrapper>
                <Partners pageData={pageData} />
            </Wrapper>
            <Footer />
        </>
    );
};
export const Page = () => {
    return (
        <PageProvider>
            <div className="bg-background w-full max-w-[100%] overflow-x-clip relative">
                <Suspense fallback={<div>Loading...</div>}>
                    <Inner />
                </Suspense>
            </div>
        </PageProvider>
    );
};
