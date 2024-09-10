import React, { useState } from "react";
import dp from "../../img/newdp.jpeg";
import "../../data/Tabs.css"; // Import the CSS file

function Zero() {
  const [activeTab, setActiveTab] = useState("personal");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="relative min-h-screen flex flex-col mt-10">
      {/* Header and Image */}
      <div className="flex flex-col md:flex-row md:space-x-4 flex-grow px-4">
        {/* Image */}
        <div className="w-full md:w-1/3 p-4 flex justify-center mt-4 md:mt-14 order-1 md:order-2 md:ml-40">
          <img
            src={dp}
            alt="me"
            className="w-48 h-48 md:w-80 md:h-80 object-cover rounded-full border-4 border-stone-500"
          />
        </div>

        {/* Tab Content */}
        <div className="order-2 md:order-1">
          {/* Tab Titles */}
          <div className="tab-titles flex flex-nowrap justify-center md:justify-start mb-4 w-full">
            <p
              className={`tab-links flex-1 text-center text-sm md:text-2xl whitespace-nowrap ${
                activeTab === "personal" ? "active-link" : ""
              }`}
              onClick={() => handleTabClick("personal")}
            >
              Personal Information
            </p>
            <p
              className={`tab-links flex-1 text-center text-sm md:text-2xl whitespace-nowrap ${
                activeTab === "education" ? "active-link" : ""
              }`}
              onClick={() => handleTabClick("education")}
            >
              Education
            </p>
            <p
              className={`tab-links flex-1 text-center text-sm md:text-2xl whitespace-nowrap ${
                activeTab === "skills" ? "active-link" : ""
              }`}
              onClick={() => handleTabClick("skills")}
            >
              Skills
            </p>
          </div>

          {/* Tab Contents */}
          <div className="tab-contents-container">
            <div
              className={`tab-contents ${
                activeTab === "personal" ? "active-tab" : ""
              }`}
              id="personal"
            >
              <table className="table-auto text-left mt-10 mx-auto w-full max-w-lg">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td>Muhammad Bin Nasir</td>
                  </tr>
                  <tr>
                    <th>CNIC</th>
                    <td>37405-2355216-3</td>
                  </tr>
                  <tr>
                    <th>Date of Birth</th>
                    <td>August 2003</td>
                  </tr>
                  <tr>
                    <th>Gender</th>
                    <td>Male</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              className={`tab-contents ${
                activeTab === "education" ? "active-tab" : ""
              }`}
              id="education"
            >
              <table className="table-auto text-left mt-10 mx-auto w-full max-w-lg">
                <tbody>
                  <tr>
                    <th className="text-lg">Intermediate</th>
                  </tr>
                  <tr>
                    <th>Institute:</th>
                    <td>FG Sir Syed College The Mall</td>
                  </tr>
                  <tr>
                    <th>Perc/GPA:</th>
                    <td>91%</td>
                  </tr>
                  <tr>
                    <th className="text-lg">University</th>
                  </tr>
                  <tr>
                    <th>Institute:</th>
                    <td>Institute of Space Technology</td>
                  </tr>
                  <tr>
                    <th>Perc/GPA:</th>
                    <td>3.90</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              className={`tab-contents ${
                activeTab === "skills" ? "active-tab" : ""
              }`}
              id="skills"
            >
              <table className="table-auto text-left mt-10 mx-auto w-full max-w-lg">
                <tbody>
                  <tr>
                    <th>Programming Languages:</th>
                    <td>Python, C++, HTML & CSS, Javascript, SQL</td>
                  </tr>
                  <tr>
                    <th>Technologies:</th>
                    <td>
                      Object Oriented Programming, Data Structures, Web
                      Development, Data Visualization and cleaning
                    </td>
                  </tr>
                  <tr>
                    <th>Tools:</th>
                    <td>
                      React.js, Bootstrap, Tailwindcss, Matplotlib, Seaborn,
                      Scikit-learn, Pandas
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed bottom border */}
    </div>
  );
}

export default Zero;
