import React from 'react';
import FirstAnimation from '../FirstAnimation/FirstAnimation';
import CircleAniamtion from '../CircleAniamtion/CircleAniamtion';
import DragHover from '../DragHover/DragHover';
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation';

const Layout = () => {
    return (
        <div>
            <header className='h-25 w-full bg-base-300 shadow-xl top-0 sticky z-1000'>Header</header>
            <main>
            </main>
            <footer className='h-100 bg-base-300 shadow-2xl'>
                this is the footer!
            </footer>
        </div>
    );
};

export default Layout;