import Nav from "./components/Nav"
import Footer from "./components/Footer"

function Register() {
    function validation() {
        const forms = document.querySelectorAll('.needs-validation');       
        
        forms.forEach(form => {
            form.classList.add('was-validated');
        });
    }
    
    return (
        <div>
            <Nav />
            <section>
                <div class="container bg-light my-5 rounded-4 p-4">
                    <h3 class="text-center mb-3">Cadastro</h3>
                    <form action="#" className="needs-validation">
                        <div class="mb-3">
                            <label htmlFor="name" className="form-label">Nome completo</label>
                            <input type="text" className="form-control" id="name" required />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="email" className="form-label">E-mail</label>
                            <input type="email" className="form-control" id="email" placeholder="example@unimontes.br" required />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="password" className="form-label">Senha</label>
                            <input type="password" className="form-control" id="password" placeholder="Min. 8 caracteres" required minLength={8} />
                        </div>
                        <div class="mb-5">
                            <label htmlFor="confirmPassword" className="form-label">Confirmar senha</label>
                            <input type="password" className="form-control" id="confirmPassword" placeholder="As senhas devem ser iguais" required minLength={8} />
                        </div>
                        <div class="mb-0 text-end">
                            <button type="submit" class="btn btn-primary" onClick={()=>{validation()}}>Enviar</button>
                        </div>
                    </form>
                </div>
            </section>
            <Footer fixed={"fixed-bottom"} />
        </div>
    )
}

export default Register;