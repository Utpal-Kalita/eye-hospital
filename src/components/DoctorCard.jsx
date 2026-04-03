export default function DoctorCard({ doctor }) {
    return (
        <div className="group">
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6">
                <img alt={doctor.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" src={doctor.image} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h4 className="text-xl font-bold text-slate-900">{doctor.name}</h4>
            <p className="text-primary font-medium text-sm">{doctor.role}</p>
            <p className="mt-2 text-slate-500 text-sm italic">{doctor.credentials}</p>
        </div>
    );
}
