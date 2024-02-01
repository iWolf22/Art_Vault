'use client'

import Link from 'next/link'
import { useState } from 'react'
import NewsSignupInputs from './NewsSignupInputs'

export default function NewsSignup() {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const subscribeData = {
        firstName,
        lastName,
        email
    }

    return (
        <div className="flex flex-row w-1/3">
            <form className="flex flex-col items-center">
                <h1 className="text-xl mb-3">Sign up for Art Vault News</h1>
                <NewsSignupInputs
                    props={{ setEmail, setFirstName, setLastName }}
                />
                <div className="flex  justify-center items-center tracking-wider bg-teak rounded-standard">
                    <button className="p-3 text-black hover:text-maroon-flush font-open-sans font-bold text-2xl md:text-3xl xl:text-2xl">
                        Subscribe
                    </button>
                </div>
            </form>
        </div>
    )
}
