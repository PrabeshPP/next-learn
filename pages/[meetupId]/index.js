import MeetupDetails from "../../components/meetups/MeetupDetails";
import { MongoClient } from "mongodb";
const mongodb=require("mongodb");



const MeetupDetail = (props) => {
  
  return (
    <MeetupDetails
      imgSrc={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
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
  const meetupIdData=result.map((meetup) =>({
    params: {
      meetupId: meetup._id.toString()
    }
  }) );

  return {
    fallback:true,
    paths: meetupIdData
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
      _id:new mongodb.ObjectId(meetupId)
  });



  return {
    props: {
      meetupData:{
        title:result.title,
        address:result.address,
        description:result.description,
        image:result.image
      }
    },
  };
}

export default MeetupDetail;
