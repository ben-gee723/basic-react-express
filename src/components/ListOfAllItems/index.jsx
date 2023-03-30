import ListGroup from 'react-bootstrap/ListGroup';
import ListItem from './ListItem';

export default function ListOfAllItems(props){
    const {cards} = props
    
    return (
        <div className='list-of-all-items'>
            {cards 
                ? cards.map((card, index) => {
                    return <ListItem 
                        key={index} 
                        id={index}
                        name={card.name}
                        species={card.species}
                        origin={card.origin.name}
                        image={card.image}
                        />
                })
                : "No cards"
            }
        </div>
    )
}