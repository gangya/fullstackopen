export const Notification = ({messageToShow, displayType }) => {
    if(messageToShow === null){
        return null;
    }
    return (
        <p className={displayType}>{messageToShow}</p>
    )
} 

// export const ErrorMessage = ({messageToShow}) => <p className="success">{messageToShow}</p>