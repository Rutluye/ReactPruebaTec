export function ProductCard ({movie}) {

    const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path
    return  (
    
    <li>
        <img scr={imgUrl} alt={movie.title}/>
       <div>{movie.title}</div> 
    </li>

    );
}