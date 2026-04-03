import React from 'react';

export default function About() {
    return (
        <div className="w-full">
            <section className="relative min-h-[420px] md:min-h-[60vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent z-10"></div>
                    <img className="w-full h-full object-cover" alt="Modern hospital building exterior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdYBSD9tJlsflDFJhs4PIcEVlJvRbB-rVz__7S_Cf7E6zELdHOy2JiRwuk5fb9ANpReA6ONPGJ-qdPs_VQXwgKUNh3z6uG6vFIPHWkyHrMuxAHOK-FwGQxEX_uO1HYb18e5INtwL2ceWvbcMR1Xy_tDtNcM1z8_uFv3MYml9pgByo5ZV9Uikng2c15OemK-ZSVXlX9BAoLxTYH8Nef1sFs168-tueWzO7NTG4Z3KGrv3NhBzxoDiK3fwHDpdzWgrYUhFNfnSvjXIU" fetchpriority="high" loading="eager" />
                </div>
                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 w-full">
                    <div className="max-w-2xl">
                        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">Decades of Visionary Care.</h1>
                        <p className="text-base sm:text-xl text-white/90 leading-relaxed max-w-xl">Dedicated to restoring sight and enhancing lives across the Nalbari district and beyond through clinical excellence and compassion.</p>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
                    <div className="space-y-6 md:space-y-8">
                        <div>
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Story</span>
                            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 md:mb-6 text-slate-900">Serving the Heart of Nalbari Since 1995</h2>
                            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
                                Established with a commitment to restoring sight, Nalbari Eye Hospital has been a pillar of eye care excellence in the Nalbari district for decades. What started as a small clinic has blossomed into a premier multi-specialty center.
                            </p>
                            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                                Our journey is defined by the trust of thousands of patients across Assam. We have consistently evolved, integrating the latest global practices with a deep-rooted understanding of local community needs.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 sm:gap-8 pt-6 md:pt-8 border-t border-slate-200">
                            <div>
                                <p className="text-3xl sm:text-4xl font-bold text-primary">250k+</p>
                                <p className="text-slate-500 font-medium">Surgeries Performed</p>
                            </div>
                            <div>
                                <p className="text-3xl sm:text-4xl font-bold text-primary">28+</p>
                                <p className="text-slate-500 font-medium">Years of Experience</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                        <img className="w-full h-auto" alt="Professional ophthalmologist examining a patient" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbCbSXrGNie_ZosZgVY8BnaxyASQBU4UkkerOKBv1jnNcCw53ODOPVDsnhHnGnsTSvJCK9iDUQokrTr4cl94fwjHaR3peEUEd1qXCHuspryQQusHpnYmNT4j9jaRe1PfLEetEalzOKgo-ouyhH-odFruuyc1_rJtAAFSvw5HeTykQb4fxQHaITBPmGpegORNGILEDp1KwRwhZlGRzVtmKLimD_-oiizwwokCNCSt-HzShq5XDU4tTV79CkfB984YdA832XY92BvS4" loading="lazy" />
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
                    <div className="p-6 sm:p-10 bg-white/5 rounded-2xl border border-white/10">
                        <span className="material-symbols-outlined text-4xl sm:text-5xl mb-6 text-white/80">visibility</span>
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h3>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed">To provide world-class, affordable, and accessible eye care services to all segments of society, utilizing cutting-edge technology and human compassion.</p>
                    </div>
                    <div className="p-6 sm:p-10 bg-white/5 rounded-2xl border border-white/10">
                        <span className="material-symbols-outlined text-4xl sm:text-5xl mb-6 text-white/80">lightbulb</span>
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4">Our Vision</h3>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed">To be the most trusted eye care institution in Northeast India, setting benchmarks in clinical outcomes, patient safety, and community service.</p>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 px-4 sm:px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">Advanced Technology</span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-slate-900">World-Class Facilities</h2>
                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-base sm:text-lg">We invest in the best to ensure you see the best. Our hospital is equipped with industry-leading diagnostic and surgical suites.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
                            <img className="w-full h-44 sm:h-48 object-cover rounded-xl mb-6" alt="Zeiss" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGqPwbsdigtIFo1G-nAlhUSSsB2Tk2lceNnxldohiKwztfrOyCcKfsKBxEOZb2WMeAAotR-7_NESdfBVhDY631B3W0WbS97bEanZRYxkUQnbYqDjlX1pDYZmbfm3IcXvEb-muyPS_uFi0FfOTr3lKE8l-CCM_hk8i26Hf6ylq9ZkJYNalgljpMOsLn-YFhCJB0TeUpJLEINE673oPgVRVXY1JIFZ28poIzug0H2aRxZdIBPgD6Q4Xxs_Dw4JB9taKvZn1x6L-MhtM" loading="lazy" />
                            <h4 className="text-lg sm:text-xl font-bold mb-3 text-slate-900">Zeiss Diagnostic Suite</h4>
                            <p className="text-slate-600 text-sm sm:text-base">Featuring the latest Humphrey Field Analyzer and Zeiss OCT for precision imaging and glaucoma management.</p>
                        </div>
                        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
                            <img className="w-full h-44 sm:h-48 object-cover rounded-xl mb-6" alt="Modular OTs" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5ffd2--vfSUJ_0SbQvWF6X5TkHWyaeNLlmW6XAuxUkxKEtOfTC-ayuohNAEESKfFqj4yRyhSEBqlNLBpU67F-DQQPKDv43QQ3zcA_Xax74ltViW1v_RL4Ip63K1CpucqebTbUehpK5derUWj3wgHJqewrc1TrKYWPygUMMyzRYwfdW4w3ujM9XJQfpxOjGOUWa-uZ68yoMviXe_KJgiSJeIGjoYecAvDlpkcyeh4F8XtGA0qIP7v3myEslFM_tEdii6yP2LRSwPY" loading="lazy" />
                            <h4 className="text-lg sm:text-xl font-bold mb-3 text-slate-900">Modular OTs</h4>
                            <p className="text-slate-600 text-sm sm:text-base">Sterile, high-efficiency operating theaters equipped with Lumera microscopes for complex microsurgeries.</p>
                        </div>
                        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
                            <img className="w-full h-44 sm:h-48 object-cover rounded-xl mb-6" alt="Patient Comfort" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBynMWXpG1Mxizc_mJGV9X5xhz8DJiYFgq4zqlbTRa3xtpLOTrhat3mUUrhlI2hnmndZh4soui74ygtH-pvnr2rgK5IwAb8xDrDgY5KYlmCxfQp8n_UT6pfh434fVy1tN2I0P6oWjKFjpQWCCjKgN5f-wpScYOVuRoKFUXLj0pyom4Ov5OSfZfopiARTcgzC29KJDRH7lyuQtV0QrDDKowfP1TwCMBe1pME-nGImF0DCmIYMNuMqQF7EdI4FiC2tE928INPZXjf0jc" loading="lazy" />
                            <h4 className="text-lg sm:text-xl font-bold mb-3 text-slate-900">Patient Comfort</h4>
                            <p className="text-slate-600 text-sm sm:text-base">Air-conditioned recovery bays and priority lounges designed for a stress-free healing environment.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-slate-200">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-10 md:mb-12 text-slate-900">Accreditations & Trust</h2>
                    <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">NABH</div>
                            <p className="text-sm font-medium text-slate-900">Certified Quality</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">ISO</div>
                            <p className="text-sm font-medium text-slate-900">9001:2015</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">NPCB</div>
                            <p className="text-sm font-medium text-slate-900">Govt Partner</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 px-4 sm:px-6 bg-primary/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                <img className="rounded-xl shadow-lg h-64 w-full object-cover" alt="Community Outreach" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDETLwwyCA9IgQlzNHgKVUAk92tw9aQIzYjLX02HHEUx1zHzW6vAkxm88mlUfZ0VcWSm8aqOipDWTN9P1rZNoc8GG6T6YJWBGFX5g2aeTSd1xbIrcSB00ET60ibMnVEwXY7MHmPdBpZJhpmo6sph8ZU4RvxrMpQ2dPbmqOiKk9dI1eVgxzlFTXzborE9Cug8x0nLcv8dvCfEt7Aeu17egsLXmljujI5-6HJDgaeKVMItQUdWn4xvu1furNrNFEUzfO2rywtNoeNJ5A" loading="lazy" />
                                <img className="rounded-xl shadow-lg h-64 w-full object-cover mt-8" alt="Medical Camp" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVt9f7DRAcd9JIZYmxNAjQuHNkWbTlH1n3UAa62XoJ6OZZcFdYNxPjYZpsUJHTuYH4nGfbusFKE7nveqH_h9CBAsOz4YR-jSy9Omv-I4fLJs3Ve-eglTHr0XG3Es75QrFoCPeWIcebPNwL1_-BHH9CaQ7qXRgXjvO4xOqJ7YPCFJFsMPdwccFJNhLEkQ_PufKHhGptrA3w1hmWmuYRQvJIEJR3G2P9SA5IcK1TnEQBAY7gdKPYjSSaUWtShN3ARFvCK1nb20ayK1s" loading="lazy" />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 space-y-6">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">Community Outreach</span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Bringing Light to Rural Assam</h2>
                            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                                Our commitment extends beyond the hospital walls. We regularly conduct free eye screening and cataract surgery camps in the most remote corners of Assam.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span className="font-medium text-slate-700">Over 500 free camps conducted annually</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span className="font-medium text-slate-700">Free cataract surgeries for underprivileged patients</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span className="font-medium text-slate-700">School screening programs for early detection</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
