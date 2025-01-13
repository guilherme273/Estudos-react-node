import InstaImg from "./InstaImgs";
import Form from "./Fomr";
import FooterForm from "./FooterForm";
import Footer from "./Footer.jsx";

function Instagram() {
  return (
    <div className="w-screen h-screen grid grid-cols-1 md:grid-cols-2 grid-rows-6">
      <div className="row-span-5 md:flex justify-center hidden">
        <InstaImg />
      </div>
      <div className="row-span-5 col-span-1 flex flex-col justify-center items-center gap-3 mt-16">
        <Form />
        <FooterForm />
      </div>
      <div className="row-span-1 col-span-2 mt-24 h-36">
        <Footer />
      </div>
    </div>
  );
}

export default Instagram;
