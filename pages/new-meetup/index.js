import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/dist/client/router";
import { Fragment } from "react";
import Head from "next/head";
const NewMeetupPage=()=>{
    const router=useRouter();
    async function onSubmitHandler(entries){
       
        try{
            const response=await fetch('/api/new-meetup',{
                method:"POST",
                body:JSON.stringify(entries),
                headers:{
                    "Content-Type":"application/json"
                }
               });

            router.replace("/")
        }catch(err){
            console.log(err);
        }
    }


    return(
       <Fragment>
       <Head>
        <title>
            New MeetUps
        </title>
        <meta name="description" content="You can add your new meetups happeing at your surrounding."
        />
       </Head>
         <NewMeetupForm onAddMeetup={onSubmitHandler}/>
       </Fragment>
    )
}

export default NewMeetupPage;