import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: 'unform1',
    description: 'Forms test',
    link: 'https://github.com/igomedeiros'
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />
            </ul>
        </section>
    )
}