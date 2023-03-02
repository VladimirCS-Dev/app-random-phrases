import Photo from "../photo/photo";
import User from "../user/user";
import "./list.css"

const List = ({users}) => {
    return(
        <div className="list">
            <h1>5 birthdays today</h1>
            {users.map(user => (
                <div className="list-item" key={user.id}>
                    <Photo photo={user.photo} size={"50px"} />
                    <User name={user.name} age={user.age} />
                </div>
            ))
            }
        </div>
    )
}
export default List;