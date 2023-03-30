import { useState } from "react";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";
import store from '../../store/Context'

export default function Home (){
    const { home } = store().data;
    const [fontSize, setFontSize] = useState(16);

    const increase = () => setFontSize(state => state + 2);
    const decrease = () => setFontSize(state => state - 2);
    return (
        <div className="page">
            <h1>{home.title}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <Carousel/>
            <Footer/>
            <p style={{fontSize: `${fontSize}px`}} >{home.information}</p>
        </div>
    ) 
}