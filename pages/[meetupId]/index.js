import MeetupDetails from "../../components/meetups/MeetupDetails";
import { MongoClient ,ObjectId} from "mongodb";
import Head from "next/head";
import { Fragment } from "react";




const MeetupDetail = (props) => {
  
  return (
   <Fragment>
    <Head>
      <title>{props.meetupData.title}</title>
      <meta
        name="description"
        content={props.meetupData.description}

      />
    </Head>
      <MeetupDetails
      imgSrc={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
   </Fragment>
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
      _id:ObjectId(meetupId)
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
