import Link from 'next/link'
import React, {useState} from 'react';
import axios from "axios";
import Card from '../../src/components/poker_table/poker_table'
import PokerTable from "../../src/components/poker_table/poker_table";

export default function FirstPost() {
    return (
        <>
            <div>
                <PokerTable></PokerTable>
            </div>
        </>
    )
}