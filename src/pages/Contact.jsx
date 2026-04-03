import React from 'react';
import { hospitalData } from '../data/mockData';

export default function Contact() {
    return (
        <div className="flex-1 max-w-[1200px] mx-auto w-full px-4 sm:px-6 py-8 md:py-16">
            {/* Hero Header */}
            <div className="mb-12">
                <h1 className="text-slate-900 text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tighter mb-4">Contact & Appointments</h1>
                <p className="text-slate-600 text-base sm:text-lg max-w-2xl">Quality eye care is just a message away. Reach out to our specialist team in Nalbari, Assam for consultations, surgeries, or routine check-ups.</p>
            </div>

            {/* Two-Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16">

                {/* Left Column: Contact Details & Map */}
                <div className="flex flex-col gap-8">
                    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-slate-200">
                        <h2 className="text-primary text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined">contact_support</span>
                            Hospital Contact Details
                        </h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                    <span className="material-symbols-outlined">call</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Phone</p>
                                    <p className="text-lg font-semibold text-slate-800">{hospitalData.contactInfo.phones[0]}</p>
                                    <p className="text-sm text-slate-500">Emergency: {hospitalData.contactInfo.emergency}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                    <span className="material-symbols-outlined">mail</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Email</p>
                                    <p className="text-lg font-semibold text-slate-800">{hospitalData.contactInfo.email}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                    <span className="material-symbols-outlined">location_on</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Address</p>
                                    <p className="text-lg font-semibold text-slate-800 whitespace-pre-line">{hospitalData.contactInfo.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="h-72 sm:h-80 w-full bg-slate-200 rounded-xl overflow-hidden relative border border-slate-200 shadow-inner group">
                        <img className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" alt="Map location" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgG4hsp1nnGFaFQoLOgg-Wr7AMuSwuzFS_3VmqIVf3-GdBjVZRyhmjrpcByfNy2Mh-o_oTyqdl2dYyJBSRAY0uPLYPOuj65ieTgHUi20GqUmADdEKcd_E9fkrp5CN1PlRvQdqXEl_1fcB6H0GBpkYU_kuZmwpYGYerGvCmapm4aa7PX0_aiVuUEem3HveOIOl6F0EMWrvQUPCV8p_2mgxQG2o1ExfSSL5HODucBvVnckLYRGZgmC8AcymTpdE2F0lywKl-dyP6Omw" loading="lazy" />
                        <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
                        <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="absolute bottom-4 left-4 right-4 bg-white p-3 rounded-lg shadow-lg flex items-center justify-between hover:bg-slate-50 transition-colors">
                            <span className="text-xs font-bold text-slate-700">Open in Google Maps</span>
                            <span className="material-symbols-outlined text-primary">open_in_new</span>
                        </a>
                    </div>
                </div>

                {/* Right Column: Appointment Form */}
                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border-t-4 border-primary">
                    <h2 className="text-slate-900 text-xl sm:text-2xl font-bold mb-2">Request an Appointment</h2>
                    <p className="text-slate-500 mb-8">Fill in the details below and we'll confirm your slot via SMS/Call within 2 hours.</p>
                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Full Name</label>
                                <input className="w-full rounded-lg border-slate-200 focus:border-primary focus:ring focus:ring-primary/20 transition-all" placeholder="John Doe" type="text" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                                <input className="w-full rounded-lg border-slate-200 focus:border-primary focus:ring focus:ring-primary/20 transition-all" placeholder="+91" type="tel" required />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Email Address</label>
                            <input className="w-full rounded-lg border-slate-200 focus:border-primary focus:ring focus:ring-primary/20 transition-all" placeholder="email@example.com" type="email" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Preferred Date</label>
                                <input className="w-full rounded-lg border-slate-200 focus:border-primary focus:ring focus:ring-primary/20 transition-all" type="date" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Department</label>
                                <select className="w-full rounded-lg border-slate-200 focus:border-primary focus:ring focus:ring-primary/20 transition-all">
                                    <option>General Eye Checkup</option>
                                    <option>Cataract Surgery</option>
                                    <option>Glaucoma Treatment</option>
                                    <option>Pediatric Ophthalmology</option>
                                    <option>Refractive Surgery (LASIK)</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Message (Optional)</label>
                            <textarea className="w-full rounded-lg border-slate-200 focus:border-primary focus:ring focus:ring-primary/20 transition-all" placeholder="Describe your concerns..." rows="3"></textarea>
                        </div>

                        <button className="w-full bg-accent text-white py-4 rounded-lg font-bold text-lg hover:bg-amber-600 shadow-lg shadow-accent/30 transition-all flex items-center justify-center gap-2" type="submit">
                            Confirm Appointment Booking
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </form>
                </div>
            </div>

            {/* Emergency Info Section */}
            <div className="bg-red-50 border-2 border-red-100 rounded-2xl p-6 sm:p-8 mb-16 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
                <div className="bg-red-600 text-white p-4 sm:p-5 rounded-full animate-pulse flex-shrink-0">
                    <span className="material-symbols-outlined text-3xl sm:text-4xl leading-none">e911_emergency</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-red-800 text-xl sm:text-2xl font-black mb-2 uppercase tracking-tight">Eye Emergency or Trauma?</h3>
                    <p className="text-red-700/80 text-base sm:text-lg">Chemical splashes, sudden vision loss, or direct impact injuries require immediate attention. Our trauma unit is ready 24/7.</p>
                </div>
                <div className="flex flex-col gap-2 w-full md:w-auto md:min-w-[200px]">
                    <a className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-center hover:bg-red-700 transition-colors shadow-md" href={`tel:${hospitalData.contactInfo.emergency}`}>
                        Call Emergency Room
                    </a>
                </div>
            </div>

            {/* FAQ Section: Insurance & TPA */}
            <div className="mb-16">
                <div className="text-center mb-10">
                    <h2 className="text-slate-900 text-3xl font-black mb-4">Insurance & TPA Assistance</h2>
                    <p className="text-slate-600">We partner with leading insurance providers to make your treatment cashless and hassle-free.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/30 transition-colors">
                        <h4 className="text-primary font-bold text-lg mb-3 flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm flex-shrink-0">circle</span>
                            Which insurance providers do you support?
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed">We support all major government schemes like Ayushman Bharat (PMJAY) and private insurers including Star Health, HDFC Ergo, ICICI Lombard, and more.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/30 transition-colors">
                        <h4 className="text-primary font-bold text-lg mb-3 flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm flex-shrink-0">circle</span>
                            What is the process for Cashless Treatment?
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed">Present your insurance card at the front desk. Our TPA desk will handle the pre-authorization process with your provider directly.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/30 transition-colors">
                        <h4 className="text-primary font-bold text-lg mb-3 flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm flex-shrink-0">circle</span>
                            Do I need to pay anything upfront?
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed">For cashless-approved surgeries, only non-medical expenses (as per your policy) need to be paid. Consultations usually require direct payment.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/30 transition-colors">
                        <h4 className="text-primary font-bold text-lg mb-3 flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm flex-shrink-0">circle</span>
                            Can I get reimbursement later?
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed">Yes, we provide all necessary documentation (discharge summaries, bills, test reports) in the required format for your reimbursement claims.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
