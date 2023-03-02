const Photo = ({photo, size}) => {

    const style = {
        height: size,
        width: size,
        borderRadius: "50%",
        objectFit: "cover",
    }

    return(
        <img style={style} src={photo} alt="userPhoto" />
    )
}
export default Photo;