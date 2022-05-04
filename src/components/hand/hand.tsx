import React, { useState } from 'react';
import styles from './Hand.module.css'

export default function Hand(props: iHand) {
    return (
        <>
            {props.first_card}
            {props.second_card}
        </>
    )
}

interface iHand{
    first_card: JSX.Element,
    second_card: JSX.Element,
}