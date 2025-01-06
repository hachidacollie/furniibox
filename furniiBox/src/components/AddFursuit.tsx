
declare global {
    interface Window {
        HSStaticMethods: IStaticMethods;
    }
}

function AddFursuit() {
    const location = useLocation();

    useEffect(() => {
        const loadFlyonui = async () => {
            await import('flyonui/flyonui');
            window.HSStaticMethods.autoInit();
        };
        loadFlyonui();
    }, [location.pathname]);
    return (
        <>
            <div className='min-h-screen bg-base-200/60'>

                <div className="sticky z-10 top-0 container 2xl h-20 flex items-center lg:justify-between bg-green-800 min-w-full text-white font-mono">
                    <div className='flex items-center'>


                    </div></div>
            </div>





        </>
    );
}

export default AddFursuit;