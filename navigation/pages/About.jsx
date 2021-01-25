import Link from 'next/link'

const About = () => {
  return (
    <div>
      <h1>My Name is Yogesh Gaur and this is About Page</h1>
      <Link href="/Contact"><a>Go to Contact Page</a></Link>
      <Link href="/Services"><a>Go to Services Page</a></Link>
      <Link href="/"><a>Go to Home Page</a></Link>
    </div>
  )
}

export default About
