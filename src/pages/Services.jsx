import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const servicesList = [
    {
        icon: "eye_tracking",
        title: "Cataract Surgery (Phaco)",
        description: "Advanced stitchless surgery for clear vision restoration using ultrasonic technology and premium lens implants."
    },
    {
        icon: "flare",
        title: "LASIK & Refractive",
        description: "State-of-the-art laser vision correction procedures to eliminate dependence on glasses or contact lenses."
    },
    {
        icon: "monitoring",
        title: "Glaucoma Management",
        description: "Comprehensive screening, pressure management, and advanced medical therapy to prevent vision loss."
    },
    {
        icon: "view_in_ar",
        title: "Retina Services",
        description: "Specialized treatment for retinal detachment, diabetic retinopathy, and other complex vitreoretinal disorders."
    },
    {
        icon: "child_care",
        title: "Pediatric Ophthalmology",
        description: "Expert eye care tailored for children and infants, specializing in squint, lazy eye, and childhood myopia."
    },
    {
        icon: "eyeglasses",
        title: "Optometry & Optical Shop",
        description: "Precision eye testing and a wide range of designer frames, high-index lenses, and quality contact lenses."
    }
];

const faqs = [
    {
        q: "What is Phaco surgery?",
        a: "Phacoemulsification (Phaco) is a modern cataract surgery where an ultrasonic device breaks up the cloudy lens for removal through a tiny, self-healing incision. It offers faster recovery and minimal discomfort."
    },
    {
        q: "How long does LASIK recovery take?",
        a: "Most patients experience improved vision within 24 hours. Full stabilization typically takes a few weeks, but you can usually return to work and light activities the very next day."
    },
    {
        q: "Do you offer contact lens fitting?",
        a: "Yes, we provide comprehensive contact lens consultations including specialty fittings for keratoconus, astigmatism, and multifocal needs at our specialized optometry department."
    },
    {
        q: "When should children have their first eye exam?",
        a: "We recommend a baseline comprehensive eye exam at 6 months of age, then again at 3 years, and before they start school to ensure proper visual development."
    }
];

export default function Services() {
    const [openFaq, setOpenFaq] = useState(0);

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="py-14 sm:py-16 md:py-24 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 sm:mb-6">Our Specialized Eye Care Services</h2>
                    <p className="mx-auto max-w-2xl text-base sm:text-lg text-slate-600">
                        Comprehensive eye care with advanced technology and expert surgeons dedicated to preserving your vision.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-12 sm:py-16 bg-background-light">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {servicesList.map((service, index) => (
                            <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-5 sm:mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-2xl sm:text-3xl">{service.icon}</span>
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                                <p className="text-slate-600 mb-5 sm:mb-6 text-sm sm:text-base leading-relaxed">
                                    {service.description}
                                </p>
                                <Link to="/contact" className="inline-flex items-center text-primary font-bold text-sm hover:underline">
                                    Consult Doctor <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-slate-600 text-sm sm:text-base">Find answers to common questions about our procedures and treatments.</p>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <details
                                key={index}
                                className="group bg-background-light rounded-xl overflow-hidden"
                                open={openFaq === index}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenFaq(openFaq === index ? -1 : index);
                                }}
                            >
                                <summary className="flex cursor-pointer items-center justify-between p-4 sm:p-6 text-slate-900 hover:bg-slate-100 transition-colors">
                                    <span className="font-semibold">{faq.q}</span>
                                    <span className={`material-symbols-outlined transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>expand_more</span>
                                </summary>
                                {openFaq === index && (
                                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-slate-600 leading-relaxed text-sm sm:text-base">
                                        {faq.a}
                                    </div>
                                )}
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="bg-primary rounded-2xl p-6 sm:p-10 md:p-16 text-center text-white relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 relative z-10">Need a consultation? Book your slot today.</h2>
                        <p className="text-secondary mb-8 sm:mb-10 text-base sm:text-lg relative z-10 opacity-90">Our specialists are ready to help you see the world more clearly.</p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center relative z-10">
                            <Link to="/contact">
                                <button className="w-full sm:w-auto bg-accent text-white px-8 py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-amber-600 transition-colors shadow-lg">
                                    Schedule Appointment
                                </button>
                            </Link>
                            <Link to="/contact">
                                <button className="w-full sm:w-auto border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white/10 transition-colors">
                                    Contact Support
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
