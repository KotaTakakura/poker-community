import Link from 'next/link'
import React, {SetStateAction, useEffect, useState} from 'react';
import axios from "axios";
import CardSelector from "../card_selector/card_selector";
import all_card_list from './all_card_list'
import PokerPlayer from "../poker_player/poker_player";
import position_list from "./position_list";
import styles from './PokerTable.module.css'

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

    const [selected_num_of_players, setSelectedNumOfPlayers] = useState('6')
    const [players_list, setPlayersList] = useState((() => {
        let players: {[key:string]: {first_card: {number: string|null, suit: string|null},second_card: {number: string|null, suit: string|null}}} = {};

        for(let i = 0; i < position_list()[Number(selected_num_of_players)].length; i++){
            players[position_list()[Number(selected_num_of_players)][i]] = {
                first_card: {number: null, suit: null},
                second_card: {number: null, suit: null},
            }
        }
        return players;
    })())

    useEffect(() => {
        setPlayersList((() => {
            let players: {[key:string]: {first_card: {number: string|null, suit: string|null},second_card: {number: string|null, suit: string|null}}} = {};

            for(let i = 0; i < position_list()[Number(selected_num_of_players)].length; i++){
                players[position_list()[Number(selected_num_of_players)][i]] = {
                    first_card: {number: null, suit: null},
                    second_card: {number: null, suit: null},
                }
            }
            return players;
        })())
    },[selected_num_of_players])

    //使用中のカード
    const updateUsedCard = (prev_card: any, new_card: any) => {
        const new_used_card_list: any = (Array.from(used_card_list)).filter(used_card => used_card.number !== prev_card.number && used_card.suit !== prev_card.suit)
        new_used_card_list.push(new_card)
        setUsedCardList(new_used_card_list)
    }

    const [show_card_selector,setShowCardSelector] = useState(false)
    const [position_to_change_card,setPositionToChangeCard] = useState('')
    const [clicked_card_to_change_card,setClickedCardToChangeCard] = useState('')
    const [prev_card_to_change_card,setPrevCardToChangeCard] = useState({number:null, suit:null})

    const showCardSelector = (position: string, clicked_card: string, prev_card: {number: string|null, suit: string|null}) => {
        setShowCardSelector(true)
        setPositionToChangeCard(position)
        setClickedCardToChangeCard(clicked_card)
        setPrevCardToChangeCard(prev_card)
    }

    const hideCardSelector = () => {
        setShowCardSelector(false)
        setPositionToChangeCard('')
        setClickedCardToChangeCard('')
        setPrevCardToChangeCard({number:null, suit:null})
    }

    const poker_position_list_copy = position_list();
    const player_list: JSX.Element[] = [];
    for(let i = 0; i < Number(selected_num_of_players); i++){
        const position = poker_position_list_copy[Number(selected_num_of_players)][i]
        const first_card = players_list[position].first_card;
        const second_card = players_list[position].second_card;

        player_list.push(
            <PokerPlayer
                key={position}
                first_card={first_card}
                second_card={second_card}
                position={position}
                change_card={showCardSelector}></PokerPlayer>
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
            <div className={show_card_selector ? styles.card_selector_wrapperShow : styles.card_selector_wrapper}>
                <button onClick={hideCardSelector}>CLOSE</button>
                <CardSelector rest_of_cards={rest_of_cards} change_card={updateUsedCard}></CardSelector>
            </div>
        </>
    )
}