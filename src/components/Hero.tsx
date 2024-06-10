import { Link } from "react-router-dom";
import Container from "../Core/Container";

const Hero = () => {
    return (
        <div className="bg-red-50 h-screen">
            <Container>

                <div className="grid grid-cols-1 content-center gap-4">
                    <Link to="/typeOfMaking" className="text-center">
                        <img width={160} className="hover:scale-105 duration-300  mx-auto" src="src/assets/images/flowers1.png" alt="flowers" />
                        <button className=" hover:px-8 duration-300 border-2 border-red-600 bg-red-400 py-1 px-6 rounded-full text-white text-2xl">Bouquet</button>
                    </Link>
                    <Link to="/typeOfMaking" className="text-center">
                        <img width={160} className=" hover:scale-105 duration-300 mx-auto" src="src/assets/images/flowers2.png" alt="flowers" />
                        <button className="hover:px-8 duration-300 border-2 border-red-600 bg-red-400 py-1 px-6 rounded-full text-white text-2xl">Box</button>
                    </Link>
                    <Link to="/typeOfMaking" className="text-center">
                        <img width={160} className="hover:scale-105 duration-300  mx-auto" src="src/assets/images/flowers3.png" alt="flowers" />
                        <button className="hover:px-8 duration-300 border-2 border-red-600 bg-red-400 py-1 px-6 rounded-full text-white text-2xl">Vase</button>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default Hero;