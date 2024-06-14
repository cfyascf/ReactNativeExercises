import { useState, useEffect } from 'react'
import { Card } from './components/Card'
import produtos from './constants/produtos.json'
import { api } from "./api/rmApi"
import style from './App.module.css'
import { Character } from './components/Character'
import { Alert } from "./components/Alert"

function App() {
  const [show, setShow] = useState("")
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
      <div className={style.wrapBtns}>
        <button onClick={() => setShow("prod")}>Produtos</button>
        <button onClick={() => setShow("api")}>API</button>
        <button onClick={() => setShow("map")}>Mapa</button>
      </div>
      <div className={style.wrapPage}>
        <h1>Exercícios de manutenção</h1>
        {show === "prod" &&
          <>
            <h2>Showroom de produtos</h2>
            <div className={style.cardContainer}>
              {produtos.map((item) => {
                return (
                  <Card name={item.name} desc={item.desc} categoria={item.categoria} value={item.value} status={item.status} image={item.image} key={item.id} />
                )
              })}
            </div>
          </>
        }
        {show === "api" &&
          <>
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
                  <Character name={item.name} status={item.status} species={item.species} type={item.type} gender={item.gender} image={item.image} />
                )
              })}
            </div>
          </>
        }
        {show === "map" &&
          <>
            <h2>Mapa</h2>
            <div>
              mapa aqui
            </div>
          </>
        }
      </div>
    </>
  )
}

export default App
