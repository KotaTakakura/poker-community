import React, { useState } from 'react';
import styles from './Hand.module.css'
import Card from "../card/card";

export default function Hand(props: iHand) {
    const change_first_card = (prev_card: {number: string, suit: string}) => {
        props.change_card('first_card', prev_card)
    }
    const change_second_card = (prev_card: {number: string, suit: string}) => {
        props.change_card('second_card', prev_card)
    }

    return (
        <div>
            <div className={styles.cards_wrapper}>
                <Card number={props.first_card.number} suit={props.first_card.suit} change_card={change_first_card}></Card>
                <Card number={props.second_card.number} suit={props.second_card.suit} change_card={change_second_card}></Card>
            </div>
        </div>
    )
}

interface iHand{
    first_card?: {number: string, suit: string},
    second_card?: {number: string, suit: string},
    change_card: (clicked_card: string, prev_card: {number: string, suit: string}) => void,
}