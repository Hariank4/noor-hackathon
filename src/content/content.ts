// All published copy. Source of truth: docs/07-CONTENT.md (client BRD v1.0 + organiser info page).
// `null` means "not supplied yet" and renders "Announcing soon". Never invent values here.

export const event = {
  name: "Noor Hackathon 2K26",
  tagline: "Be the Noor — Illuminate the Way",
  presenters: "CST Department × IEEE MRU Student Branch", // from client poster
  format: "36-hour national-level hackathon", // from client poster: confirm
  dates: "2 – 3 November 2026",
  venue: "Manav Rachna University, Faridabad, Haryana",
  mode: "Offline · On campus",
  deadline: "1 November 2026",
  startsAt: "2026-11-02T00:00:00+05:30",
  description:
    "An on-campus hackathon bringing college and university students together to create impactful solutions through technology, creativity and problem-solving.",
  about: [
    "Noor Hackathon brings together passionate college and university students to collaborate, tackle real-world challenges, and develop innovative solutions using technology, creativity, and problem-solving skills.",
    "Whether you are a programmer, designer, entrepreneur, researcher, or creative thinker, Noor is an opportunity to work with like-minded innovators, showcase your abilities, and transform ideas into meaningful solutions.",
  ],
  audience: ["Programmers", "Designers", "Entrepreneurs", "Researchers", "Creative thinkers"],
  teamSize: "2–5 members", // BRD: subject to confirmation against the registration form
  closing: "Ideas that matter. Solutions that shine.",
};

export const themes = [
  { icon: "leaf", name: "Environmental Sustainability", desc: "Using technology to reduce pollution, manage waste, conserve water and protect the environment." },
  { icon: "shield", name: "Cybersecurity & Digital Safety", desc: "Making the internet safer by protecting personal information, preventing online fraud and improving digital security." },
  { icon: "venus", name: "Women's Safety & Empowerment", desc: "Creating technology that supports women's safety, access to opportunities, independence and inclusion." },
  { icon: "heart", name: "Healthcare & Well-being", desc: "Developing solutions that make healthcare more accessible, improve health awareness and support physical and mental well-being." },
  { icon: "city", name: "Smart Cities & Communities", desc: "Using technology to improve transport, public services, energy use, waste management and everyday urban life." },
  { icon: "gear", name: "Smart Industry & Automation", desc: "Building solutions that make workplaces, factories and industrial processes safer, smarter and more efficient." },
  { icon: "chip", name: "Artificial Intelligence & Machine Learning (AI/ML)", desc: "Using intelligent systems to analyse data, recognise patterns, make predictions and solve real-world problems through AI-powered applications." },
] as const;

export const rounds = [
  { n: "01", name: "Presentation", date: "2 November 2026" },
  { n: "02", name: "Prototype", date: "3 November 2026" },
];

export const prizes = [
  { rank: "Winner", amount: "₹15,000", perk: "Internship opportunity" },
  { rank: "First runner-up", amount: "₹10,000", perk: "Internship opportunity" },
  { rank: "Second runner-up", amount: "₹5,000", perk: "Internship opportunity" },
  { rank: "WIE Winning Team", amount: "$100", note: "Worth of AI credits · Women Innovation Field Ideas" },
];

// Shortlisting criteria as supplied by the organisers (25 Oct). No weights or descriptions yet.
export const rubric = ["Presentation", "Design thinking", "Feasibility", "Innovation", "Product market fit", "Pitch/Q&A"];

export const eligibility = [
  "Open to college and university students.",
  "Inter-college teams are allowed.",
  "Teams of 2–5 members.",
  "Registration details must be accurate and complete.",
];

export const rules = [
  "Participants must provide accurate and complete registration information.",
  "Participants must submit work by the deadlines and in the formats specified by the organisers.",
  "Projects must follow the official competition guidelines.",
  "Plagiarism, false ownership claims, fabricated results and unauthorised use of another team's work are prohibited.",
  "Participants must respect fellow participants, mentors, judges, volunteers and university staff.",
  "Misconduct, disruption or policy violations may result in disqualification at the organisers' discretion.",
  "Participants must follow campus safety, security and venue regulations.",
  "Organisers may reasonably change the schedule or arrangements; significant updates will be communicated through official channels.",
  "Monitor your registered email, retain your registration ID and payment reference, and follow official event announcements.",
  "Overnight stay arrangements, if applicable, will be communicated separately.",
  "The detailed rubric, scoring weights, submission requirements and round instructions will be communicated by the organisers.",
];

