import "./user.css"

const User = ({name, age}) => {
    return(
        <div className="user">
            <p  className="user-name">{name}</p>
            <p  className="user-age">{age}</p>
        </div>
    )

}

export default User;