export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  initials: string;
  color: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mr. Ebenezer Amakeh",
    role: "CEO at Vestra Versa",
    content:
      "Working with MEGAS TECH INC. was a game-changer for our business. Their innovative solutions helped us increase our online presence significantly.",
    rating: 5,
    initials: "EA",
    color: "#10B981",
  },
  {
    id: 2,
    name: "Mr. Theophilus Arthur",
    role: "CEO of Teebel Global Travel Consultancy",
    content:
      "The team at MEGAS TECH INC. delivered beyond our expectations. Their attention to detail and technical expertise is unmatched in the industry.",
    rating: 5,
    initials: "TA",
    color: "#6366F1",
  },
  {
    id: 3,
    name: "Miss Elizabeth Obeng",
    role: "Assistant Managing Director",
    content:
      "Their development team is incredibly responsive and professional. They transformed our ideas into a beautiful, functional product.",
    rating: 4,
    initials: "EO",
    color: "#F59E0B",
  },
  {
    id: 4,
    name: "Mr. Dermolahu",
    role: "Founder & CEO of Dermolahu Draughtmanship & Construction Works",
    content:
      "MEGAS TECH INC. built our e-commerce platform from scratch. The results have been outstanding, with a significantly huge increase in sales.",
    rating: 5,
    initials: "D",
    color: "#EC4899",
  },
];
