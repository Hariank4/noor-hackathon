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
  teamSize: "2–5 members", // BRD: subject to confirmation against the Unstop form
  closing: "Ideas that matter. Solutions that shine.",
};

export const themes = [
  { icon: "leaf", name: "Environmental Sustainability" },
  { icon: "shield", name: "Cybersecurity & Digital Safety" },
  { icon: "venus", name: "Women's Safety & Empowerment" },
  { icon: "heart", name: "Healthcare & Well-being" },
  { icon: "city", name: "Smart Cities & Communities" },
  { icon: "gear", name: "Smart Industry & Automation" },
] as const;

export const rounds = [
  { n: "01", name: "Presentation", date: "2 November 2026" },
  { n: "02", name: "Prototype", date: "3 November 2026" },
];

export const prizes = [
  { rank: "Winner", amount: "₹15,000" },
  { rank: "First runner-up", amount: "₹10,000" },
  { rank: "Second runner-up", amount: "₹5,000" },
];
export const wieAward: string | null = null; // BRD O-07: publish only after client confirms wording

export const rubric = [
  { name: "Innovation", text: "Originality, creativity, and uniqueness of the proposed solution." },
  { name: "Technical Feasibility", text: "Practicality, functionality, and technical implementation." },
  { name: "Impact", text: "Potential to solve a meaningful problem and benefit the intended users or community." },
  { name: "Presentation", text: "Clarity of communication, demonstration, and explanation of the solution." },
  { name: "Scalability", text: "Potential for future development, adoption, and expansion." },
];

export const eligibility = [
  "Open to college and university students.",
  "Inter-college teams are allowed.",
  "Teams of 2–5 members, matching the official Unstop form.",
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
  "Register through the official registration link on Unstop.",
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
  { name: "Tanazza Mushkan Mirza", role: "Organiser" },
  { name: "Hayat Atual Khan", role: "Organiser" },
];

// Draft built only from supplied facts. Shown in preview only until the client approves it.
export const faqs = [
  { q: "Who can participate?", a: "College and university students. Participants from different colleges can team up; inter-college teams are allowed." },
  { q: "When and where is Noor Hackathon 2K26?", a: "2–3 November 2026 at Manav Rachna University, Faridabad, Haryana. It is an offline, on-campus event." },
  { q: "How do I register?", a: "Through the official registration link on Unstop. Enter your team name and details for the leader and every member, pay the team fee, and submit the payment screenshot with the UTR / UPI reference." },
  { q: "What is the registration deadline?", a: "1 November 2026." },
  { q: "What does it cost?", a: "₹400 per team with code NOOREARLY until 29 October; ₹500 per team from 30 October to 1 November. The fee is per team, not per participant." },
  { q: "How big can a team be?", a: "Teams have 2 to 5 members." },
  { q: "What details do I need for each participant?", a: "Full name, course/program, college/university, location, gender, mobile number, email, current year of study and college ID card." },
  { q: "When is my registration complete?", a: "Only after the required information and payment details are submitted as instructed. After verification you will get a confirmation email and a registration ID." },
  { q: "What should I keep?", a: "Your registration ID and payment reference number." },
  { q: "How many rounds are there?", a: "Two. Round 1 is the Presentation on 2 November and Round 2 is the Prototype on 3 November." },
  { q: "How will projects be judged?", a: "On innovation, technical feasibility, impact, presentation and scalability. The detailed rubric and scoring weightage will be communicated by the organisers." },
  { q: "What are the themes?", a: "Environmental Sustainability; Cybersecurity & Digital Safety; Women's Safety & Empowerment; Healthcare & Well-being; Smart Cities & Communities; Smart Industry & Automation." },
  { q: "What are the prizes?", a: "Winner ₹15,000, first runner-up ₹10,000, second runner-up ₹5,000." },
  { q: "Where will updates and the schedule be announced?", a: "Through official event channels: your registered email and @noorhackathon on Instagram." },
  { q: "Is there an overnight stay?", a: "Where applicable, overnight stay arrangements will be communicated separately." },
  { q: "How can I contact the organisers?", a: "Email contact@noorhackathon.com or call 9812358414." },
];
