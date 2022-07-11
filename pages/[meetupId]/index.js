import MeetupDetails from "../../components/meetups/MeetupDetails";
import { MongoClient } from "mongodb";

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

  return (
    <MeetupDetails
      imgSrc="https://media.istockphoto.com/photos/architecture-of-lalitpur-metropolitan-city-the-third-largest-city-of-picture-id1013294000?s=2048x2048"
      title="Detail"
      address="Demo"
      description="Demo"
    />
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://prabesh:7Ygjh5U5Je9uUcNN@cluster0.gornro4.mongodb.net/meetup?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetUpsCollection = db.collection("meetups101");
  const result = await meetUpsCollection.find({}, { _id: 1 }).toArray();
  console.log(result[0]._id.toString());
  return {
    fallback:true,
    paths: result.map((meetup) => {
      params: {
        meetupId: meetup._id;
      }
    }),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(
    `mongodb+srv://prabesh:7Ygjh5U5Je9uUcNN@cluster0.gornro4.mongodb.net/meetup?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetUpsCollection = db.collection("meetups101");
  const result = await meetUpsCollection.findOne({
    $where:{
      _id:meetupId
    }
  }).toArray();

  console.log(result);

  return {
    props: {
      meetupData: [
        {
          id: "m1",
          title: "React Meetup",
          image:
            "https://media.istockphoto.com/photos/architecture-of-lalitpur-metropolitan-city-the-third-largest-city-of-picture-id1013294000?s=2048x2048",
          address: "Bojepokhari,Imadole",
          description: "This is a first meetup!",
        },
        {
          id: "m2",
          title: "React ",
          image:
            "https://media.istockphoto.com/photos/architecture-of-lalitpur-metropolitan-city-the-third-largest-city-of-picture-id1013294000?s=2048x2048",
          address: "Bojepokhari,Imadole",
          description: "This is a first meetup!",
        },
      ],
    },
  };
}

export default MeetupDetail;
