import Link from 'next/link'
import React, {SetStateAction, useEffect, useState} from 'react';
import axios from "axios";
import Card from "../card/card";
import all_card_list from './all_card_list'
import PokerPlayer from "../poker_player/poker_player";
import position_list from "./position_list";
import Hand from "../hand/hand";

export default function PokerTable() {
    const all_card_list_copy = Array.from(all_card_list);

    const [used_card_list, setUsedCardList] = useState([]);

    //使われていないカード一覧を作成
    const createNoDuplicateCardList = () => {
        const no_duplicate_card_list = [];
        for(let i = 0; i < all_card_list_copy.length; i++){
            let duplicate_card_exist = false;
            for(let j = 0; j < used_card_list.length; j++){
                if (JSON.stringify(all_card_list_copy[i]) === JSON.stringify(used_card_list[j])){
                    duplicate_card_exist = true;
                }
            }
            if(!duplicate_card_exist){
                no_duplicate_card_list.push(all_card_list_copy[i])
            }
        }
        return no_duplicate_card_list;
    }

    const [rest_of_cards, setRestOfCards] = useState(createNoDuplicateCardList());

    useEffect(() => {
        setRestOfCards(createNoDuplicateCardList());
    },[used_card_list])

    const [selected_num_of_players, setSelectedNumOfPlayers] = useState('2')

    //使用中のカード
    const updateUsedCard = (prev_card: any, new_card: any) => {
        const new_used_card_list: any = (Array.from(used_card_list)).filter(used_card => used_card.number !== prev_card.number && used_card.suit !== prev_card.suit)
        new_used_card_list.push(new_card)
        setUsedCardList(new_used_card_list)
    }

    const poker_position_list_copy = Object.assign(position_list);
    const player_list: JSX.Element[] = [];
    for(let i = 0; i < Number(selected_num_of_players); i++){
        const position = poker_position_list_copy[Number(selected_num_of_players)][i]
        const first_card_component = <Card number={null} suit={null} rest_of_cards={rest_of_cards} change_card={updateUsedCard}></Card>
        const second_card_component = <Card number={null} suit={null} rest_of_cards={rest_of_cards} change_card={updateUsedCard}></Card>
        const hand = <Hand first_card={first_card_component} second_card={second_card_component}></Hand>

        player_list.push(
            <PokerPlayer
                key={position}
                hand={hand}
                position={position}></PokerPlayer>
        )
    }

    return (
        <>
            <select onChange={(e) => setSelectedNumOfPlayers(e.target.value)}>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </select>
            {player_list}
        </>
    )
}