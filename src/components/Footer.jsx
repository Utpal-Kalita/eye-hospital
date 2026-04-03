import React from 'react';
import { Link } from 'react-router-dom';
import { hospitalData } from '../data/mockData';

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-16 pb-8 sm:pt-20 sm:pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">

                    <div>
                        <div className="flex items-center gap-3 mb-5 sm:mb-6">
                            <div className="bg-white p-2 rounded-lg text-primary">
                                <span className="material-symbols-outlined text-2xl">visibility</span>
                            </div>
                            <h2 className="text-xl font-bold !text-white">Nalbari Eye Hospital</h2>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed mb-5 sm:mb-6 max-w-sm">
                            Leading the way in advanced ophthalmology services across Assam. Dedicated to bringing light and clarity back into your life through specialized medical care.
                        </p>
                        <div className="flex gap-4">
                            <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" href="#"><span className="material-symbols-outlined">social_leaderboard</span></a>
                            <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-5 sm:mb-6 !text-white">Quick Links</h4>
                        <ul className="space-y-4 text-slate-300 text-sm">
                            <li><Link className="hover:text-white transition-colors" to="/services">Our Services</Link></li>
                            <li><Link className="hover:text-white transition-colors" to="/contact">Book an Appointment</Link></li>
                            <li><Link className="hover:text-white transition-colors" to="#">Patient Portal</Link></li>
                            <li><Link className="hover:text-white transition-colors" to="#">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-5 sm:mb-6 !text-white">Contact Info</h4>
                        <ul className="space-y-4 text-slate-300 text-sm">
                            <li className="flex gap-3">
                                <span className="material-symbols-outlined text-accent">location_on</span>
                                <span className="whitespace-pre-line">{hospitalData.contactInfo.address}</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="material-symbols-outlined text-accent">call</span>
                                <span>{hospitalData.contactInfo.phones.join('\n')}</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="material-symbols-outlined text-accent">mail</span>
                                <span>{hospitalData.contactInfo.email}</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-5 sm:mb-6 !text-white">Working Hours</h4>
                        <ul className="space-y-2 text-slate-300 text-sm">
                            {hospitalData.workingHours.map((wh, index) => (
                                <li key={index} className={`flex justify-between ${wh.isEmergency ? 'text-accent font-bold pt-2' : 'border-b border-white/10 pb-2'}`}>
                                    <span>{wh.day}</span>
                                    <span>{wh.hours}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-10 text-center text-slate-400 text-xs">
                    <p>© {new Date().getFullYear()} Nalbari Eye Hospital. All rights reserved. Designed for Excellence.</p>
                </div>
            </div>
        </footer>
    );
}
