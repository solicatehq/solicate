export interface Testimonial {
    id: string;
    quote: string;
    author: string;
    role: string;
    company: string;
    image?: string;
    instagram?: string;
    website?: string;
    feedbacks?: string[];
}

export const testimonials: Testimonial[] = [
    {
        id: '1',
        quote: "Thank you for sharing such an amazing portfolio, I absolutely loved it! I really appreciated how you kept the animations simple yet unique, making everything look very clean and presentable. It was truly great working with you.",
        author: "Kajal Goyal",
        role: "UGC Content Creator",
        company: "Kaylife",
        image: "/kajal-goyal.jpg",
        instagram: "https://www.instagram.com/kay.life173/",
        website: "https://kajal.solicate.in",
        feedbacks: [
            "Thank you for sharing such an amazing portfolio, I absolutely loved it! I really appreciated how you kept the animations simple yet unique, making everything look very clean and presentable. It was truly great working with you.",
            "Thnaks for explaining!! Really appreciate your time and effort you took. The portfolio looks perfect yet elegant. Thank you for being so patient it was great working with you.",
            "Sure! Thanks great news🥳🥳🥳\nHappy to see you growing ✨✨✨"
        ]
    },
    {
        id: '2',
        quote: "Working with Solicate was the best decision for making my portfolio. The way you design it, the way you give honest suggestions, it's really professional. Looking forward to working with you again.",
        author: "Ayesha Malkani",
        role: "UGC Content Creator",
        company: "Luxe Clicks",
        image: "/ayesha-malkani.jpg",
        instagram: "https://www.instagram.com/luxe_clicks__/",
        website: "https://luxe.solicate.in",
        feedbacks: [
            "Working with solicate was best decision for making my portfolio. The way you design it, the way you give honest suggestions, its really professional. Looking forward to work with you again. Wish you luck for your success."
        ]
    },
    {
        id: '3',
        quote: "This look soo good and elegant with pure luxury and minimal design exactly how I wanted it. Thank u soo much for making my Protofolio looks this elegant and pretty 💗",
        author: "Sameera Fatima",
        role: "UGC Content Creator",
        company: "Glimpses of Mine",
        image: "/sameera-fatima.jpg",
        instagram: "https://www.instagram.com/glimpsesofmine_/",
        website: "https://sameera.solicate.in",
        feedbacks: [
            "This look soo good and elegant with pure luxury and minimal design exactly how I wanted it\nThank u soo much for making my Protofolio looks this elegant and pretty 💗"
        ]
    },
    {
        id: '4',
        quote: "I had a great experience working with Solicate. The process was smooth and professional from start to finish. What stood out most was their focus on clarity and thoughtful design rather than relying on generic templates. The result felt tailored, clean, and genuinely aligned with my personal brand.",
        author: "Protik Das",
        role: "Creative Video Editor",
        company: "Freelance",
        image: "/protik.png",
        instagram: "https://www.instagram.com/protik_das02/",
        website: "https://protik.solicate.in",
        feedbacks: [
            "I had a great experience working with Solicate. They designed a portfolio for me, and the process was smooth and professional from start to finish. What stood out most was their focus on clarity and thoughtful design rather than relying on generic templates. The result felt tailored, clean, and genuinely aligned with my personal brand.",
            "Communication was straightforward, expectations were handled transparently, and they delivered something that I can confidently showcase. If you’re looking for a creative team that prioritizes trust, usability, and purposeful design over hype, Solicate is worth considering."
        ]
    }
];
