import { courses, departments } from "../data/collegeData";

const Courses = () => {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Courses Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 sm:text-4xl">
            Academic Programs
          </h2>
          <p className="mt-4 text-lg text-secondary-600 max-w-2xl mx-auto">
            Discover our comprehensive range of undergraduate and postgraduate
            programs designed to prepare you for success in your chosen career.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  {course.name}
                </h3>
                <p className="text-secondary-600 mb-4">{course.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary-600 font-medium">
                    {course.duration}
                  </span>
                  <button className="text-primary-600 hover:text-primary-800 font-medium text-sm">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Departments Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 sm:text-4xl">
            Academic Departments
          </h2>
          <p className="mt-4 text-lg text-secondary-600 max-w-2xl mx-auto">
            Our specialized departments offer expert faculty and
            state-of-the-art facilities to support your academic journey.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="bg-slate-50 rounded-lg p-6 hover:bg-slate-100 transition-colors"
            >
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                {dept.name}
              </h3>
              <p className="text-secondary-600 mb-4">{dept.description}</p>
              <div className="flex items-center justify-between text-sm text-secondary-500">
                <span>Head: {dept.head}</span>
                <span>
                  {dept.faculty} Faculty • {dept.students} Students
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
