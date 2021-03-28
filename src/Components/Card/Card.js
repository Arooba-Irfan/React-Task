import React, { useEffect, useState } from 'react'
import './Card.css'

const Card = ({category}) => {

    var[image,setImage]=useState("")

    async function fetchMyApi(){
        var res = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=${category}`)
        var img = await res.json()
        console.log(img[0].image_link)
        setImage(img[0].image_link)
    }
    useEffect(() => {
        fetchMyApi()
    }, [])

    return (
        <div className="card" >
            <h3 style={{alignSelf:"center",justifySelf:"center"}}>{category.toUpperCase()}</h3>
            <div style={{backgroundImage: `url(${image})`}}></div>
        </div>
    )
}

export default Card