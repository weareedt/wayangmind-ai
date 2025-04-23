import MentalHealthForm from "@/components/mental-health-form"

export default function Home() {
  return (
    <main className="container mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">WayangMind The Space: Pre-Assessment</h1>
        <p className="text-center text-muted-foreground mb-8">
          This form helps us tailor your immersive mindfulness experience for optimal comfort, engagement, and personal
          well-being.
        </p>
        <MentalHealthForm />
      </div>
    </main>
  )
}
