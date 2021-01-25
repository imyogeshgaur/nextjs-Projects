import Link from 'next/link'

const index = () => {
  return (
    <div>
      <h1>My Name is Yogesh Gaur and this is Home Page</h1>
      <Link href="/Contact"><a>Go to Contact Page</a></Link>
      <Link href="/About"><a>Go to About Page</a></Link>
      <Link href="/Services"><a>Go to Services Page</a></Link>
    </div>
  )
}

export default index

