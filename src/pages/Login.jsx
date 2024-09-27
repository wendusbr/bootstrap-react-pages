import Nav from "./components/Nav";
import Footer from "./components/Footer";

function Login() {
    function validation(){
        const forms = document.querySelectorAll('.needs-validation');

        forms.forEach(form => {
            form.classList.add("was-validated");
        });
    }

    function showPassword(){
        const checkbox = document.getElementById("showPassword");
        const password = document.getElementById("password");

        password.type = checkbox.checked ? "text" : "password";

        // if(checkbox.checked)
        //     password.type = "text";
        // else
        //     password.type = "password";
    }

    return (
        <div>
            <Nav />
            <section>
                <div class="container bg-light my-5 rounded-4 p-4">
                    <h3 class="text-center">Login</h3>
                    <form action="#" class="needs-validation">
                        <div class="mb-3">
                            <label htmlFor="login" class="form-label">Login</label>
                            <input type="email" class="form-control" id="login" placeholder="Informe seu e-mail cadastrado" required />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="password" class="form-label">Senha</label>
                            <input type="password" class="form-control" id="password" placeholder="Informe sua senha" required />
                        </div>
                        <div class="mb-3">
                            <input type="checkbox" id="showPassword" class="mx-1" onClick={()=>{showPassword()}} />
                            <label htmlFor="showPassword" class="form-label">Mostrar senha</label>
                        </div>
                        <div class="text-end">
                            <button type="submit" class="btn btn-dark" onClick={()=>{validation()}}>Enviar</button>
                        </div>
                    </form>
                </div>
            </section>
            <Footer fixed={"fixed-bottom"} />
        </div>
    )
}

export default Login;