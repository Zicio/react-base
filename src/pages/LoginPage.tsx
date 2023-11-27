import MyInput from "../components/UI/Input/MyInput";
import MyButton from "../components/UI/button/MyButton";

const LoginPage = () => {
  return (
    <>
      <h1>Страница входа</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пароль" />
        <MyButton>Войти</MyButton>
      </form>
    </>
  );
};
export default LoginPage;
