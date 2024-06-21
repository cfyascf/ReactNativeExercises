import style from "./Header.module.css"

export const Header = () => {
    return(
        <div className={style.navBtns}>
            <a href={`prod`}>Products</a>
            <a href={`api`}>API</a>
            <a href={`map`}>Map</a>
            <a href={`graph`}>Graph</a>
        </div>
    )
}
