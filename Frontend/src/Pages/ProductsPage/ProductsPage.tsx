import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { FetchProducts } from '../../Service/Api';
import cls from './ProductsPage.module.scss';

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

const ProductsPage = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        FetchProducts().then((data: Product[]) => setProducts(data))
    }, [])

    return (
        <>
            <Helmet>
                <title>Каталог товаров | Лучшие цены на всё</title>
                <meta name="description" content="Выберите лучшие товары по отличным ценам. Огромный каталог товаров всех категорий. Быстрая доставка!" />
                <meta name="keywords" content="магазин, каталог товаров, лучшие цены, купить онлайн" />

                {/* OpenGraph */}
                <meta property="og:title" content="Каталог товаров | Лучшие цены на всё" />
                <meta property="og:description" content="Выберите лучшие товары по отличным ценам. Огромный каталог товаров всех категорий. Быстрая доставка!" />
                <meta property="og:image" content="https://via.placeholder.com/1200x630.png?text=Каталог+товаров" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://localhost:5173/" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Каталог товаров | Лучшие цены на всё" />
                <meta name="twitter:description" content="Выберите лучшие товары по отличным ценам. Огромный каталог товаров всех категорий. Быстрая доставка!" />
                <meta name="twitter:image" content="https://via.placeholder.com/1200x630.png?text=Каталог+товаров" />
            </Helmet>

            <div className={cls.container}>
                <h1 className={cls.title}>Наши товары на SPA приложении</h1>
                <div className={cls.productsGrid}>
                    {products.map((product) => (
                        <Link key={product.id} to={`/product/${product.id}`} className={cls.link}>
                            <ProductCard product={product} />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductsPage;
