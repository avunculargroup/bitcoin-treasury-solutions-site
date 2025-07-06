import Layout from '@/components/Layout/Layout'
import Hero from '@/components/Features/Hero'

export default function Home() {
  return (
    <Layout activeSection="home">
      <Hero />
      
      {/* Placeholder sections for future migration */}
      <section id="why-bitcoin" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why Bitcoin?</h2>
          <p className="text-center text-gray-600">Content coming soon...</p>
        </div>
      </section>
      
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <p className="text-center text-gray-600">Content coming soon...</p>
        </div>
      </section>
      
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <p className="text-center text-gray-600">Content coming soon...</p>
        </div>
      </section>
      
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <p className="text-center text-gray-600">Content coming soon...</p>
        </div>
      </section>
    </Layout>
  )
}
