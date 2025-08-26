import HeroSection from '../components/HeroSection';
import ExperienceSection from '../components/ExperienceSection';
import Footer from '../components/Footer';
import HomeBg from '../assets/Homebg.jpg';
import Camera from '../assets/HomeCamera.png'

const Home = () => {
    return (

        <div className="">
            <div className="">
                <img
                    src={Camera}
                    alt="Camera"
                    className="fixed top-8 right-0 md:top-10 lg:top-12  w-[150px] md:w-[180px] lg:w-[220px] object-contain z-10"
                />
            </div>
            <div className="relative mt-[101px] w-full min-h-screen overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-100"
                    style={{
                        backgroundImage: `url(${HomeBg})`,
                    }}
                ></div>

                {/* Linear Gradient Overlay */}
                <div
                    className="absolute inset-0 opacity-90"
                    style={{
                        background: 'linear-gradient(120.56deg, #010C37 8.71%, #000000 40.69%)',
                    }}
                ></div>

                {/* Main Content */}
                <div className="relative z-10">
                    <HeroSection />
                    <ExperienceSection />
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Home;
