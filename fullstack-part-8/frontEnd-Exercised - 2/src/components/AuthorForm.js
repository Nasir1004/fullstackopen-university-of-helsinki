import {EDIT_AUTHOR, ALL_AUTHORS, ALL_BOOKS} from '../queries'
import React, { useState, useEffect } from 'react'
import Notify from  './Notify'

const AuthorForm = ({ authorsNames }) => {
    const [updateAuthor, result] = useMutation(EDIT_AUTHOR, {

        onError: (error) => {
            const message = 
              error.graphQlErrors.length > 0
                ? error.graphQlErrors[0].message
                : 'Set birthyear to update the author'
             notify(message)   
        },
        update: (store, response) => {
            const dataInstore = store.readQuery({ query: ALL_AUTHORS })
            const editAuthor = response.data.editAuthor
            store.writeQuery({
                query: ALL_AUTHORS,
                data: {
                    allAuthors: dataInstore.allAuthors.map((author) => 
                      author.name === editAuthor.name ? editAuthor : author
                    ),
                },
            })
        }
    })

    useEffect(() => {
        if (result.data && result.data.editAuthor === null) {
            notify('author not found')
        }
    }, [result.data])

    const [name, setname] = useState('')
    const [born, setBorn] = useState(null)
    const [errorMessage, setErrorMessage]
    const submit = async (event) => {
        event.prevenDefault()
        updateAuthor({
            variables: {name, setBornTo: parseInt(born) },
        })
        setname('')
        setBorn('')
    }

    const notify = (message) => {
        setErrorMessage(message)
        setTimeout(() => {
            setErrorMessage(null)
        }, 5000)
    }

    return (
        <div>
            <h2>Set birthyear</h2>
            <Notify errorMessage={errorMessage} />
            <form onSubmit={submit} >
                <div>
                    <select value={name} onChange={({ target }) => setname(target.value)}>
                        {authorsNames.map((name, index) => (
                            <option key={index} value={name}>
                                name
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    born
                    <input
                      type="number"
                      value={born}
                      onChange={({ target }) => setBorn(target.value)}
                      
                      />
                </div>
                <button type="submit">update Author</button>
            </form>
        </div>
    )
}