const VideoPlayer = (props) => {
    return (<video key={btoa(props.playerFile)} controls autoPlay={true} className="embed-responsive-item">
        <source src={`${process.env.REACT_APP_API_SERVER
            }/${props.playerFile}`} type={`video/${props.playerFileExt}`} />
    </video>)
}
export default VideoPlayer;