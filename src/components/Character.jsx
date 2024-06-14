import style from "./Card.module.css"

export const Character = ({id, name, status, species, type, gender, image}) => {
    return(
        <div className={style.card} key={id}>
                <h1>{name}</h1>
                {status ? <p>Status: 🟢</p> : <p>Status: 🔴</p>}
                <p>{species}</p>
                <p>{type}</p>
                <p>{gender}</p>
                <img src={image} alt={name} width={150} height={"auto"}/>
        </div>
    )
  }