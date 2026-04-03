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
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12.031 6.172c-3.456 0-6.343 2.95-6.343 6.575c0 1.267.356 2.447.94 3.49L5.821 19.5l3.537-1.041c.992.553 2.122.86 3.33.86c3.455 0 6.344-2.951 6.344-6.575c0-3.624-2.889-6.572-6.344-6.572zm0 12.142c-1.046 0-2.057-.263-2.945-.747l-.23-.145-2.356.691.702-2.332-.156-.251A5.48 5.48 0 016.688 12.75c0-3.034 2.486-5.5 5.343-5.5c2.857 0 5.343 2.466 5.343 5.5c0 3.034-2.486 5.5-5.343 5.5zM17.641 13.638c-.059-.03-.192-.062-.381-.109-.189-.046-.56-.142-.916-.212-.357-.07-.632-.165-.918-.41-.286-.245-.286-.506-.286-.748 0-.242 0-.503.286-.748.285-.245.561-.34.918-.41.356-.07.727-.166.916-.212.189-.047.322-.079.381-.109.059-.03.141-.101.141-.284 0-.183-.082-.254-.141-.284zm-1.14 2.41c-.058-.029-.192-.06-.38-.108-.189-.047-.56-.142-.917-.212-.357-.071-.631-.166-.917-.41-.286-.245-.286-.507-.286-.748 0-.242 0-.503.286-.748.286-.245.56-.34.917-.41.357-.07.728-.165.917-.212.188-.048.322-.079.38-.108.06-.03.142-.101.142-.284 0-.183-.083-.254-.142-.284z"></path>
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
