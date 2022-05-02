import React, { useState } from 'react';
import styles from './Card.module.css'

export default function Card(props: iCard) {
    const number_list = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];
    const suit_list = ['heart','diamond','spade','club'];

    const number_color = props.suit === 'heart' || props.suit === 'diamond' ? 'red' : 'black';
    const number_image_src = `/card_images/number/${number_color}/${props.number}.png`;
    const suit_image_src = `/card_images/suit/${props.suit}.png`;
    const number_image_alt = number_color + props.number;
    const suit_image_alt = props.suit;

    return (
        <div className={styles.card_wrapper}>
            <div>
                <img src={number_image_src} alt={number_image_alt} className={styles.card_number}/>
            </div>
            <div>
                <img src={suit_image_src} alt={suit_image_alt} className={styles.card_suit}/>
            </div>
        </div>
    )
}

interface iCard{
    number: string,
    suit: string,
}