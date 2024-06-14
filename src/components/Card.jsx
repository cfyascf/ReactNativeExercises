/* eslint-disable react/prop-types */

import style from "./Card.module.css"

export const Card = ({name, desc, categoria, value, image, status}) => {
  return(
      <div className={style.card}>
          <h1>{name}</h1>
          <h2>{desc}</h2>
          <h2>{categoria}</h2>
          <p>{value}</p>
          {status == "Alive" ? <p>Status: 🟢</p> : <p>Status: 🔴</p>}
          <img src={image} alt={name} width={150} height={"auto"}/>
      </div>
  )
}