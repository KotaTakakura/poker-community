import Link from 'next/link'
import React, { useState } from 'react';
import axios from "axios";

export default function FirstPost() {
    const language_list: string[] = ['japanese','english']
    const default_language: string = language_list[0]

    const message_list: { [key:string] : string } = {
        japanese: 'こんにちは、asaaaaa私はFirst Postです。',
        english: 'Hello, I\'m First Post.',
    }
    const [selected_language, setSelectedLanguage] = useState(default_language)
    const [message, setMessage] = useState(message_list[selected_language]);

    const url = process.env.NEXT_PUBLIC_API_BASE_URL
    axios.get(url + '/ping')
        .then(function (response) {
            // handle success
            console.log(response);
        }).catch(function (error) {
        // handle error
        console.log(error);
        })

    return (
        <>
            <FirstPostMessage message={message} />
            <button onClick={() => {
                setSelectedLanguage('japanese')
                setMessage(message_list['japanese'])
            }}>日本語</button>
            <button onClick={() => {
                setSelectedLanguage('english')
                setMessage(message_list['english'])
            }}>英語</button>
        </>
    )
}

interface PropsFirstPostMessage {
    message: string,
}

function FirstPostMessage(props: PropsFirstPostMessage) {
    return (
        <h1>{props.message}</h1>
    )
}