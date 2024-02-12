
import  { useState, useEffect } from 'react';

const Github = () => {
  const [userData, setUserData] = useState(null);
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Sana348');
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);
  return (
    <div className='max-w-md mx-auto bg-white shadow-md rounded p-8'>
      {userData && (
        <>
          <div className='flex items-center mb-6'>
            <img className='w-16 h-16 rounded-full mr-4' src={userData.avatar_url} alt="GitHub avatar" />
            <div>
              <h2 className='text-xl font-semibold'>{userData.login}</h2>
              <p className='text-gray-600'>{userData.bio}</p>
            </div>
          </div>
          <div className=''>
            <div className='mb-4'>
              <strong className='font-semibold'>Followers:</strong> {userData.followers}
            </div>
            <div className='mb-4'>
              <strong className='font-semibold'>Following:</strong> {userData.following}
            </div>
            <div className='mb-4'>
              <strong className='font-semibold'>Public Repositories:</strong> {userData.public_repos}
            </div>
            <div>
              <a className='text-blue-500 hover:text-blue-600' href={userData.html_url} target='_blank' rel='noopener noreferrer'>Visit GitHub Profile</a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Github;

export const githubInfoLoader = async () => {
  try {
    const response = await fetch('https://api.github.com/users/Sana348');
    return response.json();
  } catch (error) {
    console.error('Error loading GitHub info:', error);
    return null;
  }
};
