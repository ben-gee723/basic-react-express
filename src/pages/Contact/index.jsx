import Formular from "../../components/Formular";
import Footer from "../../components/Footer";

import store from "../../store/Context";

export default function Contact (){
    const { contact } = store().data;

    return (
        <div className="page">
            <h1>{contact.title}</h1>
            <p>{contact.information}</p>
            <Formular/>
            <Footer/>
        </div>
    ) 
}