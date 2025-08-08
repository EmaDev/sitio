import React from 'react'

const HeroSection: React.FC = () => {
    return (
        <section
            className="wrapper image-wrapper bg-full bg-image bg-overlay bg-overlay-light-600 bg-no-repeat bg-scroll 
            relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full 
            before:left-0 before:top-0 "
            style={{ backgroundImage: 'url("https://sandbox-tailwind-template.netlify.app/assets/img/photos/bg23.png")' }}
        >
            <div className="container pt-24 xl:pt-32 lg:pt-32 md:pt-32 pb-9">
                <div className="flex flex-wrap mx-0 -mt-[50px] items-center text-center lg:text-left">
                    {/* Column izquierda */}
                    <div className="xl:w-6/12 lg:w-6/12 xxl:w-5/12 w-full relative mt-[50px]">
                        <img
                            src="/assets/img/svg/doodle1.svg"
                            className="h-9 absolute hidden xl:block lg:block"
                            style={{ top: '-9%', left: '-6%' }}
                            alt="doodle"
                        />
                        <img
                            src="/assets/img/svg/doodle2.svg"
                            className="h-20 absolute hidden xl:block lg:block"
                            style={{ bottom: '9%', right: '-22%' }}
                            alt="doodle"
                        />

                        <h1 className="text-[calc(1.375rem_+_1.5vw)] xl:text-[2.5rem] font-semibold leading-[1.15] mb-4 animate-slideInDownDelayed2">
                            Manage all your bills, accounts and budgets in{' '}
                            <span className="text-gradient gradient-7">one place.</span>
                        </h1>

                        <p className="text-[1.2rem] leading-[1.5] font-normal mb-7 animate-slideInDownDelayed3">
                            Sandbox is available to download from both App Store and Google Play Store.
                        </p>

                        <div className="flex justify-center lg:justify-start animate-slideInDownDelayed4 gap-2">
                            <a href="#">
                                <img
                                    src="/assets/img/photos/button-appstore.svg"
                                    className="h-12 rounded-xl"
                                    alt="Download on App Store"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src="/assets/img/photos/button-google-play.svg"
                                    className="h-12 rounded-xl"
                                    alt="Download on Google Play"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Column derecha */}
                    <div className="xl:w-6/12 lg:w-6/12 w-full ml-auto mt-[50px] mb-[-10rem] xxl:mb-[-15rem] animate-slideInDownDelayed1">
                        <figure className="m-0 p-0">
                            <img
                                className="w-full h-auto max-w-full"
                                src="https://sandbox-tailwind-template.netlify.app/assets/img/photos/devices3@2x.png"
                                srcSet="/assets/img/photos/devices3@2x.png 2x"
                                alt="Devices"
                            />
                        </figure>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden z-[1]">
                <div className="divider text-[#fefefe] mx-[-0.5rem]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
                        <g fill="currentColor">
                            <polygon points="1440 100 0 100 0 85 1440 0 1440 100"></polygon>
                        </g>
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
