import Link from 'next/link'
import React, { useState } from 'react';
import axios from "axios";
import Card from '../../src/components/card/card'

export default function FirstPost() {
    return (
        <>
            <Card number={'2'} suit={'heart'}></Card>
            <Card number={'3'} suit={'diamond'}></Card>
            <Card number={'4'} suit={'spade'}></Card>
            <Card number={'5'} suit={'club'}></Card>
            <Card number={'6'} suit={'heart'}></Card>
            <Card number={'7'} suit={'diamond'}></Card>
            <Card number={'8'} suit={'spade'}></Card>
            <Card number={'9'} suit={'club'}></Card>
            <Card number={'T'} suit={'heart'}></Card>
            <Card number={'J'} suit={'diamond'}></Card>
            <Card number={'Q'} suit={'spade'}></Card>
            <Card number={'K'} suit={'club'}></Card>
            <Card number={'A'} suit={'heart'}></Card>
        </>
    )
}