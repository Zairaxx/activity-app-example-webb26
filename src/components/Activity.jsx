const Activity = ({activity,price,participants,type}) => {
    return (
        <div className="activity">
            <h2>Activity</h2>
            <p><strong>Name:</strong> {activity}</p>
            <p><strong>type:</strong> {type}</p>
            <p><strong>Participants:</strong> {participants} {participants === 1 ? "person" : "people"}</p>
            <p><strong>Price:</strong> {price}</p>
        </div>)
}

export default Activity