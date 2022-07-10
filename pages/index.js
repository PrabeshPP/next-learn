import MeetupList from "../components/meetups/MeetupList";

const DummyMeetups=[
    {
        id:"m1",
        title:"React Meetup",
        image:"https://media.istockphoto.com/photos/architecture-of-lalitpur-metropolitan-city-the-third-largest-city-of-picture-id1013294000?s=2048x2048",
        address:"Bojepokhari,Imadole",
        description:"This is a first meetup!"
    },
    {
        id:"m2",
        title:"React ",
        image:"https://media.istockphoto.com/photos/architecture-of-lalitpur-metropolitan-city-the-third-largest-city-of-picture-id1013294000?s=2048x2048",
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

