import { Children } from "react"
import NavBar from "./NavBar"

const Layout = ({children}) => {
    return (
        <>
        <NavBar />
        {children}
        </>
    )
}

export default Layout
