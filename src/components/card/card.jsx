import List from "../List/list";
import "./card.css"

const Card = ({users, clear}) => {
    return (
        <div className="card">
            <List users={users} />
            <button className="button" onClick={clear}>Eliminar usuarios</button>
        </div>
    )
}

export { Card };