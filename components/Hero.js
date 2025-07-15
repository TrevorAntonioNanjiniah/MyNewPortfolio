import Image from 'next/image'

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16">
      <Image src="/logo.png" alt="NTA Logo" width={100} height={100} />
      <h1 className="text-4xl font-bold mt-4">NANJINIAH TREVOR ANTONIO</h1>
      <p className="text-xl mt-2">Software Engineer | Mobile Developer | Cloud Engineer | Web Developer</p>
      <a href="/resume.pdf" download className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
        Download CV
      </a>
    </section>
  )
}
