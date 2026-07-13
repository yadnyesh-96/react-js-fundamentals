import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
    return (
        <>
            <Header />

            <main className="border border-slate-600">
                {children}
            </main>

            <Footer />
        </>
    )
}

export default Layout;