import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { hospitalData } from '../data/mockData';

export default function Header() {
    const location = useLocation();
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Doctors", path: "/doctors" },
        { name: "Gallery", path: "/gallery" },
        { name: "About Us", path: "/about" }
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-primary/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    <Link to="/" className="flex items-center gap-3">
                        <div className="bg-primary p-2 rounded-lg text-white">
                            <span className="material-symbols-outlined text-3xl">visibility</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-primary leading-none">Nalbari Eye Hospital</h1>
                            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Excellence in Ophthalmology</p>
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-semibold transition-colors ${location.pathname === link.path ? "text-primary border-b-2 border-primary" : "text-slate-700 hover:text-primary"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <a className="hidden lg:flex items-center gap-2 text-primary font-bold" href={`tel:${hospitalData.contactInfo.emergency}`}>
                            <span className="material-symbols-outlined">call</span>
                            <span>Emergency: {hospitalData.contactInfo.emergency}</span>
                        </a>
                        <Link to="/contact">
                            <button className="bg-accent hover:bg-amber-600 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg shadow-accent/20">
                                Book Appointment
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    );
}
