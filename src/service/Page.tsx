import React from "react";
import {
    PageProviderContact,
    usePageData,
} from "../wrappers/contactContent.tsx";
import { Header } from "../home/Header.tsx";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Footer } from "../home/Footer.tsx";

const Inner = () => {
    const { pageData, loading, error } = usePageData();
    if (loading || error) {
        return null;
    }
    console.log(pageData);
    return (
        <div className="bg-background">
            <Header />
            <div className="wrapper py-10 relative">
                <div className="flex md:flex-row flex-col gap-10 md:gap-20 ">
                    <div className="md:w-[40%]">
                        <img src={pageData.images[0].fields.file.url} />
                    </div>
                    <div className="md:w-[60%]">
                        <h1 className="text-gold mb-10 sm:pr-10 md:pr-20 text-4xl sm:text-5xl md:text-6xl uppercase font-montserrat font-bold leading-tight">
                            {pageData.howItWorksTitle}
                        </h1>
                        <div className="text-white mb-10 font-poppins">
                            {documentToReactComponents(
                                pageData.howWorksDescription
                            )}
                        </div>
                        <h2 className="text-gold mb-10 sm:pr-10 md:pr-20 text-4xl sm:text-5xl md:text-6xl uppercase font-montserrat font-bold leading-tight">
                            {pageData.dataPillersTitle}
                        </h2>
                        <div className="grid grid-cols-3">
                            {pageData.dataPillarIcons.map((item) => {
                                return (
                                    <div className="flex flex-col items-center">
                                        <img
                                            className="max-w-[100px]"
                                            src={item.fields.file.url}
                                        />
                                        <p className="text-gold text-base sm:text-lg  text-center font-inter">
                                            {item.fields.title}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="my-20 flex   md:flex-row flex-col gap-10 md:gap-20">
                    <div className="md:w-[60%]">
                        <h2 className="text-gold mb-10 sm:pr-10 md:pr-20 text-4xl sm:text-5xl md:text-6xl uppercase font-montserrat font-bold leading-tight">
                            {pageData.yourDataTitle}
                        </h2>
                        <div className="text-white mb-10 font-poppins">
                            {documentToReactComponents(
                                pageData.yourDataDescription_
                            )}
                        </div>
                    </div>
                    <div className="md:w-[40%]">
                        <img src={pageData.images[1].fields.file.url} />
                    </div>
                </div>
                <div className=" flex  md:flex-row flex-col gap-10 md:gap-20 my-20">
                    <div className="md:w-[40%]">
                        {pageData.images.length > 2 ? (
                            <img src={pageData.images[2].fields.file.url} />
                        ) : null}
                    </div>
                    <div className="md:w-[60%]">
                        <h2 className="text-gold mb-10 sm:pr-10 md:pr-20 text-4xl sm:text-5xl md:text-6xl uppercase font-montserrat font-bold leading-tight">
                            {pageData.reportingTitle}
                        </h2>
                        <div className="text-white mb-10 font-poppins">
                            {documentToReactComponents(
                                pageData.reportingDescription_
                            )}
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export const ServicePage = () => {
    return (
        <PageProviderContact type="servicePage">
            <Inner />
        </PageProviderContact>
    );
};
