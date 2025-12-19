import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    location: "Taiwan → Canada",
    major: "Computer Science",
    image: "/female-student-profile.jpg",
    text: "ScholarGlobal made finding my scholarship effortless. The platform's resources and guidance were invaluable!",
    rating: 5,
  },
  {
    name: "João Silva",
    location: "Brazil → Netherlands",
    major: "Business",
    image: "/male-student-profile.jpg",
    text: "The detailed guides helped me craft a compelling application. I secured my full scholarship on first attempt!",
    rating: 5,
  },
  {
    name: "Amara Okafor",
    location: "Nigeria → UK",
    major: "Medicine",
    image: "/female-healthcare-student.jpg",
    text: "Having all information centralized removed so much stress. Best platform for ambitious students worldwide.",
    rating: 5,
  },
]

export default function TestimonialSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-primary/3 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Success Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real students achieved their dreams with ScholarGlobal—yours is next
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-card rounded-2xl p-8 border border-border/40 hover:border-primary/40 transition-all duration-500 hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" className="text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-8 font-medium leading-relaxed text-lg">"{testimonial.text}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-border/40">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300"
                  />
                  <div>
                    <p className="font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <p className="text-xs text-primary font-semibold">{testimonial.major}</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
