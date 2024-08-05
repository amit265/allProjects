import { Link } from "react-router-dom";
import { projects } from "../utils/projects";
import Hero from "./Hero"; // Import the Hero component
import ProjectSection from "./ProjectSection";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <section className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Feature One</h3>
              <p className="text-gray-600">Description of Feature One.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Feature Two</h3>
              <p className="text-gray-600">Description of Feature Two.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Feature Three</h3>
              <p className="text-gray-600">Description of Feature Three.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            CodeRespite is dedicated to helping students and new coders by providing high-quality tutorials, engaging projects, and a supportive community.
          </p>
        </div>
      </section> */}

      <section className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
        <Link to={"/project"}><h2 className="text-3xl font-bold mb-6 hover:text-blue-500">React Projects</h2></Link>

          <ProjectSection
            // title="React Projects"
            projects={projects.react}
            path_root="react/"
            github="JavaScript-Projects/tree/main/"
          />
        </div>
      </section>

      {/* <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"CodeRespite helped me get started with coding. The tutorials are very easy to follow!"</p>
              <p className="font-semibold">- User One</p>
            </div>
            <div className="p-6 border rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"The projects are engaging and helped me build my portfolio."</p>
              <p className="font-semibold">- User Two</p>
            </div>
            <div className="p-6 border rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"Great community support and resources."</p>
              <p className="font-semibold">- User Three</p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
        <Link to={"/project"}><h2 className="text-3xl font-bold mb-6 hover:text-blue-500">JavaScript Projects</h2></Link>

          <ProjectSection
            // title="JavaScript Projects"
            projects={projects.javascript.slice(0, 6)}
            path_root="js-projects/"
            github="JavaScript-Projects/tree/main/"
          />
          <div className="flex justify-end items-end w-full">
            <button className="text-center px-4 py-2 font-semibold text-lg bg-red-600 rounded-lg hover:bg-green-500 text-white">
              <Link to={"/project"}>More</Link>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Become a part of our community to get access to exclusive content,
            tutorials, and more.
          </p>
          <a
            href="#signup"
            className="px-6 py-3 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-700"
          >
            Sign Up Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;