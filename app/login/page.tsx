import EmailInput from "../components/login/EmailInput";
import LoginOtp from "../components/login/LoginOtp";

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl border-b-2 border-solid border-black pb-3 pt-2">
        Login using OTP
      </h1>
      <LoginOtp />
    </div>
  );
};
export default Home;
