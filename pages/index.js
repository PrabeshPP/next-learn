import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";



const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

/*

we should only use getServerSideProps,if our website data don't change frequently.
As well as,if we don't need request and response.

*/

// export async function getServerSideProps(context){
//         const req=context.req;
//         const res=context.res;
//         return {
//             props:{
//                 meetups:DummyMeetups
//             }
//         }
// }

export async function getStaticProps() {
  const client = await MongoClient.connect(
    `mongodb+srv://prabesh:7Ygjh5U5Je9uUcNN@cluster0.gornro4.mongodb.net/meetup?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetUpsCollection = db.collection("meetups101");
  const result = await meetUpsCollection.find().toArray();
  const mapedData = result.map((data) => ({
    id: data._id.toString(),
    title: data.title,
    address: data.address,
    image: data.image,
    description: data.description,
  }));
  client.close();
  //fetch data
  return {
    props: {
      meetups:mapedData ,
    },
    revalidate: 1,
  };
}

export default HomePage;
