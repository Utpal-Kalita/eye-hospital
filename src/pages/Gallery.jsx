import React, { useState } from 'react';

const galleryItems = [
    {
        category: "Hospital Infrastructure",
        subCategory: "Infrastructure",
        title: "Main Hospital Lobby",
        description: "Our modern and welcoming patient reception area.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdyutVusujXZNZv6YGe3yl7cMygd5mm4UabIRi0VUuxRm-eSABAtMnsk_4UclM-Hb2cZwsgsk0gdZtnOBPIr6sWnb9oSU6a2repJomhsCiy4CRopWTxQav2m-H5N4vjJp8u143CQHGtOgcWjiEFKtSlulXbzjrj-Q3kgAzY0Tq4bY7aF9zxfkuObtL-3jtrwasYAUXKgxb8ysWiKqCrYtOmFRoiuckTxTz-DQHXW92QVLMggUEKbiBkBbkpQ8eN9BtZ29__ZadL_w",
        aspect: "aspect-[4/5]"
    },
    {
        category: "Advanced Equipment",
        subCategory: "Technology",
        title: "Retinal Imaging",
        description: "State-of-the-art diagnostic imaging suite.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnMABOOPe8IMZtUnolGgwYyjjsozN8YKfDyr5iAZCpo22cnO4dEqoScQ2nl7K32YrC9bXEYtS95-lpfuNVSfOCY9ZKQ78jK-c46P8TLoiLZ6b6xQ4U4lTRKjQT4RYBweV_2Uv7r8uWH5oCl4qp5ONfBKoHKIyobQvUX6hxnzdQzsFD_7aOSx1XQ-YYFZzR52WkoP_d3HHFAyc6_DugNQ2qjpTadCOsenTJtD5MULD7BaVw5phaFP-z-Dcf9N3-kHigRPHaPl90uzc",
        aspect: "aspect-square"
    },
    {
        category: "Community Eye Camps",
        subCategory: "Community",
        title: "Rural Outreach",
        description: "Free checkups at Nalbari district camps.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBn0f9Ikkf7_T4p7luLfBtiNxLpUVLcm8FacUMlR35OGzbm43eNdgxzdOPk-pXiSZ-eFSR2elndAzg9U_G4AeyRr_nahVWG8Fy_F0yAwicq24_aVCtnq4N1sQyb8g2fedCCYv_TYSSeHZqdLU-vLJ5Ffnexmt2Z9otCfNq-gKc9JETrsB3KgZ9VCaxetrnkDm2mTNYDoXNbAPG0NB0gKBx9bE9-dXvJLQw8cJUZilPQEcA1pVmbQBjh6YSWgRHyeOFDN2M1JxOPrsM",
        aspect: "aspect-square"
    },
    {
        category: "Hospital Infrastructure",
        subCategory: "Facilities",
        title: "Operation Theater",
        description: "Precision surgical environment.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjkBWfobn37FXeDtRi50-LnKWT6_Y9QB99HrWpA3r27bEipHmMxMQYg0gAFrallDIfYDtiheDlXoGxrkP4crCEm3c2aWOsbKnQZm6eC6fJQiu5zmsIW26M__vlBLNh7w_8YSMnK24tCpEYUN6QgXH57qpA0SdlX6ZLQA0zC8_Fkke7RmP-cPq9HGEUUWLx7ZXeUQhtBBizV3nFugPkJXVR9VNND6BzfeTdV2hzznDyWGOujMnES39IGnojAJ2SgYN0YQ6ImCk55Oc",
        aspect: "aspect-[3/4]"
    },
    {
        category: "Patient Care",
        subCategory: "Patient Care",
        title: "Personalized Consultation",
        description: "Every patient receives dedicated care.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9m5j7vV_ei1NhnWC1Ns7HR80ia-WDwEQDf_msQqjVeltUdT0JsK4cs9i_smt2Lj_Qs1Ds1kA-kR1JAS69SnlsURJSQeQdco9aEsDx5iaYElqKuT-qR35juIeEVaHn8IjQAKCaT2XX4zYX_MqZefSFUMnPN4Xkucb_EzybdbzsVCPvWzYl5t8kpfeBRpskKoEYtv2sgHD9PlXwG4wef13ipl5dimjZfHLI5ZF93_8ILiAhul5nT4-Ay1OGlgPNR7qyJrLJkjwJUdg",
        aspect: "aspect-square"
    },
    {
        category: "Hospital Infrastructure",
        subCategory: "Infrastructure",
        title: "Recovery Wing",
        description: "Comfortable recovery facilities for post-op.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPd4brqcWBpCTIiWOF75p1iYXab9HWxXGqagYYeMJCC2e1ZofPNdqB_f4REN8q8qUOpd87LV9H-YVufh2GaQkSNAfxDTe0qptAHHunNYLp6_5mQLJG3XBkGU9x89ANfwOu_YelcwjVKvalqVRfHXvxKoYd6z6PPu2C79GfeBWREtH9GbVSzPExLwP3koNCvm-OnCYavpy8e95kGybkw0C_IzLg3AUO8L2TyXC7J6GinSDk8HMw0cHjyFYlr7U7G9zc3Bdfknzedj0",
        aspect: "aspect-[4/5]"
    },
    {
        category: "Hospital Infrastructure",
        subCategory: "Facilities",
        title: "Optical Center",
        description: "In-house premium eyewear gallery.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNMZmjCV-G9aWmHrwLYBGXC4zRLh4pWZUYdMGpVjztVplc8B7FzqEFSD0R5VuEBBew351E-U3gdxaAhZ_uMotdxqdizupUcfRg_0CuJYLu382xA21D4AZYTemyUuHgSr3sYc3iDAYscGNmVZw6Pzj3VARfk5q6ynIN0dvNCeKUYVniNJ2n-SaLv0S6T-K7lpDCvi2yk-_wOajDXAj5qW_J60QM8ncLQKodzTXMh6ibI2uSk7BXDfWhuq-k7Co2FVyt_qW9t9ZtwfM",
        aspect: "aspect-square"
    },
    {
        category: "Community Eye Camps",
        subCategory: "Impact",
        title: "Vision for All",
        description: "Empowering communities through clear sight.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwiKBoUl4hocPdkvqK2V7_azR4fN1xySFfrl_7_alNO8zWx-bLHX__EdbiajzM_1smVp2XWeku_w2816H1RpBFZQoWtTborKX9Nr8H_GZXTHSOm7APmlyFxkhHyFBKZYbGQJv42ce38rqMvfR1tHb8nf3Z1Zt2SAupmH4kKgGNgyzQIUVhyJ-FIk4LZzmE7CLRVH0gNGNhXlVnE8igbzqQIuKwokMa_b-t0avFsZy4jDKcEZ20HVSrnwPWw3uLm5rS8QZP9eMqCTo",
        aspect: "aspect-[3/4]"
    }
];

