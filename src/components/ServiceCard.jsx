import { Link } from 'react-router-dom';

export default function ServiceCard({ service }) {
    return (
        <div className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-secondary text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.description}</p>
            <Link className="text-primary font-bold text-xs uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all" to={service.link}>
                Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
        </div>
    );
}
