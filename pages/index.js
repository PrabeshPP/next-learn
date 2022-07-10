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

const HomePage=(props)=>{
    return (
        <MeetupList meetups={props.meetups}/>
    )
}

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

export async function getStaticProps(){
    //fetch data
    return {
        props:{
            meetups:DummyMeetups
        },
        revalidate:1
    }
}

export default HomePage;