const filters = [
    "All Photos",
    "Hospital Infrastructure",
    "Advanced Equipment",
    "Patient Care",
    "Community Eye Camps"
];

export default function Gallery() {
    const [activeFilter, setActiveFilter] = useState("All Photos");

    const filteredItems = galleryItems.filter(item =>
        activeFilter === "All Photos" ? true : item.category === activeFilter
    );

    return (
        <div className="w-full">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">

                {/* Header Section */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                        Our Facilities & Community Impact
                    </h1>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        A visual journey through our commitment to eye care excellence, advanced medical infrastructure, and outreach programs.
                    </p>
                </div>

                {/* Filterable Categories */}
                <div className="flex flex-wrap justify-center gap-3 mb-10 md:mb-16">
                    {filters.map((filter, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${activeFilter === filter
                                ? "bg-primary text-white shadow-md border border-primary"
                                : "bg-white text-slate-700 border border-slate-200 hover:border-primary hover:text-primary"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredItems.map((item, idx) => (
                        <div key={idx} className={`group relative overflow-hidden rounded-xl bg-slate-200 cursor-pointer shadow-sm hover:shadow-xl transition-all ${item.aspect}`}>
                            <img
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                alt={item.title}
                                src={item.image}
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-accent text-xs font-bold uppercase tracking-wider mb-2">{item.subCategory}</span>
                                <h3 className="text-white text-lg font-bold mb-1">{item.title}</h3>
                                <p className="text-slate-200 text-sm leading-snug">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredItems.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-slate-500 text-lg">No photos found in this category.</p>
                    </div>
                )}

            </main>

            {/* Overlay "Lightbox" Placeholder Hint */}
            <div className="fixed bottom-6 right-6 hidden md:block z-50">
                <div className="bg-slate-900/90 text-white px-5 py-3 rounded-full text-sm font-medium shadow-2xl backdrop-blur-sm border border-slate-700/50 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">info</span>
                    Click any image to view in high resolution
                </div>
            </div>
        </div>
    );
}
