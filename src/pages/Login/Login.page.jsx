import { FormLoginComponent } from "../../components/Form/Login/Login.component";

export const LoginPage = () => {
    return(
        <form>
            <div className="input-group">
                <label htmlFor="email">E-mail</label>
                <input type="text" name="email" id="email" placeholder="Digite o seu email"/>
            </div>
            <div className="input-group">
                <label htmlFor="password">E-mail</label>
                <input type="password" name="password" id="password" placeholder="Digite a sua senha"/>
            </div>
            <button type="submit">Logar</button>
        </form>
    );
}