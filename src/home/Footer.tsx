import React, { useEffect, useState } from "react";
import client from "../helpers/client.tsx";
import { Link } from "react-router-dom";

export const Footer = ({}: any) => {
    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //footer
    useEffect(() => {
        (async function () {
            const response = await client.getEntries({
                content_type: "footer",
            });
            if (response.items.length > 0) {
                const item = response.items[0];
                setPageData(item.fields);
            } else {
                setError("Page not found");
            }
        })();
    }, []);
    console.log(pageData);
    if (pageData) {
        return (
            <footer className=" py-10 pt-20 bg-background">
                <div className=" wrapper relative">
                    <div className="grid w-full  md:grid-cols-[1fr_1.5fr_1.5fr_1.5fr_0.5fr]  pb-20 gap-10 text-white font-poppins">
                        <div>
                            <img
                                className="max-w-[100px]"
                                src="./footer_logo.png"
                            />
                        </div>

                        <div>
                            <p className="pr-5">{pageData.title}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            {pageData.navigationLinks.map((item) => {
                                return (
                                    <Link
                                        className="duration-400 hover:text-gold"
                                        to={item.url}
                                    >
                                        {item.text}
                                    </Link>
                                );
                            })}
                        </div>
                        <div className="flex flex-col gap-2">
                            <p>{pageData.getInTouchText}</p>
                            <Link
                                className="duration-400 hover:text-gold"
                                to={`tel:+${pageData.contactNumber}`}
                            >
                                {pageData.contactNumber}
                            </Link>
                            <Link
                                className="duration-400 hover:text-gold"
                                to={`mailto:${pageData.contactEmail}`}
                            >
                                {pageData.contactEmail}
                            </Link>
                        </div>
                        <div className="flex justify-end h-full items-center">
                            <Link
                                className="duration-400 hover:text-gold"
                                to={pageData.linkedinUrl}
                            >
                                <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" />
                            </Link>
                        </div>
                    </div>
                    <div className="flex sm:flex-row flex-col gap-5 text-white font-poppins">
                        <p>{pageData.bottomText}</p>
                        <div className="flex gap-2">
                            <Link
                                className="duration-400 hover:text-gold"
                                to={pageData.privacyPolicyLink.url}
                            >
                                {pageData.privacyPolicyLink.text}
                            </Link>
                            |
                            <Link
                                className="duration-400 hover:text-gold"
                                to={pageData.termsAndConditionsLink.url}
                            >
                                {pageData.termsAndConditionsLink.text}
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        );
    } else {
        return null;
    }
};
