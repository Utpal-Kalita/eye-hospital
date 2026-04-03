import React from 'react';
import { Link } from 'react-router-dom';
import { hospitalData } from '../data/mockData';
import ServiceCard from '../components/ServiceCard';
import DoctorCard from '../components/DoctorCard';
import TestimonialCard from '../components/TestimonialCard';

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[600px] flex items-center overflow-hidden bg-primary">
                <div className="absolute inset-0 opacity-40">
                    <img alt="Modern Ophthalmic Surgical Suite" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG-vaI_Wy9jSzv1b3ky02X7N9FWbBiEzY32Zs9HQsl0-6rl9zgG2IMavi-zLa4xFX94l2TUX2wSSf6AaqYwNNntBj0d3yczVCZqbMPz_ibouZ-gFHNr1xjMJl7x6gMdk16_DdvSgj30p7SF0CGTsWn8Aozev1c72lORjbIqbcSfOsNgGi9YUnrSCBmfVaoZS9ll6U-M8nyaQ-75QdPmWyGRe5lEnxe33vJsY3CQCWjScHbyEjnXBXX8_RnA3pIBRvL_NjtSCnEzVQ" fetchpriority="high" loading="eager" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
                    <div className="max-w-2xl text-white">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent font-semibold text-xs tracking-wider uppercase mb-6">
                            Trusted by 50,000+ Patients
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                            World-Class Eye Care in Nalbari
                        </h2>
                        <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed font-light">
                            Experience advanced expertise and compassionate care for your vision. Our specialists are dedicated to providing the highest standards of ophthalmic treatment using cutting-edge technology.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact">
                                <button className="bg-accent hover:bg-amber-600 w-full sm:w-auto text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-accent/30">
                                    Book Your Visit <span className="material-symbols-outlined">calendar_month</span>
                                </button>
                            </Link>
                            <Link to="/services">
                                <button className="bg-white/10 hover:bg-white/20 w-full sm:w-auto backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                                    View Services <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Bar / Stats */}
            <section className="relative z-10 -mt-12 max-w-7xl mx-auto px-4">
                <div className="bg-white rounded-2xl shadow-2xl shadow-primary/10 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 p-8">
                    {hospitalData.stats.map((stat, i) => (
                        <div key={i} className="flex flex-col items-center justify-center py-4 lg:py-0 text-center">
                            <span className="text-4xl font-black text-primary mb-2">{stat.value}</span>
                            <span className="text-sm font-medium text-slate-500">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Key Services */}
            <section className="py-24 bg-background-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-3">Our Expertise</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-white">Specialized Eye Care Services</h3>
                        <p className="mt-4 text-slate-200 max-w-2xl mx-auto">Comprehensive solutions for all your visual health needs, from routine checkups to complex surgeries.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {hospitalData.services.slice(0, 4).map(service => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Doctors */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div className="max-w-xl">
                            <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-3 text-left">Our Team</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-white">Lead Ophthalmic Surgeons</h3>
                            <p className="mt-4 text-slate-200">Our surgeons are world-trained experts committed to restoring and preserving your sight.</p>
                        </div>
                        <Link to="/doctors" className="text-primary font-bold border-b-2 border-primary pb-1 flex items-center gap-2 self-start">
                            Meet All Doctors <span className="material-symbols-outlined">group</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {hospitalData.doctors.slice(0, 3).map(doc => (
                            <DoctorCard key={doc.id} doctor={doc} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-secondary/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-3">Testimonials</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-white">Patient Stories</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {hospitalData.testimonials.slice(0, 3).map(test => (
                            <TestimonialCard key={test.id} testimonial={test} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
