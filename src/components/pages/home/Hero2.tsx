import React from 'react'

export const Hero2 = () => {
    return (
        <div className="card !bg-[#eff7fa] !rounded-[0.8rem] !mt-2 !mb-[4rem] xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem]">
            <div className="card-body xl:!p-[2.5rem] lg:!p-[2.5rem] md:!p-[2.5rem] xl:!py-12 xl:!px-20 p-[40px]">
                <div className="flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-[-20px] !mt-[-50px] items-center">

                    {/* Imagen + mini card */}
                    <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] !px-[15px] xl:px-0 lg:!px-[20px] !mt-[50px] max-w-full xl:!order-2 lg:!order-2 flex !relative">
                        <img
                            className="max-w-full h-auto !ml-auto !mx-auto xl:!mr-8 lg:!mr-8"
                            src="https://sandbox-tailwind-template.netlify.app/assets/img/photos/co3@2x.png"
                            srcSet="./assets/img/photos/co3@2x.png 2x"
                            alt="image"
                            data-cue="fadeIn"
                            data-show="true"
                            style={{
                                animationName: 'fadeIn',
                                animationDuration: '700ms',
                                animationTimingFunction: 'ease',
                                animationDelay: '0ms',
                                animationDirection: 'normal',
                                animationFillMode: 'both',
                            }}
                        />

                        {/* Mini card */}
                        <div
                            data-cue="slideInRight"
                            data-delay="300"
                            data-show="true"
                            style={{
                                animationName: 'slideInRight',
                                animationDuration: '700ms',
                                animationTimingFunction: 'ease',
                                animationDelay: '600ms',
                                animationDirection: 'normal',
                                animationFillMode: 'both',
                            }}
                        >
                            <div
                                className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !absolute"
                                style={{ bottom: '10%', right: '-3%' }}
                            >
                                <div className="card-body py-4 px-5">
                                    <div className="flex flex-row items-center">
                                        <div>
                                            <div className="icon btn btn-circle btn-md btn-soft-aqua pointer-events-none !mx-auto !mr-[.75rem] !w-[2.2rem] !h-[2.2rem] !inline-flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%]">
                                                <i className="uil uil-users-alt" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="counter !mb-0 whitespace-nowrap" style={{ visibility: 'visible' }}>
                                                25000+
                                            </h3>
                                            <p className="!text-[0.7rem] leading-normal !mb-0 whitespace-nowrap">Happy Clients</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Texto y botones */}
                    <div
                        className="xl:w-6/12 lg:w-6/12 flex-[0_0_auto] !px-[15px] xl:px-0 lg:!px-[20px] !mt-[50px] max-w-full text-center lg:text-left xl:text-left"
                        data-cues="slideInDown"
                        data-group="page-title"
                        data-delay="600"
                        data-disabled="true"
                    >
                        <h1
                            className="xl:!text-[2.4rem] !text-[calc(1.365rem_+_1.38vw)] !leading-[1.15] !font-DMSerif !font-normal !tracking-normal !mb-5 [word-spacing:normal!important]"
                            data-cue="slideInDown"
                            data-group="page-title"
                            data-delay="600"
                            data-show="true"
                            style={{
                                animationName: 'slideInDown',
                                animationDuration: '700ms',
                                animationTimingFunction: 'ease',
                                animationDelay: '600ms',
                                animationDirection: 'normal',
                                animationFillMode: 'both',
                            }}
                        >
                            Crafting project specific solutions with expertise.
                        </h1>
                        <p
                            className="lead !text-[1.05rem] !leading-[1.5] font-medium !mb-7 xl:!pr-10"
                            data-cue="slideInDown"
                            data-group="page-title"
                            data-delay="600"
                            data-show="true"
                            style={{
                                animationName: 'slideInDown',
                                animationDuration: '700ms',
                                animationTimingFunction: 'ease',
                                animationDelay: '900ms',
                                animationDirection: 'normal',
                                animationFillMode: 'both',
                            }}
                        >
                            We're a company that focuses on establishing long-term relationships with customers.
                        </p>

                        {/* Botones */}
                        <div
                            className="flex justify-center lg:!justify-start xl:!justify-start"
                            data-cues="slideInDown"
                            data-group="page-title-buttons"
                            data-delay="900"
                            data-cue="slideInDown"
                            data-disabled="true"
                            data-show="true"
                            style={{
                                animationName: 'slideInDown',
                                animationDuration: '700ms',
                                animationTimingFunction: 'ease',
                                animationDelay: '900ms',
                                animationDirection: 'normal',
                                animationFillMode: 'both',
                            }}
                        >
                            <span
                                data-cue="slideInDown"
                                data-group="page-title-buttons"
                                data-delay="900"
                                data-show="true"
                                style={{
                                    animationName: 'slideInDown',
                                    animationDuration: '700ms',
                                    animationTimingFunction: 'ease',
                                    animationDelay: '1200ms',
                                    animationDirection: 'normal',
                                    animationFillMode: 'both',
                                }}
                            >
                                <a
                                    href="#"
                                    className="btn btn-lg btn-aqua !text-white !bg-[#54a8c7] border-[#54a8c7] hover:text-white hover:bg-[#54a8c7] hover:!border-[#54a8c7] focus:shadow-[rgba(79,152,181,1)] active:text-white active:bg-[#54a8c7] active:border-[#54a8c7] disabled:text-white disabled:bg-[#54a8c7] disabled:border-[#54a8c7] !rounded-[50rem] !mr-2"
                                >
                                    Explore Now
                                </a>
                            </span>
                            <span
                                data-cue="slideInDown"
                                data-group="page-title-buttons"
                                data-delay="900"
                                data-show="true"
                                style={{
                                    animationName: 'slideInDown',
                                    animationDuration: '700ms',
                                    animationTimingFunction: 'ease',
                                    animationDelay: '1500ms',
                                    animationDirection: 'normal',
                                    animationFillMode: 'both',
                                }}
                            >
                                <a
                                    href="#"
                                    className="btn btn-lg btn-outline-aqua !rounded-[50rem] !text-[#54a8c7] !border-[#54a8c7] hover:!bg-[#54a8c7] hover:!text-white"
                                >
                                    Contact Us
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
