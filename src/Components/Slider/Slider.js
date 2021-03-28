import React, { useEffect, useState } from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import "./Slider.css"

const Slider = () => {

    var[image,setImage]=useState("")
    var[index,setIndex]=useState(0)
    var length;

    async function fetchMyApi(){
        var res = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
        var img = await res.json()
        console.log(img[index].image_link)
        setImage(img[index].image_link)
    }
    useEffect(() => {
        fetchMyApi()
    }, [])
    
    var indexInc = () =>{
        setIndex(++index)
        fetchMyApi()
    }
    var indexDec = () =>{
        setIndex(--index)
        fetchMyApi()
    }

    return (
        <div className="center" style={{position:"relative"}}>
            <ArrowForwardIosIcon style={{position:"absolute",top:"50%" ,right:"17%"}} onClick={indexInc}/>
                <div className="imgContainer" style={{backgroundImage: `url(${image})`}}>
            <ArrowBackIosIcon style={{position:"absolute",top:"50%" ,left:"17%"}} onClick={indexDec}/>
            </div>
        </div>
    )
}

export default Slider