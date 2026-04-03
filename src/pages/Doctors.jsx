import React from 'react';
import { Link } from 'react-router-dom';

const team = [
    {
        name: "Dr. Animesh Baruah",
        role: "Senior Consultant, Cataract & Refractive Surgeon",
        credentials: "MBBS, MS (Ophthalmology) • 15+ years experience",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbRhT0WYo_M_H04PHbgc9rXKcnkcFHzRqL3dXtyoRz8lVXDtpndK8Bi9kbfO1SCl8m95PnpPdxzGNTsNpxigT3Y5CpGOK-rIIUm4dcokwN4npXski29BpDN5iNrB9INe7zHNM8T2U9wXSqM5UjXk0c58B9UZ4Bf30vycWCN-vWk7aH6sb5bA912UEArh5Jkt2PFMvU71VnhNmmoOS1oYRESzwZ-NHrNLZWfT4HkLxQIfBvY2FzVFxJl-zAOH4yZ0wSrwJZ1SmplxE",
        tag: "Senior"
    },
    {
        name: "Dr. Sunita Kalita",
        role: "Consultant Ophthalmologist, Retina Specialist",
        credentials: "MBBS, DNB • 10+ years experience",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2r08vap-xQtDVHURPniHc_HwrRF9wf-mYJK5SCgRrQXve6yipSW6EYlaNHdijHCziybIPL54y7FlhxUiQc6syxqfoTQU6xSXI2pTnbVXHn0dbSvK06c6ZO-ImFxPEWXEov58j5zcDZrua2fb0tA-lOSlRuAcxLdtEvebY9-VTvmOGnTI5emnZXyLJ4FMpcsW_1i7M_Fp2qUsSOf8PCcLUrWYZSVmLkXTgpGPkJWmA-kzcobp-xHy4XcB7AVigh4Pvr6oI0Wp7r2Y"
    },
    {
        name: "Dr. Rajesh Sarma",
        role: "Pediatric Ophthalmologist",
        credentials: "MBBS, MD • 12+ years experience",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBozkx9jUzlrx0JVJUvKJHRmI_NfBGqEs4fqcTkAjn0WFuYAEP9i3AlJvfhF4uXwK51wYLUKa9VdZ28--NxBRpFPLIqQhIRPnL2siszHrYTlnWmxA6r6PE2SNLsZUkymwX04NWrcfZznaYisx5pRrUs2JnQzO1kfTg_YlDU26WqRzoNDAu-DKIJR5seckK64aPSznQ0INSQuH_VTRj4OhZSc0972yhaXVeyYYyasD6cyhYsfTN9_PBDxdJLPTpT9WqZ9MD6YCpJX-g"
    },
    {
        name: "Dr. Pallavi Das",
        role: "Glaucoma Specialist",
        credentials: "MBBS, MS • 8+ years experience",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWp-SY-3sxUqQxIvQTi-XYhcK2831-RGckVAauCs1hsRCvbwmJ2yQnySJJuIjKbT5uo5tEQXi5qqSgS_TM4yJWK93U3wl7ld5zu2CWwue5ftaL9IPJizWHHAGKbBSsUDHOHPnfuximOtPcxeequ0woCyOxuBMiaSjxS3qBO6QOQFwxWNf8vVMv2aJ3yDCEiwmvfjxT6IBj5ds1IW8INYkme-nYUW22oWiqDdFomwcyn1O6UTE271g5L7wze2PEfUn0j9I9Od5rTsI"
    }
];

