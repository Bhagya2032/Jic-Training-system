import ProfileValidation from "./ProfileValidation";

const ProfilePage = () => {

    return (
      <div className="bg-white min-h-screen p-4">
      <h1 className='text-2xl font-bold text-white mb-4 text-start rounded-xl p-2 bg-orange-500'>
        Profile page</h1>
       <ProfileValidation/>
      </div>
    );
  };
  
  export default ProfilePage;
  