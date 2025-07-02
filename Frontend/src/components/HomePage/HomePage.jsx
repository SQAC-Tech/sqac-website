import Hero from "./Hero"
import backgroundImage from "../../assets/background2.png"

function HomePage() {
    return (
        <>
            <div className="relative min-h-screen">
                <div
                    className="fixed top-0 left-0 w-full h-full -z-20 bg-no-repeat bg-cover"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                ></div>

                <Hero />
            </div>
        </>
    )
}

export default HomePage