import Type from "./Type";

const TypeList = ({ types }) => {
    return (
        <div className="cards">
            { types.map((type, index) => (
                <Type type={ type } index={ index } />
            )) }
        </div>
    )
}

export default TypeList;