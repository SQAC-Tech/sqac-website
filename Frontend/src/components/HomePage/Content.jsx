import SQAC from "../../assets/SQAC2.png";

function Content() {
    return (
        <div className="w-full min-h-[calc(100vh-100px)] flex flex-col items-center justify-between p-4 md:p-6">
            
            <div className="w-full text-center mt-4 mb-6 md:mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#C19AF1] to-[#FF93F2] bg-clip-text text-transparent">
                    Software Quality Assurance Community
                </h1>
            </div>

            
            <div className="flex flex-col items-center w-full flex-grow">
                
                <div className="mb-6 md:mb-10 w-full max-w-[90vw] sm:max-w-[85vw] md:max-w-[704px]">
                    <img 
                        src={SQAC} 
                        alt="SQAC Community" 
                        className="w-full h-auto object-contain"
                        loading="lazy"
                    />
                </div>
                
                
                <div className="text-center mb-8 p-4 md:p-6 rounded-2xl bg-black/40 backdrop-blur-sm w-full max-w-3xl mx-auto">
                    <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 leading-relaxed">
                        Building a thriving community of developers, testers, and innovators to drive quality forward.
                    </p>
                </div>
            </div>

            
            <div className="mt-auto mb-4 p-[2px] rounded-2xl bg-gradient-to-br from-pink-500 to-purple-700 w-full max-w-[300px] sm:max-w-[350px] hover:scale-[1.03] transition-transform">
                <button className="bg-[#1a0033] text-white font-bold px-6 py-2 sm:py-3 rounded-2xl w-full text-xl sm:text-2xl">
                    Explore ≫
                </button>
            </div>
        </div>
    )
}

export default Content;