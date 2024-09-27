function Footer({fixed}) {

    return (
        <footer class={"bg-transparent py-2 mt-5 " + fixed ? fixed : ""}>
            <div class="container text-light text-center">
                <small class="text-white-50"> &copy; Wendell Bernardo 2024</small>
            </div>
        </footer>
    )
}

export default Footer;