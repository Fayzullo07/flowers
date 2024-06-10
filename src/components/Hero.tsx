import { Link } from "react-router-dom";
import Container from "../Core/Container";
import IMAGES from "@/images/images";

const Hero = () => {
    return (
        <div className="bg-red-50 h-screen flex flex-col items-center justify-center">
            <Container>

                <div className="grid grid-cols-1 content-center gap-2">
                    <Link to="/typeOfMaking" className="text-center">
                        <img width={180} className="hover:scale-105 duration-300  mx-auto" src={IMAGES.flowers1} alt="flowers" />
                        <button className="w-48 hover:w-60 duration-300 border-2 border-red-600 bg-red-400 py-1 px-6 rounded-full text-white text-2xl">Bouquet</button>
                    </Link>
                    <Link to="/typeOfMaking" className="text-center">
                        <img width={180} className=" hover:scale-105 duration-300 mx-auto" src={IMAGES.flowers2} alt="flowers" />
                        <button className=" w-48 hover:w-60 duration-300 border-2 border-red-600 bg-red-400 py-1 px-6 rounded-full text-white text-2xl">Box</button>
                    </Link>
                    <Link to="/typeOfMaking" className="text-center">
                        <img width={180} className="hover:scale-105 duration-300  mx-auto" src={IMAGES.flowers3} alt="flowers" />
                        <button className="w-48 hover:w-60 duration-300 border-2 border-red-600 bg-red-400 py-1 px-6 rounded-full text-white text-2xl">Vase</button>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default Hero;