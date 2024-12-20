import React, { Suspense } from "react";
import { PageProvider, usePageData } from "../wrappers/content.tsx";
import { Hero } from "./Hero.tsx";
import { Header } from "./Header.tsx";
import { Carousel } from "./Carousel.tsx";

const Inner = () => {
    const { pageData, loading, error } = usePageData();
    if (loading || error) {
        return null;
    }
    return (
        <>
            <Header />
            <Hero pageData={pageData} />
            <Carousel pageData={pageData} />
        </>
    );
};
export const Page = () => {
    return (
        <PageProvider>
            <div className="bg-background w-full relative">
                <Suspense fallback={<div>Loading...</div>}>
                    <Inner />
                </Suspense>
            </div>
        </PageProvider>
    );
};
