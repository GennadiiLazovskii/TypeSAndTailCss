import React, { useState } from "react";
import { IProduct } from '../model';

interface ProductProps {
    product: IProduct
}

const Product = ({ product }: ProductProps) => {

    const [details, setDetails] = useState(false);

    const btnBgClassName = details ? 'bg-blue-400' : 'bg-yellow-400';
    const btnClasess = ["py-2 px-4 border", btnBgClassName];

    return (
        <div
            className="border py-2 px-4 roundet flex flex-col items-center mb-2"
        >
            <img src={product.image} className='w-1/6' alt={product.title} />
            <p>{product.title}</p>
            <p className="font-bold">{product.price + '$'}</p>
            <button className={btnClasess.join(' ')}
                onClick={() => setDetails(prev => !prev)}
            >{details ? "Hide Description" : "Show Description"}
            </button>
            {details &&
                <div>
                    <p>{product.description}</p>
                    <p>Rate: <span style={{ fontWeight: 'bold' }}>{product?.rating?.rate}</span></p>
                </div>
            }
        </div>
    );
}

export default Product;