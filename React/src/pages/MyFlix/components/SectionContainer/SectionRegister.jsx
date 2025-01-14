import { AtSign, Lock, LockKeyhole, User } from "lucide-react";
import { useForm } from "react-hook-form";
import "./SectionRegister.css";
import { Link } from "react-router-dom";

function SectionRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const makeRequest = async (data) => {
    const json = JSON.stringify(data);

    const response = await fetch("http://localhost:80/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Adiciona o cabeçalho Content-Type
      },
      body: json,
    });

    if (response.ok) {
      alert("cadastrado!");
      reset();
    } else {
      const errorData = await response.json();
      alert(`Erro: ${errorData.msg || "Erro desconhecido"}`);
    }
  };
  const matchPassword = watch("password");

  return (
    <>
      <div className="div-register">
        <h5>Cadastre-se</h5>

        <form
          onSubmit={handleSubmit(makeRequest)}
          className="formulario-register"
        >
          <div className="div-envolvente">
            <label htmlFor="name">Digite um nome:</label>
            <div className="div-input-and-icon">
              <User className="icon" size={35} strokeWidth={0.5} />
              <input
                id="name"
                type="text"
                placeholder="Nome"
                {...register("name", { required: true })}
              />
            </div>
            {errors?.name?.type === "required" && (
              <p className="p-alert">nome obrigatório</p>
            )}
          </div>

          <div className="div-envolvente">
            <label htmlFor="e_mail">Digite um email:</label>
            <div className="div-input-and-icon">
              <AtSign className="icon" size={35} strokeWidth={0.5} />
              <input
                id="e_mail"
                type="text"
                placeholder="Login"
                {...register("e_mail", { required: true })}
              />
            </div>
            {errors?.e_mail?.type === "required" && (
              <p className="p-alert">E-mail obrigatório</p>
            )}
          </div>
          <div className="div-envolvente">
            <label htmlFor="password">Digite a senha:</label>
            <div className="div-input-and-icon">
              <Lock className="icon" size={35} strokeWidth={0.5} />
              <input
                id="password"
                type="password"
                placeholder="Senha"
                {...register("password", { required: true })}
              />
            </div>
            {errors?.password?.type === "required" && (
              <p className="p-alert">Senha obrigatória</p>
            )}
          </div>
          <div className="div-envolvente">
            <label htmlFor="confirmPassword">Confirme a Senha:</label>
            <div className="div-input-and-icon">
              <LockKeyhole className="icon" size={35} strokeWidth={0.5} />

              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirma a Senha"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => value === matchPassword,
                })}
              />
            </div>
            {errors?.confirmPassword?.type === "required" && (
              <p className="p-alert">Confirmação de senha obrigatória</p>
            )}
            {errors?.confirmPassword?.type === "validate" && (
              <p className="p-alert">Senhas não conferem</p>
            )}
          </div>

          <button type="submit">Registrar</button>
          <div className="login">
            <p className="p">
              Já possui conta?
              <Link to={"/login"} className="a-no-p">
                Clique aqui para entrar
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default SectionRegister;
