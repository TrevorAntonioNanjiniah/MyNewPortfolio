export default function Contact() {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="flex flex-col max-w-md">
        <input type="text" name="name" placeholder="Your Name" required className="border p-2 mb-4"/>
        <input type="email" name="email" placeholder="Your Email" required className="border p-2 mb-4"/>
        <textarea name="message" placeholder="Your Message" required className="border p-2 mb-4"></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send Message</button>
      </form>
    </section>
  )
}
