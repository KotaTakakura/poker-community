import React, { useState } from 'react';
import styles from './Card.module.css'
import CardImage from "../card_image/card_image";

export default function Card(props: iCard) {
    const changeCard = () => {
        if(props.change_card === null) {
            return;
        }
        props.change_card({number: props.number, suit: props.suit})
    }
    return (
        <>
            <CardImage number={props.number} suit={props.suit} notify_click={changeCard}></CardImage>
        </>
    )
}

interface iCard{
    number?: string,
    suit?: string,
    change_card?: (prev_card: {number: string, suit: string}) => void
}