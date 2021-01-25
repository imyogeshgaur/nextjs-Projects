import Link from 'next/link'

const Contact = () => {
  return (
    <div>
      <h1>My Name is Yogesh Gaur and this is Contact Page</h1>
      <Link href="/"><a>Go to Home Page</a></Link>
      <Link href="/About"><a>Go to About Page</a></Link>
      <Link href="/Services"><a>Go to Services Page</a></Link>
    </div>
  )
}

export default Contact;

