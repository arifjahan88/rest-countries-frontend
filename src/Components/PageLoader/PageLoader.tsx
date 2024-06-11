import Lottie from "lottie-react";
import loader from "../../assets/loader.json";

const PageLoader = () => (
  <div className="fixed left-1/2 -translate-x-1/2 h-screen flex justify-center items-start">
    <Lottie animationData={loader} loop={true} />
  </div>
);

export default PageLoader;
