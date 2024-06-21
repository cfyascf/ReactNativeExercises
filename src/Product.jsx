import { ProductCard } from './components/ProductCard'
import { Header } from './components/Header'
import products from './constants/products.json'
import style from './App.module.css'

export function Prod() {
	return (
		<>
			<div>
				<Header />
			</div>

			<div className={style.wrapPage}>
				<h2>Products Showroom</h2>
				<div className={style.cardContainer}>
					{products.map((item) => {
						return (
							<ProductCard name={item.name} desc={item.desc} categoria={item.categoria} value={item.value} status={item.status} image={item.image} key={item.id} />
						)
					})}
				</div>
			</div>
		</>
	);
}