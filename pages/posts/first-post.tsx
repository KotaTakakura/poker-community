import Link from 'next/link'
import React, { useState } from 'react';

export default function FirstPost() {
    const language_list: string[] = ['japanese','english']
    const default_language: string = language_list[0]

    const message_list: { [key:string] : string } = {
        japanese: 'こんにちは、私はFirst Postです。',
        english: 'Hello, I\'m First Post.',
    }
    const [selected_language, setSelectedLanguage] = useState(default_language)
    const [message, setMessage] = useState(message_list[selected_language]);

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