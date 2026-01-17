
import Header from "../components/Header";
import Section from "../components/Section";

export default function Home() {
  return (
    <div>
    <Header/>
    <Section/>

 
        <section className="h-screen bg-white flex items-center justify-center flex-col text-center">
          <h2 className="text-3xl font-bold mb-4">Contact React</h2>
          <p className="text-lg">
            If you have any questions, feel free to reach out to us
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Contact Us
          </button>
        </section>
    


    </div>
  );
}



