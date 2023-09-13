import { ProductCard } from './ProductCard';
import productos from './productos.json'

export function PruebaGrid() {
    return (
        <ul>
            {productos.map((movie) => (

                <ProductCard key={movie.id} movie={movie} />
            ))}
        </ul>
    );
}