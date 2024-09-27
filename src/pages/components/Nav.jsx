
function Nav() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
            <div class="container-fluid">
                {/* Logo */}
                <a class="navbar-brand fs-4" href="../">Bootstrap + React</a>

                {/* Toggle Button */}
                <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                {/* Sidebar */}
                <div class="bg-dark offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    {/* Sidebar Header */}
                    <div class="offcanvas-header text-white border-bottom">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Bootstrap Navbar</h5>
                        <button type="button" class="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    {/* Sidebar Body */}
                    <div class="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
                        <ul class="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3 mx-2">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="../">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                        </ul>

                        {/* Login / Sign up */}
                        <div class="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
                            <a href="../Login" class="text-white text-decoration-none">Login</a>
                            <a href="../Register" class="text-white text-decoration-none px-3 py-1 rounded-4 bg-primary">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;