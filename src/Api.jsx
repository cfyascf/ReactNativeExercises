import { useState, useEffect } from 'react'
import { api } from "./api/rmApi"

import { CharacterCard } from './components/CharacterCard'
import { Alert } from "./components/Alert"
import { Header } from './components/Header'

import style from './App.module.css'

export function Api() {
	const [data, setData] = useState([])
	const [page, setPage] = useState("")
	const [name, setName] = useState("")
	const [alert, setAlert] = useState(false)

	useEffect(() => {
		api.get(`/character/?page=${page}&name=${name}`).then((response) => {
			setAlert(false);
			if (!response.data.results) {
				console.log("Vazio")
			}
			setData(response.data.results)
		}).catch((error) => {
			if (error.response.status === 404) {
				setAlert(true);
			}
			console.error(error)
		})
	}, [page, name])

	return (
		<>
			<div>
				<Header />
			</div>
			<div className={style.wrapPage}>
				<h2>Rick and Morty API</h2>
				<div>
					<input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)} />
				</div>
				<div>
					<input type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
				</div>
				<div className={style.cardContainer}>
					{
						<Alert visible={alert} />
					}
					{data.map((item) => {
						return (
							<CharacterCard name={item.name} status={item.status} species={item.species} type={item.type} gender={item.gender} image={item.image} />
						)
					})}
				</div>
			</div>
		</>
	);
}