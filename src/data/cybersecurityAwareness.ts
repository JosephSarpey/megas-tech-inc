export const featuredContent = [
  "NEW YORK – Cybercriminals are increasingly using advanced generative AI tools to launch highly sophisticated phishing campaigns, bypassing traditional email filters and targeting local business employee networks.",
  "The rapid rise of these automated attacks marks a dangerous shift in digital threats. Security defense must now move past basic firewall setups and focus heavily on continuous employee education, strict authentication policies, and immediate incident reporting protocols.",
  "In an exclusive briefing, guest host Sarah Jenkins sits down with Dr. Marcus Vance, Chief Security Officer, to discuss how easily these scams slip through defenses, and critically, what immediate protocols your team must implement next.",
  "The conversation explores how organizations can turn basic security guidelines into proactive daily defense, the challenges of identifying deepfake audio scams, and what these evolving tactics mean for workplace data privacy.",
  "Watch or listen to the full episode above to learn the exact steps required to secure your data, train your team, and defend your business footprint from emerging AI vulnerabilities.",
];

export const featuredTags = ["#PhishingAlert", "#SmallBusiness", "#AIsafety"];

export interface Episode {
  id: string;
  slug: string;
  title: string;
  duration: string;
  type: "video" | "audio" | "blog";
  thumbnail: string;
  content?: string[];
  date?: string;
  author?: string;
  mediaUrl?: string;
  tags?: string[];
}

export const recentEpisodes: Episode[] = [
  {
    id: "ep-12",
    slug: "anatomy-of-ransomware-attack",
    title: "The Anatomy of a Ransomware Attack",
    duration: "45:20",
    type: "audio",
    thumbnail:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    date: "Oct 12, 2023",
    author: "Cyber Security Brief",
    mediaUrl: "https://www.youtube.com/embed/5qap5aO4i9A",
    tags: ["#Ransomware", "#CyberCrime", "#DataProtection"],
  },
  {
    id: "ep-11",
    slug: "zero-trust-architecture-explained",
    title: "Zero Trust Architecture Explained",
    duration: "32:15",
    type: "video",
    thumbnail:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
    date: "Sep 28, 2023",
    author: "Tech Insights",
    mediaUrl: "https://www.youtube.com/embed/bKzeM1M7lD0",
    tags: ["#ZeroTrust", "#NetworkSecurity", "#Architecture"],
  },
  {
    id: "ep-10",
    slug: "securing-the-remote-workforce",
    title: "Securing the Remote Workforce",
    duration: "28:40",
    type: "audio",
    thumbnail:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
    date: "Sep 15, 2023",
    author: "Cyber Security Brief",
    mediaUrl: "https://www.youtube.com/embed/M7lc1UVf-VE",
    tags: ["#RemoteWork", "#VPN", "#EndpointSecurity"],
  },
  {
    id: "blog-1",
    slug: "why-passwords-are-not-enough",
    title: "Why Passwords Are Not Enough in 2024",
    duration: "5 min read",
    type: "blog",
    thumbnail:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    date: "Nov 02, 2023",
    author: "Alex Mercer",
    content: [
      "In the ever-evolving landscape of cybersecurity, relying solely on passwords to protect sensitive data is akin to using a flimsy padlock on a bank vault. As cyber threats become more sophisticated, organizations must adopt multi-layered security strategies to safeguard their assets.",
      "The primary issue with passwords is their vulnerability to various attack vectors, including brute-force attacks, phishing, and credential stuffing. Users often reuse passwords across multiple accounts, meaning a single compromised password can lead to widespread unauthorized access.",
      "To counter these risks, Multi-Factor Authentication (MFA) has emerged as a critical security measure. By requiring users to provide two or more verification factors—such as a password and a temporary code sent to their mobile device—MFA significantly enhances the difficulty for attackers to gain access.",
      "Beyond MFA, organizations are increasingly adopting passwordless authentication methods. These include biometric verification (like fingerprint or facial recognition) and hardware tokens. Not only do these methods provide stronger security, but they also improve user experience by eliminating the need to remember complex passwords.",
      "Ultimately, the shift away from password-only security represents a necessary evolution in our approach to digital identity. By implementing robust authentication mechanisms, businesses can better protect themselves against the growing tide of cyber threats.",
    ],
    tags: ["#MFA", "#Passwordless", "#IdentitySecurity"],
  },
];
