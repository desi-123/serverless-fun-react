import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Product = () => {

    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState(null)
    const {productID} = useParams

    const fetchData = async () => {
        try {
            const {data} = await axios.get(`/api/products?id=${productID}`)
            setProducts(data)
        } catch (error) {
            
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
         // eslint-disable-next-line 
    }, [])

    if (loading) {
        return (
            <section className="section section-center">
                <h2>Loading...</h2>
            </section>
        )
    }
    const {fields} = Product
    const {name, desc, price, image} = fields
    return (
        <section className="section section-center">
            <Link to='/' className="link">
            back home
            </Link>
            <div className="title">
                <h2>{name}</h2>
                <div className="title-underline"></div>
            </div>
            <article className="single-product">
                <img className="single-product-img" src={image[0].url} alt={name} />
                <h5>{name}</h5>
                <h5 className="price">${price}</h5>
                <p>{desc}</p>
            </article>
        </section>
    )
}

export default Product
