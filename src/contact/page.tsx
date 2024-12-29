import React from "react";
import {
    PageProviderContact,
    usePageData,
} from "../wrappers/contactContent.tsx";
import { Header } from "../home/Header.tsx";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Footer } from "../home/Footer.tsx";
import { Link } from "react-router-dom";

const Inner = () => {
    const { pageData, loading, error } = usePageData();
    if (loading || error) {
        return null;
    }
    console.log(pageData);
    return (
        <div className="bg-background relative">
            <Header />
            <div className="wrapper ">
                <div className="flex md:flex-row flex-col my-10">
                    <div className="md:w-[50%]">
                        <h1 className="text-gold mb-10 sm:pr-10 md:pr-20 text-4xl sm:text-5xl md:text-6xl uppercase font-montserrat font-bold leading-tight">
                            {pageData.contactUsTitle}
                        </h1>
                        <p className="pr-20 text-white mb-10 font-poppins">
                            {pageData.contactUsDescription}
                        </p>
                        <div className="text-white font-poppins">
                            <div className="mb-6 flex items-center">
                                <svg
                                    className="max-h-[40px] w-[50px] mr-[50px]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                >
                                    <path
                                        className="fill-gradient1"
                                        d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                                    />
                                </svg>
                                <div>
                                    <p>{pageData.address}</p>
                                    <p>{pageData.addressLine2}</p>
                                    <p>{pageData.addressLine3}</p>
                                </div>
                            </div>
                            <div className="mb-6 flex items-center">
                                <svg
                                    className="max-h-[40px] w-[50px] mr-[50px] "
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        className="fill-gradient1"
                                        d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                                    />
                                </svg>
                                <Link to={`tel:+${pageData.phoneNumber}`}>
                                    {pageData.phoneNumber}
                                </Link>
                            </div>
                            <div className="mb-6 flex items-center">
                                <svg
                                    className="max-h-[40px] w-[50px] mr-[50px]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 300 299.999988"
                                    preserveAspectRatio="xMidYMid meet"
                                    version="1.0"
                                >
                                    <defs>
                                        <clipPath id="7a177a8908">
                                            <path
                                                d="M 8.917969 0 L 299.917969 0 L 299.917969 291 L 8.917969 291 Z M 8.917969 0 "
                                                clip-rule="nonzero"
                                            />
                                        </clipPath>
                                    </defs>

                                    <path
                                        fill="#a1d5e0"
                                        d="M 160.964844 104.484375 C 158.300781 108.066406 155.125 109.886719 151.429688 109.886719 C 148.910156 109.886719 146.886719 108.558594 145.359375 105.925781 C 143.8125 103.289062 143.027344 100.027344 143.027344 96.082031 C 143.027344 91.234375 144.121094 87.335938 146.273438 84.378906 C 148.445312 81.410156 151.121094 79.894531 154.324219 79.894531 C 157.105469 79.894531 159.566406 81 161.734375 83.242188 C 163.90625 85.472656 164.996094 88.441406 164.996094 92.152344 C 164.96875 96.796875 163.628906 100.886719 160.964844 104.484375 Z M 195.65625 50.34375 C 185.128906 40.644531 172.042969 35.796875 156.421875 35.796875 C 139.984375 35.796875 125.996094 41.300781 114.4375 52.335938 C 102.875 63.386719 97.082031 77.101562 97.082031 93.523438 C 97.082031 109.273438 102.601562 122.796875 113.589844 134.140625 C 124.625 145.496094 139.445312 151.15625 158.109375 151.15625 C 169.363281 151.15625 180.398438 148.855469 191.230469 144.214844 C 194.753906 142.714844 196.484375 138.667969 195.042969 135.113281 C 193.558594 131.445312 189.367188 129.742188 185.726562 131.300781 C 176.308594 135.347656 167.078125 137.371094 158.097656 137.371094 C 143.785156 137.371094 132.707031 133.019531 124.832031 124.28125 C 117 115.578125 113.066406 105.34375 113.066406 93.59375 C 113.066406 80.839844 117.289062 70.199219 125.691406 61.652344 C 134.058594 53.136719 144.398438 48.855469 156.640625 48.855469 C 167.90625 48.855469 177.445312 52.367188 185.203125 59.367188 C 192.976562 66.386719 196.851562 75.207031 196.851562 85.847656 C 196.851562 93.128906 195.058594 99.199219 191.507812 104.019531 C 187.953125 108.867188 184.257812 111.269531 180.429688 111.269531 C 178.359375 111.269531 177.3125 110.160156 177.3125 107.933594 C 177.3125 106.113281 177.457031 104.003906 177.71875 101.542969 L 181.679688 67.578125 C 181.898438 65.65625 180.414062 63.984375 178.492188 63.984375 L 169.714844 63.984375 C 168.15625 63.984375 166.832031 65.105469 166.554688 66.617188 L 166.074219 69.269531 C 162.230469 66.125 158.023438 64.550781 153.453125 64.550781 C 146.203125 64.550781 139.984375 67.449219 134.832031 73.214844 C 129.664062 78.976562 127.101562 86.417969 127.101562 95.5 C 127.101562 104.382812 129.386719 111.542969 133.972656 116.988281 C 138.558594 122.449219 144.0625 125.15625 150.511719 125.15625 C 156.277344 125.15625 161.195312 122.726562 165.300781 117.90625 C 168.375 122.550781 172.917969 124.851562 178.914062 124.851562 C 187.738281 124.851562 195.363281 121.007812 201.800781 113.320312 C 208.21875 105.648438 211.453125 96.375 211.453125 85.527344 C 211.453125 71.785156 206.195312 60.039062 195.65625 50.34375 "
                                        fill-opacity="1"
                                        fill-rule="nonzero"
                                    />
                                    <g clip-path="url(#7a177a8908)">
                                        <path
                                            fill="#a1d5e0"
                                            d="M 111.886719 197.917969 L 26.546875 264.101562 L 26.375 138.8125 Z M 264.851562 272.894531 L 43.507812 273.199219 L 154.382812 187.1875 Z M 148.996094 169.136719 L 126.445312 186.621094 L 70.996094 148.273438 L 71.109375 17.820312 L 237.65625 17.820312 L 237.539062 147.953125 L 182.132812 186.476562 L 159.769531 169.136719 C 159.726562 169.09375 159.667969 169.0625 159.652344 169.050781 C 156.480469 166.675781 152.113281 166.71875 148.996094 169.136719 Z M 282.160156 264.070312 L 196.691406 197.773438 L 281.984375 138.460938 Z M 255.113281 135.742188 L 255.113281 108.34375 L 274.824219 122.042969 Z M 33.027344 122.042969 L 53.421875 107.933594 L 53.421875 136.132812 Z M 299.527344 121.910156 C 299.527344 121.371094 299.425781 120.570312 299.195312 119.988281 C 298.625 118.039062 297.417969 116.347656 295.757812 115.199219 L 255.113281 86.941406 L 255.226562 9.027344 C 255.226562 4.191406 251.28125 0.246094 246.449219 0.246094 L 62.316406 0.246094 C 57.484375 0.246094 53.539062 4.191406 53.539062 9.027344 L 53.421875 86.578125 L 12.574219 114.804688 C 10.273438 116.394531 8.859375 119.027344 8.800781 121.835938 C 8.789062 121.910156 8.789062 121.984375 8.789062 122.054688 L 9.003906 282.019531 C 9.003906 284.378906 9.921875 286.578125 11.582031 288.238281 C 13.242188 289.898438 15.324219 290.449219 17.683594 290.449219 L 290.984375 290.421875 C 295.816406 290.421875 299.761719 286.476562 299.746094 281.628906 L 299.527344 121.910156 "
                                            fill-opacity="1"
                                            fill-rule="nonzero"
                                        />
                                    </g>
                                </svg>
                                <Link to={`mailto:${pageData.email}`}>
                                    {pageData.email}
                                </Link>
                            </div>
                        </div>
                    </div>

                    <img
                        className="rounded-xl max-h-[400px] object-cover md:absolute right-0 md:w-[50%]"
                        src={pageData.contactUsImage.fields.file.url}
                    />
                </div>
            </div>
            {/* <div className="wrapper">
                <div className="flex ">
                    <div></div>
                    <div className="w-[60%]">
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
                <div className="my-20">
                    <div className="w-[60%]">
                        <h2 className="text-gold mb-10 sm:pr-10 md:pr-20 text-4xl sm:text-5xl md:text-6xl uppercase font-montserrat font-bold leading-tight">
                            {pageData.yourDataTitle}
                        </h2>
                        <div className="text-white mb-10 font-poppins">
                            {documentToReactComponents(
                                pageData.yourDataDescription_
                            )}
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className=" ">
                    <div className="w-[60%]">
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
            </div> */}
            <Footer />
        </div>
    );
};
export const ContactPage = () => {
    return (
        <PageProviderContact type="contactUsPage">
            <Inner />
        </PageProviderContact>
    );
};
