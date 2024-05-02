import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';


const Profile = () => {
    const [displayName, setDisplayName] = useState('');
    const [password, setPassword] = useState('');
    const { user,updateUser } = useAuth();
    const email = user?.email as string;
    const currentDisplayName = user?.displayName as string;
    const [updateError, setUpdateError] = useState(false);
    

    const handleDisplayNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newDisplayName = e.target.value;
        setDisplayName(newDisplayName);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (displayName === '' || password === '') {
            setUpdateError(true);
        }
        else {
            setUpdateError(false);
            updateUser(displayName, password);
        }
    };

    return (
        <div >
            <div className='text-center' >

            <h1 className="text-2xl font-bold">Update Profile</h1>
            {updateError && <p className="text-red-500">Please fill out all fields</p>}
            <form onSubmit={handleSubmit}>
                <div className="mt-4">
                    <label htmlFor="displayName" className="block font-medium">Email:</label>
                    <input
                        type="text"
                        id="displayName"
                        value={email}
                        disabled
                        className="border border-gray-300 rounded-md p-2 mt-1"
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="displayName" className="block font-medium">Display Name:</label>
                    <input
                        type="text"
                        id="displayName"
                        placeholder={currentDisplayName}
                        onChange={handleDisplayNameChange}
                        className="border border-gray-300 rounded-md p-2 mt-1"
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="password" className="block font-medium">New Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="border border-gray-300 rounded-md p-2 mt-1"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-brand-red text-white px-4 py-2 rounded-md mt-4"
                >
                    Update Profile
                </button>
            </form>
            </div>

        </div>
    );
};

export default Profile;