import { useState } from 'react'
import Activity from './components/Activity'
import "./App.css";

function App() {

  const [activity, setActivity] = useState(null);
  //State för inputs
  const [participants, setParticipants] = useState("");
  const [type, setType] = useState("");
  const [isFree, setIsFree] = useState(false);


  const activityTypes = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"];
  
  const getActivity = async () => {
    const res = await fetch(`https://bored.api.lewagon.com/api/activity?${participants && `participants=${participants}`}&${type && `type=${type}`}&${isFree && "price=0.0"}`);
    const json = await res.json();
    console.log(json);
    setActivity(json);
  }

  return (
    <>
      <h1>Activity application</h1>
      <div className='filter-options'>
        <label htmlFor="participants">Participants: </label>
        <select value={participants} id="participants" onChange={(e) => {setParticipants(e.target.value)}}>
          <option value="">Alla deltagare</option>
          <option>1</option>
          <option>2</option>
          <option>4</option>
        </select>

<br/>
      <label htmlFor="type">Type: </label>
        <select value={type} id="type" onChange={(e) => {setType(e.target.value)}}>
          <option value="">Alla typer</option>
          {activityTypes.map(type => <option>{type}</option>)}
        </select>
<br/>
        <label>Free: <input type="checkbox" id="isFree" value={isFree} onChange={(e) => {setIsFree(e.target.value)}} /></label>

        <button onClick={getActivity}> Slumpa aktivitet</button>
      </div>
      {activity ? <Activity
        activity={activity.activity}
        price={activity.price}
        participants={activity.participants}
        type={activity.type}
      /> : <h2>Ingen aktivitet hämtad.</h2>}
    </>
  )
}

export default App
