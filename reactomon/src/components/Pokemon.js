const Pokemon = ({ pokemon }) => {
    return (
        <div className="card">
            {/* <img src={pokemon.url.sprites.frontDefault} alt="pokemon" style={{ width:'75px', height:'40px' }}/> */}
            <h3>{ pokemon.name }</h3>
        </div>
    )
}

export default Pokemon