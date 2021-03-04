import React, { useState } from 'react'
import {useMutation  } from '@apollo/client'

import { EDIT_AUTHOR } from '../queries'

const AuthorForm = () => {
    const [born, setBorn] = useState('')
    const [name, setName] = useState('')

    const [ editAuthor ] = useMutation(EDIT_AUTHOR)
    
    const submit = (event) => {
       event.preventDefault()

       editAuthor({ variables: {name, born: parseInt(born) } })

       setBorn('')
       setName('')
    }

    return (
        <div>
            <h1>change author</h1>

            <form onSubmit={submit}>
                <div>
                    name <input 
                       value={name}
                       onChange={({target }) => setName(target.value)}
                    />
                </div>
                <div>
                    born <input
                       value={born}
                       onChange={({ target }) => setBorn(target.value)}
                       />
                </div>
                <button type='submit'>change authors</button>
            </form>
        </div>
    )
}

export default AuthorForm