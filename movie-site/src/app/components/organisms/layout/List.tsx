import Link from "next/link"
import layout from "../../../styles/style.module.css"
import movieJson from "../../../../data/movies.json"
import TheatersButton from "../../atoms/button/TheatersButton"

const List = () => {
    return (
        <>
            {movieJson.map((output) => {
                const icon_display = output.icon === null ? null : <img src={output.icon} className={layout.icon} />;
                return (
                    <div className={layout.display}>
                        <div className={layout.imageWrap}>
                            <Link href="">
                                <img src={output.image} className={layout.image} />
                            </Link>
                        </div>
                        <div className={layout.contentWrap}>
                            <div className={layout.iconBox}>{icon_display}</div>
                            <div className={layout.titleBox}>
                                <Link href="">
                                    <div className={layout.movieTitle}>{output.movies_title}</div>
                                </Link>
                                <div className={layout.movieText}>{output.text}</div>
                                <div className={layout.theaterBox}>
                                 
                                 <TheatersButton>{output.theater}</TheatersButton>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}     
        </>              
        
    )
}

export default List;