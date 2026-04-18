export const Notification = ({messageToShow, displayType }) => {
    if(messageToShow === null){
        return null;
    }
    return (
        <p className={displayType}>{messageToShow}</p>
    )
}