export default function Doctors() {
    return (
        <div className="flex flex-col flex-1 max-w-7xl mx-auto w-full px-6 lg:px-8 py-12">
            {/* Hero Header Section */}
            <div className="flex flex-col gap-4 mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit">
                    <span className="material-symbols-outlined text-sm">groups</span>
                    <span className="text-xs font-bold uppercase tracking-wider">Our Medical Team</span>
                </div>
                <h1 className="text-slate-900 text-4xl md:text-5xl font-black leading-tight tracking-tight">Meet Our Expert Ophthalmologists</h1>
                <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
                    Our world-class team of specialists is dedicated to providing the highest quality eye care with precision, advanced technology, and compassionate support.
                </p>
            </div>

            {/* Doctor Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                {team.map((doc, idx) => (
                    <div key={idx} className="flex flex-col group">
                        <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl mb-4 bg-slate-200">
                            <img className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0" alt={doc.name} src={doc.image} />
                            {doc.tag && (
                                <div className="absolute bottom-4 right-4 bg-accent text-white px-2 py-1 rounded text-xs font-bold shadow-md">{doc.tag}</div>
                            )}
                        </div>
                        <h3 className="text-slate-900 text-xl font-bold mb-1">{doc.name}</h3>
                        <p className="text-primary font-semibold text-sm mb-2">{doc.role}</p>
                        <div className="flex flex-col gap-1 border-t border-slate-200 pt-3 mt-1">
                            <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                                <span className="material-symbols-outlined text-sm">school</span>
                                <span>{doc.credentials.split('•')[0].trim()}</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                                <span className="material-symbols-outlined text-sm">work_history</span>
                                <span>{doc.credentials.split('•')[1].trim()}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Clinical Philosophy Section */}
            <div className="bg-primary/5 rounded-xl overflow-hidden border border-primary/10 p-8 md:p-12 mb-20 shadow-sm">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="w-full lg:w-1/2">
                        <div className="relative rounded-lg overflow-hidden shadow-xl border-4 border-white">
                            <img className="w-full h-auto" alt="Modern eye diagnostic equipment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-hbze33sdvwmsqSe-aYWUISoeX7XWPS5_LC7koc_eVLovLjlderGM9W9GSj4e1eOG85YGBzYHwU_fjF51ACk9ez99MMXg7qGOcilRmP3pdDJ6CCez6TNRUJbund0UlXCmgkBVNl49dGiooKx9ZPbj1ApLRUae6LTvgWij9UGnzSDypBUxUAFTMZ4GB9lvWf0jFK5J3b0HdWsPEuzU6sUuqhtIWGGirl6Y1ipNYOcOV6ud3UpF3tb8c3LRfgvfr_3q2lrnIYzI8I8" loading="lazy" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col gap-6">
                        <h2 className="text-slate-900 text-3xl font-bold leading-tight">Patient-First Clinical Approach</h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            At Nalbari Eye Hospital, we prioritize your vision above all else. Our approach combines cutting-edge technology with empathetic care to ensure the best possible outcomes for every patient.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex gap-4">
                                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">verified_user</span>
                                <div>
                                    <h4 className="font-bold text-slate-900">Integrity</h4>
                                    <p className="text-sm text-slate-500 mt-1">Transparent diagnosis and honest treatment plans.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">biotech</span>
                                <div>
                                    <h4 className="font-bold text-slate-900">Innovation</h4>
                                    <p className="text-sm text-slate-500 mt-1">Continuous adoption of ophthalmic advancements.</p>
                                </div>
                            </div>
                        </div>
                        <Link to="/about">
                            <button className="flex w-fit cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-base font-bold shadow-md hover:bg-blue-800 transition-colors mt-4">
                                <span>Our Core Values</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="relative bg-slate-900 rounded-2xl p-10 md:p-16 text-center overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
                </div>
                <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl mx-auto">
                    <h2 className="text-white text-3xl md:text-4xl font-bold">Ready to see the world more clearly?</h2>
                    <p className="text-slate-300 text-lg">Schedule your comprehensive eye examination with our specialists today. Same-day appointments available for emergencies.</p>
                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                        <Link to="/contact">
                            <button className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-accent text-white text-lg font-bold hover:scale-105 transition-transform shadow-lg shadow-accent/20">
                                Book Now
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 border-2 border-slate-700 text-white text-lg font-bold hover:bg-slate-800 transition-colors">
                                Call Hospital
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
