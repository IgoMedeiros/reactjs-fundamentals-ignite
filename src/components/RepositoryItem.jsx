export function RepositoryItem(props) {
    const { repository } = props;
    return (
        <li>
            <strong>{repository?.name ?? 'Defaul'}</strong>
            <p>{repository?.description ?? 'Defaul'}</p>

            <a href={repository?.html_url ?? '#'}>Acessar repositório</a>
        </li>
    )
}