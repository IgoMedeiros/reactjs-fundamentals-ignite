import { RepositoryItem } from "./RepositoryItem"
import { useEffect, useState } from "react"

import '../styles/repositories.scss'

export function RepositoryList() {
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/IgoMedeiros/repos')
            .then(response => response.json())
            .then(response => setRepositories(response))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
            </ul>
        </section>
    )
}