# Design System: Nalbari Eye Hospital
**Project ID:** 4348572927546335314

## 1. Visual Theme & Atmosphere
Professional, clean, and trustworthy medical aesthetic. The atmosphere is open and airy, instilling confidence through a refined balance of clinical precision (deep blues, crisp whites) and warm, welcoming care (amber accents, soft secondary blues).

## 2. Color Palette & Roles
* **Deep Royal Navy (#1a3c7f)**: Primary brand color used for dominant structural elements like the header, hero section background, footers, typography headings, and primary icons. Conveys clinical authority and trust.
* **Soft Clinical Ice Blue (#E8F4FD)**: Secondary color used for backgrounds of feature icons and subtle section highlights. Provides a gentle contrast that feels hygienic and calming.
* **Warm Amber Gold (#F59E0B)**: Accent color used for primary call-to-action buttons (e.g., "Book Appointment"), star ratings, and important emergency contact indicators. Draws the eye to interactive and urgent elements.
* **Crisp Off-White/Light Gray (#f6f7f8)**: Main background color for the application body. Ensures high readability and a clean, sterile-but-soft environment.
* **Deep Space Navy (#121720)**: Dark background variant, likely used for high-contrast dark modes or deeply nested footers.

## 3. Typography Rules
* **Headings (Display)**: Poppins (sans-serif), typically used in font weights from Medium (500) to Black (900). Often used for large, bold section titles and hero copy. Gives a modern, rounded, and friendly yet professional appearance.
* **Body Text**: Inter (sans-serif), used for descriptions, secondary text, and UI elements. Highly legible, neutral, and precise for medical information.
* **Character**: Headings often use tight line-heights (`leading-none`, `leading-tight`) and some smaller informative text uses wide tracking (`tracking-[0.2em]`, `tracking-widest` uppercase) for elegant categorization (e.g., "Our Expertise" labels).

## 4. Component Stylings
* **Buttons**: Pill-shaped (`rounded-full`) or subtly rounded corners (`rounded-lg`, `rounded-xl`). Primary buttons use the Warm Amber Gold color with bold text and a prominent soft shadow (`shadow-lg shadow-accent/20`). Secondary/Ghost buttons use white borders with a frosted glass effect (`bg-white/10 backdrop-blur-md`).
* **Cards/Containers**: Generously rounded corners (`rounded-2xl`). They feature clean white backgrounds with delicate, whisper-soft diffused shadows (`shadow-2xl shadow-primary/10` or `shadow-lg shadow-primary/5`). Hover states often introduce subtle border color shifts (`hover:border-primary/20`) and slightly increased elevation.
* **Icons**: Feature soft, rounded container backgrounds (often Soft Clinical Ice Blue) with the Deep Royal Navy ink for high visibility.

## 5. Layout Principles
* **Structure & Alignment**: The layout relies on spacious, centered containers (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`). Content sections are separated by generous vertical whitespace (`py-24`, `mb-16`) to maintain an uncluttered, breathable environment.
* **Grids**: Services, doctors, and testimonials are arrayed in precise 3-column and 4-column grid systems, ensuring a highly organized and digestible presentation of medical information.
* **Layering**: Utilizes overlapping elements (like the trust/stats bar overlapping the hero section with relative positioning and negative margins) to create vertical depth and fluid visual connections between distinct themes.
