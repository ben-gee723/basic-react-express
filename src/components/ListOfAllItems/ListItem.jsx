export default function ListItem(props){
    const {name, species, origin, image} = props;

    return (
        <div className="card" style={{width: "18rem"}}>
          <img src={image} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h3>{name}</h3>
            <p className="card-text"> {species} </p>
            <p className="card-text"> {origin} </p>
          </div>
        </div>
    )
}