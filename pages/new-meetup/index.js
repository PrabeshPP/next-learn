import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/dist/client/router";
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
        <NewMeetupForm onAddMeetup={onSubmitHandler}/>
    )
}

export default NewMeetupPage;