import { Metadata } from "next";
import TestimonialForm from "@/components/testimonials/TestimonialForm";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials | MEGAS TECH INC",
  description:
    "Read what our clients say about our services and share your experience with us.",
};

export default function TestimonialsPage() {
  return (
    <div
      className="min-h-screen pt-32 pb-24"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black 30%, transparent 100%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="label-pill mb-6 inline-flex shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            Client Success
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
              Clients Say
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#A1A1AA] leading-relaxed">
            See the impact we&apos;ve made on businesses worldwide. We value
            your feedback and strive for excellence in every project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form Side */}
          <div className="relative group">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none transition-all duration-500 group-hover:bg-accent/10" />

            <div className="bg-[#121214] border border-white/5 p-8 md:p-10 rounded-[24px] shadow-2xl relative z-10 backdrop-blur-xl transition-all duration-300 hover:border-accent/30">
              <h2
                className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight"
                style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
              >
                Share Your Experience
              </h2>
              <TestimonialForm />
            </div>
          </div>

          {/* Testimonials Side */}
          <div>
            <h2
              className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight"
              style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
            >
              Recent Feedback
            </h2>
            <div className="space-y-6">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="group bg-[#121214] border border-white/5 p-8 rounded-[24px] overflow-hidden transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] relative">
                  {/* Glowing gradient accent on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] ${i < testimonial.rating ? "text-accent" : "text-white/10"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-[#E4E4E7] text-lg leading-relaxed mb-8 italic">
                      &quot;{testimonial.content}&quot;
                    </p>
                    <div className="flex items-center pt-6 border-t border-white/5">
                      <div 
                        className="h-12 w-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                        style={{ background: testimonial.color }}
                      >
                        {testimonial.initials}
                      </div>
                      <div className="ml-4">
                        <h4
                          className="font-bold text-white tracking-tight"
                          style={{
                            fontFamily: "var(--font-plus-jakarta), sans-serif",
                          }}
                        >
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-accent font-medium">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
