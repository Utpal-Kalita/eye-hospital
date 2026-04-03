import React, { useState } from 'react';

export default function WhatsAppWidget() {
    const [isHovered, setIsHovered] = useState(false);
    const whatsappNumber = "918822911122"; // +91 88229 11122 formatted for WhatsApp
    const whatsappMessage = "Hi! I'd like to know more about your eye care services and book a consultation.";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Floating Button with Pulse Animation */}
            <div className="relative">
                {/* Pulse Ring */}
                <div className="absolute inset-0 bg-[#25D366] rounded-full animate-pulse opacity-40 blur-sm scale-110"></div>
                
                {/* Main Button */}
                <div className={`relative w-[60px] h-[60px] hover:shadow-2xl transition-all duration-300 cursor-pointer transform ${isHovered ? 'scale-110' : 'scale-100'}`}>
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                        alt="WhatsApp Logo" 
                        className="w-full h-full drop-shadow-lg"
                    />
                </div>

                {/* Tooltip */}
                {isHovered && (
                    <div className="absolute bottom-20 right-0 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg animate-fadeIn">
                        Chat on WhatsApp
                    </div>
                )}
            </div>
        </a>
    );
}
