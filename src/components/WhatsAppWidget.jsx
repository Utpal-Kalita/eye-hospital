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
                <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-50"></div>
                
                {/* Main Button */}
                <div className={`relative w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform ${isHovered ? 'scale-110' : 'scale-100'}`}>
                    <svg
                        className="w-7 h-7"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.909 1.251c-1.428.797-2.674 1.9-3.564 3.226-1.046 1.597-1.424 3.379-1.059 5.071.559 2.593 2.508 4.712 5.068 5.293 1.781.355 3.632.263 5.303-.501 1.671-.766 3.077-1.992 4.01-3.54.469-.838.755-1.762.791-2.693.016-1.057-.306-2.084-.926-2.904-.62-.822-1.529-1.41-2.565-1.675-.472-.12-.98-.118-1.475.005-.494.123-.974.386-1.361.785-.323.323-.768.536-1.228.536.46 0 .905-.213 1.229-.537.387-.398.867-.662 1.361-.785.495-.123 1.003-.125 1.475-.005 1.036.265 1.945.853 2.565 1.675.62.82.942 1.847.926 2.904-.036.93-.322 1.853-.791 2.692-.933 1.548-2.339 2.774-4.01 3.54-1.671.764-3.522.856-5.303.501-2.56-.582-4.509-2.7-5.068-5.293-.365-1.694.013-3.476 1.059-5.074.889-1.325 2.135-2.429 3.564-3.226a9.87 9.87 0 014.909-1.25"></path>
                    </svg>
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
