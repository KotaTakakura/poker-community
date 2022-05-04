import React, { useState } from 'react';
import styles from './CardSelector.module.css'
import CardImage from "../card_image/card_image";

export default function CardSelector(props:any) {

    const card_select_list: JSX.Element[] = [];
    for(let i = 0; i < props.rest_of_cards.length; i++){
        card_select_list.push(
            <div className={styles.card_wrapper}>
                <CardImage
                    width={`16px`}
                    notify_click={() => {
                        props.change_card({number:props.rest_of_cards[i]['number'],suit:props.rest_of_cards[i]['suit']})
                    }}
                    number={props.rest_of_cards[i]['number']} suit={props.rest_of_cards[i]['suit']}></CardImage>
            </div>
        )
    }

    return (
        <>
            <div className={styles.card_selector_wrapper}>
                {card_select_list}
            </div>
        </>
    )
}