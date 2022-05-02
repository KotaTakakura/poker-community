import Link from 'next/link'
import React, {useState} from 'react';
import axios from "axios";
import Card from '../../src/components/card/card'

export default function FirstPost() {
    const [selected_number, setSelectedNumber] = useState('2')
    const [selected_suit, setSelectedSuit] = useState('heart')
    return (
        <>
            <select onChange={(e) => setSelectedNumber(e.target.value)}>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="T">T</option>
                <option value="J">J</option>
                <option value="Q">Q</option>
                <option value="K">K</option>
                <option value="A">A</option>
            </select>

            <select onChange={(e) => setSelectedSuit(e.target.value)}>
                <option value="heart">heart</option>
                <option value="diamond">diamond</option>
                <option value="spade">spade</option>
                <option value="club">club</option>
            </select>
            
            <Card number={selected_number} suit={selected_suit}></Card>
        </>
    )
}