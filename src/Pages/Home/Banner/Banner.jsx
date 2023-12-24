import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className=" bg-blue-500 text-white text-center p-12">
      <section className="max-w-7xl mx-auto flex items-center gap-10">
        <div>
          <img
            className="rounded-lg"
            src="https://i.postimg.cc/wjr10Gr7/deadline-time-management-business-concept-vector-107791-42.jpg"
            alt="Task management"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Manage Your Tasks Effectively
          </h1>
          <p className="text-xl mb-8">
            Join our task management tool to boost your productivity
          </p>
          <NavLink to='/login'>
            <button className="bg-white text-blue-500 font-semibold py-2 px-6 rounded hover:bg-gray-200">
              Explore
            </button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Banner;
