import { Users, Globe, Award, TrendingUp } from "lucide-react"

const stats = [
  { icon: Users, label: "Active Students", value: "125K+", suffix: "learning" },
  { icon: Globe, label: "Countries", value: "185", suffix: "worldwide" },
  { icon: Award, label: "Scholarships", value: "12.5K+", suffix: "opportunities" },
  { icon: TrendingUp, label: "Success Rate", value: "89%", suffix: "placement" },
]

export default function StatsSection() {
  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="group text-center p-6 rounded-2xl border border-border/40 hover:border-primary/40 bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-all duration-500 hover:shadow-lg"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full group-hover:from-primary/40 group-hover:to-accent/40 transition-all duration-500 group-hover:scale-110">
                    <Icon className="text-primary" size={32} />
                  </div>
                </div>
                <p className="text-5xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {stat.value}
                </p>
                <p className="text-muted-foreground font-semibold text-sm uppercase tracking-wide">{stat.label}</p>
                <p className="text-xs text-muted-foreground/60 mt-2">{stat.suffix}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
