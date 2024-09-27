import Nav from "./components/Nav"
import Footer from "./components/Footer";

function Home() {
    return (
        <div>
            <Nav />
            <Footer fixed="fixed-bottom" />
        </div>
    )
}

export default Home;