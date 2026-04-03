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
                                <li key={index} className="flex justify-between border-b border-white/10 pb-2">
                                    <span>{wh.day}</span>
                                    <span>{wh.hours}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Google Maps Integration */}
                <div className="mb-10 sm:mb-12 rounded-xl overflow-hidden shadow-lg border border-white/10 bg-slate-900/50">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114093.00392994464!2d91.35334465492476!3d26.43828975553066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375e630009c95d97%3A0xcda8ddb37244955f!2sNalbari%2C%20Assam!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin" 
                        width="100%" 
                        height="250" 
                        style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(80%) contrast(80%)" }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Nalbari Eye Hospital Location Map"
                        className="w-full"
                    ></iframe>
                </div>

                <div className="border-t border-white/10 pt-10 text-center text-slate-400 text-xs">
                    <p>© {new Date().getFullYear()} Nalbari Eye Hospital. All rights reserved. Designed for Excellence.</p>
                </div>
            </div>
        </footer>
    );
}
