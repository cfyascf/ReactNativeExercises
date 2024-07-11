import style from "./Card.module.css"

export const ProductCard = ({ name, desc, categoria, value, image, status }) => {
	return (
		<div class="card" className={style.card}>
			<h1>{name}</h1>
			<h2>{desc}</h2>
			<p>{categoria}</p>
			{status ? <p>Status: 🟢</p> : <p>Status: 🔴</p>}
			<img src={image} alt={name} width={150} height={"auto"} />
			<p>{value}</p>
		</div>
	)
}

// function openModal() {
// 	var card = document.getElementById()
// 	return (
// 		<TiltCard/>
// 	)
// }