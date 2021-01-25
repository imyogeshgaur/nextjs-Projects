import Link from "next/Link"

const Services = () => {
    return (
        <div>
            <h1>My name is Yogesh Gaur and this is Our Service Page</h1>
            <Link href="/Contact"><a>Go to Contact Page</a></Link>
            <Link href="/About"><a>Go to About Page</a></Link>
            <Link href="/"><a>Go to Home Page</a></Link>
        </div>
    )
}

export default Services
