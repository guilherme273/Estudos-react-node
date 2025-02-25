import { AtSign, CircleUserRound, LockKeyhole } from "lucide-react";
import "./SectionLoginStyle.css";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuthenticator } from "../../../../contexts/login";

function SectionLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { logar, logado } = useAuthenticator();

  const makeRequest = async (data) => {
    await logar(data);
  };

  if (logado) {
    return <Navigate to="/myflix" />;
  } else {
    return (
      <div className="div-login">
        <h2>G Flix</h2>

        <form onSubmit={handleSubmit(makeRequest)} className="formulario-login">
          <CircleUserRound className="icon-user" size={130} strokeWidth={0.5} />
          <div className="div-input-login">
            <AtSign className={"key"} size={35} strokeWidth={0.5} />
            <input
              type="text"
              placeholder={"Login"}
              {...register("e_mail", { required: true })}
            />
          </div>
          {errors?.e_mail?.type === "required" && (
            <p className="p-alert">E_mail obrigatório</p>
          )}
          <div className="div-input-senha">
            <LockKeyhole className="locke" size={35} strokeWidth={0.5} />
            <input
              type="password"
              placeholder="Senha"
              {...register("password", { required: true })}
            />
          </div>
          {errors?.password?.type === "required" && (
            <p className="p-alert">Senha obrigatória</p>
          )}
          <button type="submit">Entrar</button>
        </form>

        <div className="register">
          <p className="p">
            Ainda não possui conta
            <Link to={"/register"} className="a-no-p">
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default SectionLogin;
