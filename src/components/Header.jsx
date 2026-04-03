import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
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
                <div className="flex items-center justify-between gap-3 h-16 sm:h-20">

                    <Link to="/" className="flex items-center gap-3">
                        <div className="bg-primary p-2 rounded-lg text-white shrink-0">
                            <span className="material-symbols-outlined text-2xl sm:text-3xl">visibility</span>
                        </div>
                        <div>
                            <h1 className="text-base sm:text-xl font-bold text-primary leading-none">Nalbari Eye Hospital</h1>
                            <p className="hidden sm:block text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Excellence in Ophthalmology</p>
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

                    <div className="hidden md:flex items-center gap-3 lg:gap-4">
                        <Link to="/contact">
                            <button className="bg-accent hover:bg-amber-600 text-white px-4 sm:px-6 py-2.5 rounded-lg font-bold text-xs sm:text-sm transition-all shadow-lg shadow-accent/20">
                                Book Appointment
                            </button>
                        </Link>
                    </div>

                    <button
                        type="button"
                        className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-lg border border-slate-200 text-primary bg-white"
                        aria-label="Toggle navigation menu"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        <span className="material-symbols-outlined text-2xl">{menuOpen ? 'close' : 'menu'}</span>
                    </button>

                </div>

                <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
                    <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg mb-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setMenuOpen(false)}
                                className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${location.pathname === link.path ? 'bg-primary/10 text-primary' : 'text-slate-700 hover:bg-slate-50 hover:text-primary'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/contact" onClick={() => setMenuOpen(false)}>
                            <button className="w-full bg-accent hover:bg-amber-600 text-white px-4 py-3 rounded-lg font-bold text-sm transition-all shadow-lg shadow-accent/20">
                                Book Appointment
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
