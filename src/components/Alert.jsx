import style from "./Card.module.css"

export const Alert = ({ visible }) => {
	return (
		<div className={style.card} style={{ display: visible ? "flex" : "none" }}>
			<h1>Not found</h1>
			<p>Character does not exist :/</p>
		</div>
	)
}