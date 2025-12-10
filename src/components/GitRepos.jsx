import React from "react";


function GitRepos() {
  const cardItem = [
    {
      id: 1,

      name: "Web Automation Frameworks",
       description: "Java - Maven - Selenium - TestNG - Junit - Gherkin - Cucumber - SerenityBDD - ExtentReports - Allure Reports - Reporting - Test Data Management - Test Design - Capabilities - WebDriver Manager - BatchFile - Utilities - SampleCode Usage - Folder Structure - Wiki - Git Pipeline Integration - CICD Integration - Docker", 
      codeLink: "https://github.com/stars/kavyage/lists/web-automation",
    },
    {
      id: 2,
      
      name: "Automated WorkFlows",
description: `Testrail Integration - Jira Integration - Individual Test Run Execution Report - Overall Execution Report |
Groovy - Java - Gradle | Windows - Linux - multi Envs | File Handler Executor - Custom Config - Jenkins |
all build file formats - exe, msi, sh, jar, zip, rar, tgz, gz | acunetix`,

      codeLink: "https://github.com/stars/kavyage/lists/automated-tools",
    },
    {
      id: 3,
 
      name: "API Automation Frameworks",
      description: "Java - Gradle - SerenityBDD - Gherkin - Cucumber - Rest-Assured | utilities - Auth - DTO - payloads - config - excel - fileops - hooks - json - request & response handling - api utils",
      codeLink: "https://github.com/stars/kavyage/lists/api-automation",
    },
    {
      id: 4,
    
      name: "Web Designs",
      description: "Web Design - AI Tools - Figma - Canva - Git - Vercel - Netlify - Steps to Build & Deploy - Portfolio - JavaScript - HTML - CSS - TypeScript ",
      codeLink: "https://github.com/stars/kavyage/lists/web-design",
    },
    {
      id: 5,
     
      name: "Interview Notes",
       description: "SDET- QA - Automation - Software Testing - Manual Testing",
      codeLink: "https://github.com/stars/kavyage/lists/interview",
    },
    
  ];

  return (
    <>

    <div
      name="GitRepos"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 text-center">GitRepos</h1>
        {/* <span className="underline font-semibold">Featured Projects</span> */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-5"> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
          {cardItem.map(({ id, name, description, codeLink }) => (
            <div
              // className="md:w-[300px] md:h-auto border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300"
              className="border-[2px] rounded-xl shadow-md p-5 hover:scale-105 duration-300 bg-white flex flex-col justify-between"
              key={id}
            >
              
              <div className="text-center">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-sm">{description}</p>
              </div>
              <div className="flex justify-center gap-4 mt-auto pt-4">
                
                <a href={codeLink} target="_blank" rel="noopener noreferrer">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
          <hr />
  </>
  );
}

export default GitRepos;