import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage=()=>{

    function onSubmitHandler(entries){
        console.log(entries);
    }


    return(
        <NewMeetupForm onAddMeetup={onSubmitHandler}/>
    )
}

export default NewMeetupPage;