import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialMediaContainer: React.FC = () => {
    const socialMediaSites = [
        { name: 'Facebook', url: 'https://www.facebook.com', icon: <FaFacebook /> },
        { name: 'Twitter', url: 'https://www.twitter.com', icon: <FaTwitter /> },
        // { name: 'Instagram', url: 'https://www.instagram.com', icon: <FaInstagram /> },
        // { name: 'LinkedIn', url: 'https://www.linkedin.com', icon: <FaLinkedin /> },
    ];

    return (
        <div className='bg-white rounded-lg shadow-md p-4 relative m-5'>
            <h2 className="text-2xl font-bold mb-4">Share your content</h2>
            <ul className="space-y-2 justify-evenly flex flex-row">
                {socialMediaSites.map((site) => (
                    <li key={site.name} className="flex items-center">
                        <a href={site.url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                            <span className="text-2xl">{site.icon}</span>
                            <span className="text-2xl">{site.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialMediaContainer;