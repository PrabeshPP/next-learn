import MeetupDetails from "../../components/meetups/MeetupDetails";
import { useRouter } from "next/dist/client/router";


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

const MeetupDetail = () => {
    const router=useRouter();

    const meetup=DummyMeetups.find((meetup)=>meetup.id===router.query.meetupId);
  return (
    <MeetupDetails
      imgSrc={meetup.image}
      title={meetup.title}
      address={meetup.address}
      description={meetup.description}
    />
  );
};

export default MeetupDetail;
