import Footer from '../components/Footer'
import AppNavbar from '../components/Navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <AppNavbar />
      <main className="flex-grow-1">{children}</main>
      <Footer />
    </div>
  )
}
