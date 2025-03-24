import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { FaMapMarkerAlt, FaStar, FaUniversity, FaAward } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Dummy data array for 20 colleges (can be replaced with API data)
const colleges = [
  {
    "id": 1,
    "name": "Bennett University",
    "image": "./imgs/Bennett_University_.jpg",
    "logo": "./imgs/Bennett-Logo-VerticalColor.png",
    "highlights": ["Times Group Initiative", "Global Faculty", "Strong Industry Connect"],
    "location": "Greater Noida ",
    "link": "https://enquiry.careerbanao.org/?utm_source=Delhi_NCR%20LandingPage&utm_medium=Bennett_University&utm_campaign=CB%20-%20SAP%202025"
  },
  {
    "id": 2,
    "name": "IILM Greater Noida",
    "image": "./imgs/events_banner.png",
    "logo": "./imgs/images.jpeg",
    "highlights": ["30+ Years of Excellence", "16,000+ Global Alumni", "International Collaborations"],
    "location": "Greater Noida ",
    "link": "https://enquiry.careerbanao.org/?utm_source=Delhi_NCR%20LandingPage&utm_medium=IILM_Greater_Noida&utm_campaign=CB%20-%20SAP%202025"
  },
  {
    "id": 3,
    "name": "IILM Gurugram",
    "image": "./imgs/Gurugram-scaled.jpg",
    "logo": "./imgs/logo_1609334560.png",
    "highlights": ["360+ Research Papers", "Global Student Exchange Programs", "45+ Patents"],
    "location": "Gurugram ",
    "link": "https://enquiry.careerbanao.org/?utm_source=Delhi_NCR%20LandingPage&utm_medium=IILM_Gurugram&utm_campaign=CB%20-%20SAP%202025"
  },
  {
    "id": 4,
    "name": "Mangalmay Group Of Institutions",
    "image": "./imgs/Image-2-5.jpg",
    "logo": "./imgs/1631350309645.jpeg",
    "highlights": ["NAAC 'A' Accredited", "ISO 9001:2000 Certified", "37 LPA Highest Package"],
    "location": "Greater Noida ",
    "link": "https://enquiry.careerbanao.org/?utm_source=Delhi_NCR_LandingPage&utm_medium=Mangalmay_Group_Of_Institutions&utm_campaign=CB%20-%20SAP%202025"
  },
  {
    "id": 5,
    "name": "GNIOT",
    "image": "./imgs/1499333475phpY9hQNo.jpeg",
    "logo": "./imgs/images.png",
    "highlights": ["Top Engineering & Management Institute", "Industry-Oriented Curriculum", "Strong Placement Support"],
    "location": "Greater Noida ",
    "link": "https://enquiry.careerbanao.org/?utm_source=Delhi_NCR_LandingPage&utm_medium=GNIOT&utm_campaign=CB%20-%20SAP%202025"
  },
  {
    "id": 6,
    "name": "K.R Mangalam University",
    "image": "./imgs/82bs_1-768x380-1.webp",
    "logo": "./imgs/81e7754d22e0094165e78e4f091eb404.jpg",
    "highlights": ["100+ Research Labs", "3000+ Research Publications", "Global University Partnerships"],
    "location": "Gurugram",
    "link": "Lhttps://enquiry.careerbanao.org/?utm_source=Delhi_NCR_LandingPage&utm_medium=K.R_Mangalam&utm_campaign=CB%20-%20SAP%202025"
  },
  {
    "id": 7,
    "name": "SRM DELHI NCR",
    "image": "./imgs/srm-delhi.jpg",
    "logo": "./imgs/srmites_alumni_meet_2023_logo.jpeg",
    "highlights": ["NAAC 'A++' Accreditation", "Top Ranked Private University", "Strong Placement Network"],
    "location": "Ghaziabad",
    "link": "https://enquiry.careerbanao.org/?utm_source=Delhi_NCR_LandingPage&utm_medium=SRM_DELHI_NCR&utm_campaign=CB%20-%20SAP%202025"
  },
  {
    "id": 8,
    "name": "Rishihood University",
    "image": "./imgs/Cover-1.jpg",
    "logo": "./imgs/images (1).png",
    "highlights": ["India's First Impact University", "Multi-Disciplinary Approach", "Entrepreneurial Ecosystem"],
    "location": "Sonipat",
    "link": "https://enquiry.careerbanao.org/?utm_source=Delhi_NCR_LandingPage&utm_medium=Rishihood_University&utm_campaign=CB%20-%20SAP%202025"
  },
  {
    "id": 9,
    "name": "GLA Campus",
    "image": "./imgs/1663131815phpZ3WZxB.jpeg",
    "logo": "./imgs/1200x600wa.png",
    "highlights": ["100% Placement Assistance", "Top Ranked Private University", "Strong Industry Tie-Ups"],
    "location": "Gr. Noida",
    "link": "https://enquiry.careerbanao.org/?utm_source=Delhi_NCR_LandingPage&utm_medium=GLA%20_Campus&utm_campaign=CB%20-%20SAP%202025"
  },
  {
    "id": 10,
    "name": "SRM University",
    "image": "./imgs/slide-3-min.png",
    "logo": "./imgs/images (1).jpeg",
    "highlights": ["Top Private University", "NAAC 'A++' Accredited", "Excellent Research Facilities"],
    "location": "Sonipat ",
    "link": "https://enquiry.careerbanao.org/?utm_source=Delhi_NCR_LandingPage&utm_medium=SRM_University&utm_campaign=CB%20-%20SAP%202025"
  },
  {
    "id": 11,
    "name": "Amity University",
    "image": "./imgs/amity.jpg",
    "logo": "./imgs/7085a4e10fca016c9897b97b8e14b0a1.jpg",
    "highlights": ["India's Leading Research University", "Global Collaborations", "350+ Career Programs"],
    "location": "Gurugram ",
    "link": "https://enquiry.careerbanao.org/?utm_source=Delhi_NCR_LandingPage&utm_medium=Amity_University&utm_campaign=CB%20-%20SAP%202025"
  },
  {
    "id": 12,
    "name": "Geeta University",
    "image": "./imgs/geeta_university2.webp",
    "logo": "./imgs/1652682958phpOptz2w.jpeg",
    "highlights": ["NAAC Accredited", "Industry-Driven Curriculum", "World-Class Infrastructure"],
    "location": "Panipat ",
    "link": "https://enquiry.careerbanao.org/?utm_source=Delhi_NCR_LandingPage&utm_medium=Geeta_University&utm_campaign=CB%20-%20SAP%202025"
  }
]



