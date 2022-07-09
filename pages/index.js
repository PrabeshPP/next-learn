import MeetupList from "../components/meetups/MeetupList";

const DummyMeetups=[
    {
        id:"m1",
        title:"React Meetup",
        image:"",
        address:"Bojepokhari,Imadole",
        description:"This is a first meetup!"
    }
]

const HomePage=()=>{
    return (
        <MeetupList meetups={DummyMeetups}/>
    )
}

export default HomePage;

