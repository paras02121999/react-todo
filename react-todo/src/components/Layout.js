import Navbar from "./Navbar"
import Footer from "./Footer"
import Container from '@mui/material/Container';

const Layout = ({ children }) => {
    return (
        <>
            <Container maxWidth="lg">
                <Navbar />
                {children}
                <Footer />
            </Container>
        </>
    );
}

export default Layout;
