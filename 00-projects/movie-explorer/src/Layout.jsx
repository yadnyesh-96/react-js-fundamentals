import Navbar from './Navbar';
import Footer from './Footer';


function Layout({ children }) {
    return (
        <>
            <div className='m-4 rounded-2xl border border-blue-100 shadow shadow-blue-200 bg-indigo-50'>
                <Navbar />

                <main className="min-h-screen">
                    {children}
                </main>

                <Footer />
            </div>
        </>
    )
}

export default Layout;