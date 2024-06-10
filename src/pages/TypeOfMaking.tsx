import Container from "@/Core/Container";
import IMAGES from "@/images/images";
import { Link } from "react-router-dom";

const TypeOfMaking = () => {
    return (
        <div className="bg-red-50 h-screen flex  items-center justify-center">
            <Container>

                <div className="grid grid-cols-1 items-center gap-4">
                    <img width={300} className="mx-auto hover:scale-105 duration-300" src={IMAGES.flowers4} alt="flowers" />
                    <Link to="/typeOfMaking" className="text-center">
                        <button className="w-52 hover:w-60 duration-300 border-2 border-red-600 bg-red-400 py-1 px-6 rounded-full text-white text-2xl">AI 🤖</button>
                    </Link>
                    <Link to="/typeOfMaking" className="text-center">
                        <button className="w-52 hover:w-60 duration-300 border-2 border-red-600 bg-red-400 py-1 px-6 rounded-full text-white text-2xl">Pre-made 🪄</button>
                    </Link>
                    <Link to="/typeOfMaking" className="text-center">
                        <button className="w-52 hover:w-60 duration-300 border-2 border-red-600 bg-red-400 py-1 px-6 rounded-full text-white text-2xl">Prepared ✅</button>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default TypeOfMaking;