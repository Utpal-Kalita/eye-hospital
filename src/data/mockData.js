export const hospitalData = {
    contactInfo: {
        address: "Hajo Road, Nalbari Town,\nNalbari, Assam - 781335",
        phones: ["+91 98765 43210", "+91 3624 220123"],
        email: "info@nalbarieye.com",
        emergency: "108"
    },
    workingHours: [
        { day: "Mon - Sat", hours: "09:00 AM - 08:00 PM" },
        { day: "Sunday", hours: "10:00 AM - 02:00 PM" },
        { day: "Emergency", hours: "24 Hours Available", isEmergency: true }
    ],
    stats: [
        { value: "10k+", label: "Successful Surgeries" },
        { value: "20+", label: "Years Experience" },
        { value: "15+", label: "Lead Specialists" },
        { value: "24/7", label: "Emergency Care" }
    ],
    services: [
        {
            id: "cataract",
            icon: "eye_tracking",
            title: "Cataract Surgery",
            description: "Advanced micro-incision lens replacement for crystal clear vision recovery.",
            link: "/services#cataract"
        },
        {
            id: "lasik",
            icon: "flare",
            title: "LASIK Surgery",
            description: "Freedom from glasses with our state-of-the-art blade-free laser technology.",
            link: "/services#lasik"
        },
        {
            id: "glaucoma",
            icon: "pulse_alert",
            title: "Glaucoma Care",
            description: "Early detection and management of intraocular pressure to prevent vision loss.",
            link: "/services#glaucoma"
        },
        {
            id: "pediatric",
            icon: "child_care",
            title: "Pediatric Care",
            description: "Specialized eye care tailored for the sensitive needs of children and infants.",
            link: "/services#pediatric"
        }
    ],
    doctors: [
        {
            id: "arpan-sarma",
            name: "Dr. Arpan Sarma",
            role: "Senior Consultant, Cataract & LASIK",
            credentials: "MBBS, MS (Ophth), Fellow Sankara Nethralaya",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuArbLBIPXluj58OidJ66WXREOcF6ljNYcIC9iE2qppv8AFUTirCmDnu5SqZ1lQPqezjGZFc4Q7EB_VXwq9ITJjMH6pDamZbgYlK5GbLL22Xt5IKP5aLghP3Wvl97LDqoLJbVCtskw4UeLTYJ2fLIRRaV5WqEQS7kzInOIaN8hms74ckh-DMzwvotrt5C9lLKk5aJq-Oin-xJwn3EATA87QhxE2OMFsWt8ab5F6Qv7HNGJ7gCEwhYw4uJ3682o1vZLiN8WjLT2GjxZM"
        },
        {
            id: "neha-baruah",
            name: "Dr. Neha Baruah",
            role: "Retina Specialist",
            credentials: "MBBS, MD (AIIMS), DNB",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJehcpk1se_cSFj9_upuZWpPA7hjjnM6UQHqtpIinTJ4iTqdMVW9VF_-q8DQ4_m2I3suijZV_QazG6EX06VIKHMqqHshkurKA3MpLcD09KIBUD8TTG8LEglFcH91v3mraFf477fnUyyIxP9L6UBhftWnQiSXSRi_IZwYEzXJEA1RioODarZmwdPbYc_8gARF08q15tDL6CsYzZoyN6zauvi8-9bs8pT1PyjesOm9xRU9yPqMsV8iWnPcmNnRw3BG16aas8zYxe7J8"
        },
        {
            id: "rajdeep-kalita",
            name: "Dr. Rajdeep Kalita",
            role: "Pediatric Ophthalmologist",
            credentials: "MBBS, MS, Fellowship in Pediatric Ophth",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGd1kO16cMwG4EjE86_RQLARu13bJ5fBomOL9PubjxuUM7KKdXPSLdrqt08sJbDNBrRTU6aRdkYh07Mo6kGCUBLN8tUsRaRXp6TNdg65wY3stmsLPI0fC4Ac0gq8Mun5bjZh4lBWkLqR8hoUxZSwguDaXwKfiF5ulEFClYQgnpB2uSqpjH5IveRApsNNtF6wImYBSHlzAp5LODNlqrLBWhR9AL7GK91csSuQ4-pWiNejQbta1QNBHuhGa9aSUm7CmLm1fYqmsikLk"
        }
    ],
    testimonials: [
        {
            id: 1,
            text: "\"The LASIK procedure was life-changing. I've worn glasses for 15 years and now I can see clearly without them. The staff at Nalbari Eye Hospital were incredibly supportive.\"",
            author: "Manoj Das",
            role: "Business Owner",
            rating: 5,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA01VCzUoOm5yAFo6RG3FAegwKUG3ANiXF8kxBgV0SMDYfMNQ-2NQo2NG1CVRDwD9BEWP_P1omRkeOc6-FUxhQXW3ZkkdAOg9n_uEn9cdkzami-ILhGCg3t_GyGCvcYswHmeZcNF9Em7Kp-9dsxs4J4mOtJH1g1S6_98kah7DL9gcs85mqJs0EeYUgOcWe2h07otCDJfNMqUk8BqT3uW1LDleqYYrsQJ9ARjQmSd3f_C8g7lIM1XV0SWZtmFr5obl7YBArmpjO1nPQ"
        },
        {
            id: 2,
            text: "\"My mother underwent cataract surgery here. We were worried about the complexity, but Dr. Sarma made us feel at ease. Her vision is perfect now. Highly recommended!\"",
            author: "Priyanka Sharma",
            role: "Teacher",
            rating: 5,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuEE1qqCi1-ZtKM-4zYanIJGgJz7Xok1udNXIFlXSw81l8IEKQkTtwQMsWuivL15YVf3PDjISjUxhttmt-5gFVsWRV60KEYHdQnIuYgExR_hal_PCefc9MPicsoWtheXqiLiCJpctf82HPDntyo04uZ4HqfdNGUnoWomDCusgafmIROqbQJfjhVgPPJrYlhRnt759uwA-TzdHuoWcMw-3_Yxq0vhRUVt9qo4cEakUNGMk8ohfxobWqvwjeqv0MgsaN-62XuO-t8Tg"
        },
        {
            id: 3,
            text: "\"Best eye care facility in the Nalbari region. The hygiene standards and the advanced diagnostic tools they have are comparable to big city hospitals.\"",
            author: "Rupjyoti Nath",
            role: "Government Employee",
            rating: 4.5,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBm0J-IFjMFka1xj2bLyGF_qoXk6sogBvZf_EGk2-ZPWydbJvKvKdSUeZzxC_UQSqkrKggb8R5ie-Kq7K1m0bM6ML_prLiTMXS_xXvzXgWzxJ42roUoMm62D194KPKfvTQED_ZNWYr8LFrHY2VyOZWNJ-_0EWeZlVvNr2SXRrcHfyeoEclt5X7M6gAnVotprpNqwHY0XF_gU_irmqcOvAF9FEOLpu9dWP_8IzTCIsFIyWjH3wC-x12gu_EVT9BIdG0yCA8s1-pXA1w"
        }
    ]
};
