import MeetupDetails from "../../components/meetups/MeetupDetails";
import { useRouter } from "next/dist/client/router";


// const DummyMeetups=[
//     {
//         id:"m1",
//         title:"React Meetup",
//         image:"https://media.istockphoto.com/photos/architecture-of-lalitpur-metropolitan-city-the-third-largest-city-of-picture-id1013294000?s=2048x2048",
//         address:"Bojepokhari,Imadole",
//         description:"This is a first meetup!"
//     },
//     {
//         id:"m2",
//         title:"React ",
//         image:"https://media.istockphoto.com/photos/architecture-of-lalitpur-metropolitan-city-the-third-largest-city-of-picture-id1013294000?s=2048x2048",
//         address:"Bojepokhari,Imadole",
//         description:"This is a first meetup!"
//     }
// ]

const MeetupDetail = (props) => {
    const router=useRouter();

    const meetup=props.meetupData.find((meetup)=>meetup.id==="m1");
  return (
    <MeetupDetails
      imgSrc={meetup.image}
      title={meetup.title}
      address={meetup.address}
      description={meetup.description}
    />
  );
};

export async function getStaticPaths(){
    return {
      paths:[
        {
          params:{
            meetupId:'m1'
          }
        },
        {
          params:{
            meetupId:'m2'
          }
        }
      ],
      fallback:false
    }
}

export async function getStaticProps(context){

  const meetupId=context.params.meetupId;

  return {
    props:{
      meetupData:[
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
    }
  }
}


export default MeetupDetail;
