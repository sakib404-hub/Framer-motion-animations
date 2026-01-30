import React from 'react';
import FirstAnimation from '../FirstAnimation/FirstAnimation';
import CircleAniamtion from '../CircleAniamtion/CircleAniamtion';

const Layout = () => {
    return (
        <div>
            <header className='h-25 w-full bg-base-300 shadow-xl top-0 sticky'>Header</header>
            <main>
                <FirstAnimation></FirstAnimation>
                <CircleAniamtion></CircleAniamtion>
            </main>
            <footer className='h-100 bg-base-300 shadow-2xl'>
                this is the footer!
            </footer>
        </div>
    );
};

export default Layout;