import Footer from "../../components/Footer";
import store from "../../store/Context";
import ListOfAllItems from '../../components/ListOfAllItems'

export default function About (){
    const { data, cards } = store();
    return (
        <div className="page">
            <h1>{data.about.title}</h1>
            <p>{data.about.information}</p>
            <ListOfAllItems cards={cards}/>
            <Footer/>
        </div>
    )
}