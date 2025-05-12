import { AppLayout } from './layouts/AppLayout';

function App() {
    return (
        <>
            <AppLayout>
                <section className="flex min-h-screen items-center justify-center">
                    <h1 className="text-accent text-4xl font-bold">
                        Explore my personal interactive workspace.
                    </h1>
                </section>
            </AppLayout>
        </>
    );
}

export default App;
