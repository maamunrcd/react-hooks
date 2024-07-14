import { useState, useTransition } from 'react';

import AboutTab from './AboutTab';
import ContactTab from './ContactTab';
import PostsTab from './PostsTab';
import TabButton from './TabButton';

const UseTransitionDemo = () => {
    const [tab, setTab] = useState('about');
    // const [isPending, startTransition] = useTransition();

    // const selectTab = (tab) => {
    //     startTransition(() => {
    //         setTab(tab);
    //     });
    // };
    const selectTab = (tab) => {
        setTab(tab);
    };
    return (
        <div className='tutorial'>
            <div className='mb-4 flex flex-row items-center gap-4'>
                <TabButton
                    title='About'
                    onClick={() => selectTab('about')}
                    variant={tab === 'about' ? 'contained' : 'outlined'}
                />
                <TabButton
                    title='Posts'
                    onClick={() => selectTab('posts')}
                    variant={tab === 'posts' ? 'contained' : 'outlined'}
                />
                <TabButton
                    title='Contact'
                    onClick={() => selectTab('contact')}
                    variant={tab === 'contact' ? 'contained' : 'outlined'}
                />
            </div>
            `
            {tab === 'about' && <AboutTab />}
            {tab === 'posts' && <PostsTab />}
            {tab === 'contact' && <ContactTab />}
        </div>
    );
};

export default UseTransitionDemo;
