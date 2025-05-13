import { ContactExec } from './components/sections/ContactExec';
import { Hero } from './components/sections/Hero';
import { ProfileConfig } from './components/sections/ProfileConfig';
import { ProjectsLog } from './components/sections/ProjectsLog';
import { StackModules } from './components/sections/StackModules';
import { AppLayout } from './layouts/AppLayout';

function App() {
    return (
        <>
            <AppLayout>
                <Hero />
                <ProfileConfig />
                <StackModules />
                <ProjectsLog />
                <ContactExec />
            </AppLayout>
        </>
    );
}

export default App;
