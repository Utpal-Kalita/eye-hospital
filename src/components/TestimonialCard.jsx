export default function TestimonialCard({ testimonial }) {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<span key={i} className="material-symbols-outlined">star</span>);
            } else if (i - 0.5 === rating) {
                stars.push(<span key={i} className="material-symbols-outlined">star_half</span>);
            }
        }
        return stars;
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg shadow-primary/5">
            <div className="flex text-accent mb-4">
                {renderStars(testimonial.rating)}
            </div>
            <p className="text-slate-600 italic mb-6">{testimonial.text}</p>
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden shrink-0">
                    <img alt={testimonial.author} src={testimonial.image} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div>
                    <p className="font-bold text-slate-900">{testimonial.author}</p>
                    <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
            </div>
        </div>
    );
}