const CollegeCards: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
const [debouncedSearch, setDebouncedSearch] = useState("");

useEffect(() => {
  const handler = setTimeout(() => {
    setDebouncedSearch(searchTerm);
  }, 300); 

  return () => clearTimeout(handler);
}, [searchTerm]);

const uniqueColleges = Array.from(
  new Map(colleges.map((college) => [college.id, college])).values()
);

const filteredColleges = uniqueColleges.filter(
  (college) =>
    college.name?.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    college.location?.toLowerCase().includes(debouncedSearch.toLowerCase())
);

const settings = {
  dots: false,
  infinite: filteredColleges.length > 1,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  autoplay: debouncedSearch.length === 0,
  pauseOnHover: true,
  arrows:true,
  responsive: [
    {
      breakpoint: 1370,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 870,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const handleClick = (url: string) => {
  const newTab = window.open(url, "_blank", "noopener,noreferrer");
  if (newTab) {
    newTab.opener = null;
  }
};


  
  return (
    <div className=" font-poppins px-4 sm:px-14">
  {/* 🔹 Section Heading */}
  <h1 className="text-2xl sm:text-3xl font-bold text-center text-black pt-14">
     <MdSchool className="inline-block text-primaryBtn text-5xl mr-2" />
     CareerBanao Scholarship Admission Program 2025
</h1>

{/* 🔹 Search Section */}
<div className="text-center p-6">
    {/* 🔹 Search Section */}
    <h1 className="text-lg md:text-xl font-bold text-purple-700">
  Unlock Your Future with CareerBanao
</h1>
<h1 className="text-lg md:text-xl font-bold text-blue-600">
  CareerBanao Scholarship Admission Program 2025
</h1>
<h1 className="text-lg md:text-xl font-bold text-purple-700">
  Scholarships & Admissions Made Easy
</h1>
<h1 className="text-lg md:text-xl font-semibold text-pink-500">
  "Achieve More with the Right Support!"
</h1>
<p className="text-gray-600 mt-3 text-sm md:text-base">
  Top universities me admission secure karne ke liye financial aid aur expert guidance lein.  
  Scholarship ke liye apply karein aur apna sapna pura karein!
</p>
<p className="text-gray-500 text-sm mt-2">
  Apni pasandida <b>College Name</b> enter karein aur scholarship & admission opportunities explore karein.
</p>

  

    {/* 🔹 Search Input */}
    <input
      type="text"
      placeholder="Search by College Name or Location..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="mt-4 p-2 w-full md:w-1/2 border rounded-md shadow-sm focus:ring focus:ring-purple-300"
    />
  </div>

  {/* 🔹 Jab search term ho, tab grid dikhaye */}
  {searchTerm.length > 0 ? (
    <div className="w-full flex overflow-x-auto whitespace-nowrap space-x-4 p-4">
    {filteredColleges.length > 0 ? (
      filteredColleges.map((college) => (
        <div key={college.id} className="bg-white min-w-[300px] shadow-lg rounded-lg overflow-hidden p-4">
          <div className="relative">
            <img src={college.image} alt={`${college.name} Campus`} className="w-full h-40 object-cover" />
            <img src={college.logo} alt={`${college.name} Logo`} className="absolute top-3 left-3 w-12 h-12 rounded-full border-2 border-white shadow-md"/>
          </div>
          <h1 className="text-md font-semibold text-purple-700 mt-2">{college.name}</h1>
          <p className="text-sm text-gray-600 flex items-center">
            <FaMapMarkerAlt className="text-red-500 mr-2" /> {college.location}
          </p>
          <ul className="text-sm text-gray-600 space-y-1 mb-3">
            {college.highlights.map((highlight, index) => (
              <li key={index} className="flex items-center">
                <FaStar className="text-yellow-500 mr-2" />
                {highlight}
              </li>
            ))}
          </ul>
          <a onClick={() => handleClick(college.link)}>
            <button className="bg-purple-700 hover:bg-pink-500 text-white py-2 px-4 rounded-lg text-sm font-medium w-full transition">
              <FaAward className="inline-block mr-2" /> Apply now
            </button>
          </a>
        </div>
      ))
    ) : (
      <p className="text-center col-span-full text-gray-600">No colleges found.</p>
    )}
  </div>
  
  ) : (
    // 🔹 Jab search term empty ho, tab slider dikhaye
    <Slider {...settings} className="mx-4">
      {filteredColleges.map((college) => (
        <div key={college.id} className="px-2 pt-5 pb-5">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl">
            <div className="relative">
              <img src={college.image} alt={`${college.name} Campus`} className="w-full h-40 object-cover" />
              <img src={college.logo} alt={`${college.name} Logo`} className="absolute top-3 left-3 w-12 h-12 rounded-full border-2 border-white shadow-md" />
            </div>
            <div className="p-4">
              <h1 className="text-md font-semibold text-gray-800 mb-2 flex items-center">
                <FaUniversity className="text-purple-700 mr-2" />
                {college.name}
              </h1>
              <p className="text-sm text-gray-600 flex items-center mb-3">
                <FaMapMarkerAlt className="text-red-500 mr-2" /> {college.location}
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                {college.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center">
                    <FaStar className="text-yellow-500 mr-2" />
                    {highlight}
                  </li>
                ))}
              </ul>
              <a onClick={() => handleClick(college.link)}>
                <button className="bg-purple-700 hover:bg-pink-500 text-white py-2 px-4 rounded-lg text-sm font-medium w-full transition">
                  <FaAward className="inline-block mr-2" /> Apply now
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  )}
</div>

  );
};
export default CollegeCards;

