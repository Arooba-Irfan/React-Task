import React from 'react'
import Card from '../Card/Card'
import './CardList.css'

const CardList = () => {
    return (
        <div className="card-list">
            <Card category="lipstick"/>
            <Card category="blush"/>
            <Card category="eyeshadow"/>
            <Card category="mascara"/>
        </div>
    )
}

export default CardList