export const steps = [
  "Register through the official registration form linked on this site.",
  "Enter your team name and the details of the team leader and every member.",
  "For each participant: full name, course/program, college/university, location, gender, mobile number, email, current year of study and college ID card.",
  "Pay the team registration fee as per the official payment instructions.",
  "Submit the payment screenshot and the UTR / UPI transaction reference, clearly visible.",
  "Keep your payment reference. After verification you will receive a confirmation email and registration ID.",
];

export const fees = {
  early: { amount: "₹400", code: "NOOREARLY", until: "29 October 2026" },
  regular: { amount: "₹500", range: "30 October – 1 November 2026" },
};

// Order follows the client's poster ribbon. `logo: null` renders a text tile until the original file arrives.
export const partners = [
  { name: "Manav Rachna University", logo: "/partners/mru.png" },
  { name: "IEEE MRU Student Branch", logo: "/partners/ieee-mru.png" },
  { name: "Institution's Innovation Council", logo: "/partners/iic.png" },
  { name: "School of Engineering", logo: "/partners/soe.png" },
  { name: "HackWithIndia", logo: "/partners/hackwithindia.png" },
  { name: "Devnovate", logo: null },
];

export const team = [
  { name: "Gaurav Bansal", role: "Founder & Organiser" },
  { name: "Tanazza Muskan Mirza", role: "Organiser" },
  { name: "Hayat Ataul Khan", role: "Organiser" },
];

// Points of contact supplied by the organisers (26 Oct).
export const contacts = [
  { name: "Tanazza Muskan Mirza", phone: "9315067537", email: "tanazzamuskan@gmail.com" },
  { name: "Dipika Chauhan", phone: "9667675678", email: "chauhandipika686@gmail.com" },
  { name: "Hayat Ataul Khan", phone: "7870193814", email: "khanhayatataul@gmail.com" },
  { name: "Gaurav Bansal", phone: "9812358414", email: "gauravbansal3106@gmail.com" },
  { name: "Manobhiram", phone: "9030630974", email: "srirangammanobhiram@gmail.com" },
];

// Supplied by the organisers (25 Oct). Shown in preview only until flags.showFaq is switched on.
export const faqs = [
  { q: "Who can participate?", a: "College students." },
  { q: "Can students from any college register?", a: "Yes. Inter-college teams are also appreciated." },
  { q: "What is the team size?", a: "2–5 members." },
  { q: "Do teams need a working prototype before the event?", a: "The first round is a PPT. Only round 2 requires a prototype. If you want to be well prepared, you may start working on the prototype as well." },
  { q: "What should be included in the PPT?", a: "Problem statement, solution, tech stack, innovation and USP, and how it is useful in real life." },
  { q: "How does shortlisting work?", a: "Teams are shortlisted on a scoring system covering Presentation, Design thinking, Feasibility, Innovation, Product market fit and Pitch/Q&A." },
  { q: "Is there a registration fee?", a: "Yes. ₹400 per team for early bird and ₹500 per team for late registrations. The fee is per team, not per participant." },
  { q: "What is the early bird offer?", a: "Registering by 29 October 2026 costs ₹400 per team with code NOOREARLY. Registrations from 30 October to 1 November 2026 cost ₹500 per team." },
  { q: "Are food, travel or accommodation provided?", a: "Food, a bus from the metro to the college, and stay are provided. Stay costs ₹350 per head." },
  { q: "Is stay provided, and what does it cost?", a: "Yes, stay is provided. It costs ₹350 per head." },
  { q: "Will participants receive certificates?", a: "Yes." },
  { q: "How can a company or college partner with Noor?", a: "Reach out to us at contact@noorhackathon.com. We look forward to working with you." },
];
