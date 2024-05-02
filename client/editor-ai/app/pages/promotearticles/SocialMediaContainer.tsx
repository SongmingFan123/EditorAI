import React, { MouseEvent } from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { postToFacebook, postToTwitter } from '@/api/socialmedia_functions';

interface SocialMediaSiteProps {
    copy:string
}

const SocialMediaContainer = ({copy}:SocialMediaSiteProps) => {
    const socialMediaSites = [
        { name: 'Facebook', url: 'https://www.facebook.com', icon: <FaFacebook />, function: postToFacebook },
        { name: 'Twitter', url: 'https://www.twitter.com', icon: <FaTwitter />, function: postToTwitter },
    ];

    const handleClick = (site:any) => {
        console.log(`Clicked ${site.name}`);
        console.log(`Posting to ${site.url}`);
        // site.function(

        // )
        return true;
    }

    return (
        <div className='bg-white rounded-lg shadow-md p-4 relative m-4'>
            <h2 className="text-2xl font-bold mb-4">Share your content</h2>
            <ul className="space-y-2 justify-evenly flex flex-row">
                {socialMediaSites.map((site) => (
                    <li key={site.name} className="flex items-center">
                        <a href={site.url}>
                            <span className="text-2xl">{site.icon}</span>
                            <span className="text-2xl">{site.name}</span>
                        </a>
                        {/* <div onClick={() => handleClick(site)}>
                            <span className="text-2xl">{site.icon}</span>
                            <span className="text-2xl">{site.name}</span>
                        </div> */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialMediaContainer;