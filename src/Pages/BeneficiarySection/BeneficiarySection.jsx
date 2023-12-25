const BeneficiarySection = () => {
  return (
    <section className="bg-gray-100 py-16 min-h-screen">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-semibold mb-8">
          Who Can Benefit from Our Website?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {/* Developer Card */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Developers</h3>
            <p className="text-gray-700">
              Developers can access a wide range of resources, tutorials, and
              tools to enhance their coding skills and stay updated with the
              latest technologies.
            </p>
          </div>

          {/* Corporate Professionals Card */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Corporate Professionals
            </h3>
            <p className="text-gray-700">
              Corporate professionals can use our platform to find valuable
              insights, business news, and tools that can help them make
              informed decisions and stay competitive.
            </p>
          </div>

          {/* Bankers Card */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Bankers</h3>
            <p className="text-gray-700">
              Bankers can benefit from our financial analysis and banking tools,
              which provide them with the information they need to make sound
              financial decisions.
            </p>
          </div>

          {/* Card 1 */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Students</h3>
            <p className="text-gray-700">
              Students can find educational resources, study materials, and
              career guidance on our website to excel in their academic journey.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Entrepreneurs</h3>
            <p className="text-gray-700">
              Entrepreneurs can access business planning tools and connect with
              mentors to launch and grow their startups successfully.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiarySection;
