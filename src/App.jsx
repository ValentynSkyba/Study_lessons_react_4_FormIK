import BookStort from "./components/BookStore/BookStore";
import RegisterFormFormik from "./components/Forms/RegisterFormFormik";

const App = () => {
  const handleRegister = (data) => {
    console.log("Fetch register....");
    setTimeout(() => {
      console.log(data);
      console.log("Register is done!🔥");
    }, 2000);
  };
  return (
    <div className="flexCenter formWrapper">
      {/* <RegisterFormFormik onRegister={handleRegister} /> */}
      <BookStort />
    </div>
  );
};

export default App;
