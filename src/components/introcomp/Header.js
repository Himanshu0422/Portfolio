import React from 'react';
import Navbar from './Navbar';

export const Header = ({ scrollToAbout, scrollToProject, scrollToSkills, scrollToContact }) => {

    return (
        <div className='sm:mt-5 mt-[-10px]'>
            <div className='max-sm:hidden'>
                <Navbar
                    scrollToAbout={scrollToAbout}
                    scrollToProject={scrollToProject}
                    scrollToSkills={scrollToSkills}
                    scrollToContact={scrollToContact}
                />
            </div>
        </div>
    )
}
