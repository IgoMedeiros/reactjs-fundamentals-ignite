export function RepositoryItem(props) {
    const { repository } = props;
    return (
        <li>
            <strong>{repository?.name ?? 'Defaul'}</strong>
            <p>{repository?.description ?? 'Defaul'}</p>

            <a href={repository?.link ?? '#'}>Acessar repositório</a>
        </li>
    )
}