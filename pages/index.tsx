import {NextPage} from 'next';

import About from '../components/About';
import PublicationList from '../components/PublicationList';
import AchievementList from '../components/AchievementList';
import Teaching from '../components/Teaching';
import Education from '../components/Education';


const Index: NextPage<unknown> = () => (
    <>
        <About/>
        <Education/>
        <PublicationList/>
        <AchievementList/>
        <Teaching/>
    </>
);

export default Index;
