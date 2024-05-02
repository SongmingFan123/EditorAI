import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';


const Profile = () => {
    const [displayName, setDisplayName] = useState('');
    const [password, setPassword] = useState('');
    const { user,updateUser } = useAuth();
    const email = user?.email as string;
    const currentDisplayName = user?.displayName as string;
    

    const handleDisplayNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDisplayName(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateUser(displayName, password);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold">Update Profile</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="displayName" className="block mb-2 text-sm font-medium text-gray-900">Email:</label>
                    <input
                        type="text"
                        id="displayName"
                        value={email}
                        disabled
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="displayName" className="block mb-2 text-sm font-medium text-gray-900">Display Name:</label>
                    <input
                        type="text"
                        id="displayName"
                        placeholder={currentDisplayName}
                        value={currentDisplayName}
                        onChange={handleDisplayNameChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">New Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-brand-red hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                    Update Profile
                </button>
            </form>
        </div>
    );
};

export default Profile;