import ProjecItem from "./projectitem";
import key from "../assets/image/key.jpg";
import im from "../assets/image/im.jpg";
import kj from "../assets/image/kj.jpg";
import Ma from "../assets/image/Ma.jpg";

const project =()=> {
  return (
    <div id="project" className="max-w-[1040] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Fuga excepturi ducimus harum iste esse dolore molestiae, sed quos nihil
        neque. Sint et quis ducimus eveniet, fugiat ullam vel minus corrupti
        vitae nemo necessitatibus voluptas consequuntur accusamus rem at,
        tempore sed eos aliquam laudantium reiciendis illum! Et sapiente porro
        minus voluptate!
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjecItem img={im} title="Never Give Up " />
        <ProjecItem img={key} title="Perseverance breeds success" />
        <ProjecItem img={kj} title="Never relent, achieve success" />
        <ProjecItem img={Ma} title="Excellence shines when you reach the top." />
      </div>
    </div>
  );
}
export default  project