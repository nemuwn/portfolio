import Main from "../components/layouts/main";

const Home = () => (
  <div className="container mx-auto  h-screen w-screen ">
    <div className="flex items-center  ">
      <section className="w-3/4 mr-5 flex flex-col justify-center">
        <h1 className="mb-5 text-[64px]">HELLO MY NAME IS NEMU.</h1>
        <p className="text-[18x]">
          I'm an Information technology student at the University of Mongolia
        </p>
      </section>
      {/* <img src="/Nemu.png" className="h-[300px]" /> */}
      <Main />
    </div>
  </div>
);
export default Home;
