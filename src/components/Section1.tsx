
const steps = [
  {
    title: "Scholarship Guidance",
    description: "Get expert guidance on scholarship opportunities.",
    icon: "🎓",
    gradient: "bg-gradient-to-r from-green-500 to-blue-500",
  },
  {
    title: "Admission Assistance",
    description: "Receive help with your college admission process.",
    icon: "🏫",
    gradient: "bg-gradient-to-r from-blue-500 to-indigo-500",
  },
  {
    title: "College Selection",
    description: "Find the best college based on your preferences and eligibility.",
    icon: "🏛️",
    gradient: "bg-gradient-to-r from-indigo-500 to-purple-500",
  },
  {
    title: "Education Loan Assistance",
    description: "Help in securing an education loan for your studies.",
    icon: "🏦",
    gradient: "bg-gradient-to-r from-pink-500 to-orange-500",
  },
  {
    title: "Form Filling Guidance",
    description: "Step-by-step guidance for completing your application.",
    icon: "📝",
    gradient: "bg-gradient-to-r from-orange-500 to-yellow-500",
  },
  {
    title: "Career Counseling",
    description: "Get expert advice on choosing the right career path.",
    icon: "💼",
    gradient: "bg-gradient-to-r from-yellow-500 to-green-500",
  }
];

const Process = () => {
  return (
    <div className="mt-10">
      <h1 className="text-center font-poppins mb-6 text-2xl sm:text-4xl font-bold text-gray-700">
      How CB-SAP 2025 Helps You?
      </h1>
    <div className="flex flex-col items-center md:flex-row md:justify-center gap-8 p-6">
      {steps.map((step, index) => (
        <div key={index} className="relative flex flex-col items-center md:flex-1">
          {/* Gradient Circle with Icon */}
          <div className={`w-16 h-16 flex items-center justify-center rounded-full text-white text-2xl ${step.gradient}`}>
            {step.icon}
          </div>

          {/* Vertical Line for Mobile */}
          {index < steps.length - 1 && <div className="md:hidden h-16 w-1 bg-gray-300"></div>}

          {/* Title and Description */}
          <div className="text-center mt-4">
            <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{step.description}</p>
          </div>

          {/* Horizontal Line for Desktop */}
          {index < steps.length - 1 && <div className="hidden md:block absolute top-8 left-full h-1 w-8 bg-gray-300"></div>}
        </div>
      ))}
    </div>
    
    </div>
  );
};

export default Process;
