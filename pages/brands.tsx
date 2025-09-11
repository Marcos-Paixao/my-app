import { GetStaticProps } from "next";

interface BrandsPageProps {
    ourBrands: Array<string>;
}


export default function Brands({ourBrands}: BrandsPageProps) {
  return (
    <div>
        <h1>Brands Available</h1>   
        <br />
        <ul>
            {ourBrands.map((brand, brands) => (
                <li key={brands}>{brand}</li>
            ))}
        </ul>
    </div>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    const ourBrands = [
        'Dell',
        'HP',
        'Apple',
        'Lenovo',
        'Asus',
        'Acer',
        'Microsoft',
        'Samsung',
        'LG',
        'Sony',
        Math.random().toString(36).substring(7) // Random brand for demonstration
    ];

    return { 
        props: {
             ourBrands, 
         }, 
        revalidate: 10  // Revalidate every 24 hours
    };
};