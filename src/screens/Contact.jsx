import { SiGithub, SiLinkedin } from "react-icons/si";
import { Mail, MapPinIcon, Phone } from "lucide-react";
import GlareHover from "../ui_components/GlareHover";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [toastMsg, setToastMsg] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/sendMail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setToastMsg(true);
    setTimeout(() => setToastMsg(false), 1500);
    if (!data.message) alert("Something went wrong!");

    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="h-auto w-screen bg-gradient-to-b from-black to-neutral-900 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        {/* Left Section */}
        <div className="lg:col-span-2 text-white flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <h5 className="text-lg sm:text-xl text-blue-600 font-semibold">
            Let's Talk
          </h5>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black">
            Contact
          </h1>
          <p className="mt-5 text-[#808080] text-sm sm:text-base">
            Got a question or a project you’d like to discuss? I’m always open
            to new opportunities, collaborations, and conversations — don’t
            hesitate to reach out!
          </p>

          {/* Contact Details */}
          <div className="mt-5">
            <h1 className="text-xl sm:text-2xl font-bold">
              Contact Information
            </h1>
            <div className="px-2 sm:px-5">
              {/* Email */}
              <div className="flex justify-start items-center gap-3 sm:gap-4 my-3">
                <div>
                  <GlareHover
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={800}
                    playOnce={false}
                    height="45px"
                    width="45px"
                    background="transparent"
                  >
                    <Phone size={30} color="#155dfc" />
                  </GlareHover>
                </div>
                <div>
                  <h1 className="text-xs sm:text-sm text-[#808080]">Mail</h1>
                  <h3 className="font-bold cursor-pointer text-sm sm:text-base">
                    angadpatil1141@gmail.com
                  </h3>
                </div>
              </div>

              {/* Phone */}
              <div className="flex justify-start items-center gap-3 sm:gap-4 my-3">
                <div>
                  <GlareHover
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={800}
                    playOnce={false}
                    height="45px"
                    width="45px"
                    background="transparent"
                  >
                    <Mail size={30} color="#155dfc" />
                  </GlareHover>
                </div>
                <div>
                  <h1 className="text-xs sm:text-sm text-[#808080]">Phone</h1>
                  <h3 className="font-bold cursor-pointer text-sm sm:text-base">
                    +91 9321550431
                  </h3>
                </div>
              </div>

              {/* Location */}
              <div className="flex justify-start items-center gap-3 sm:gap-4 my-3">
                <div>
                  <GlareHover
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={800}
                    playOnce={false}
                    height="45px"
                    width="45px"
                    background="transparent"
                  >
                    <MapPinIcon size={30} color="#155dfc" />
                  </GlareHover>
                </div>
                <div>
                  <h1 className="text-xs sm:text-sm text-[#808080]">
                    Location
                  </h1>
                  <h3 className="font-bold text-sm sm:text-base">Mumbai</h3>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <h1 className="text-lg sm:text-xl font-semibold mt-5">
              Connect with me
            </h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/angad-patil/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <div
                  className="bg-gradient-to-l from-black to-neutral-900 flex justify-start items-center gap-3 sm:gap-4 my-3 p-3 border-2 border-neutral-800 rounded-2xl cursor-pointer
              hover:shadow-[0_0_5px_#155dfc,0_0_15px_#155dfc,0_0_25px_#155dfc]
              transition-shadow duration-300"
                >
                  <SiLinkedin size={30} color="#155dfc" />
                  <div>
                    <h1 className="text-sm text-[#808080]">LinkedIn</h1>
                    <h3 className="font-bold">Angad Patil</h3>
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Angad0045"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <div
                  className="bg-gradient-to-l from-black to-neutral-900 flex justify-start items-center gap-3 sm:gap-4 my-3 p-3 border-2 border-neutral-800 rounded-2xl cursor-pointer
              hover:shadow-[0_0_5px_#155dfc,0_0_15px_#155dfc,0_0_25px_#155dfc]
              transition-shadow duration-300"
                >
                  <SiGithub size={30} color="#155dfc" />
                  <div>
                    <h1 className="text-sm text-[#808080]">GitHub</h1>
                    <h3 className="font-bold">@Angad0045</h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="lg:col-span-2 w-full p-6 sm:p-8 lg:p-10">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center text-[#808080] w-full max-w-md mx-auto"
          >
            <h1 className="text-xl font-bold text-white">Send me a message</h1>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 m-3 rounded-md border border-[#3f3f3f] text-white 
                     focus:outline-none focus:ring focus:ring-blue-600 focus:border-blue-600"
              type="text"
              placeholder="Name"
              required
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 m-3 rounded-md border border-[#3f3f3f] text-white 
                     focus:outline-none focus:ring focus:ring-blue-600 focus:border-blue-600"
              type="email"
              placeholder="Email"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full h-32 p-3 m-3 resize-none rounded-md border border-[#3f3f3f] text-white 
                     focus:outline-none focus:ring focus:ring-blue-600 focus:border-blue-600"
              placeholder="Message"
              required
            />

            <button
              type="submit"
              className="w-full p-3 m-3 font-bold border border-[#3f3f3f] rounded-2xl 
                     hover:bg-neutral-900 hover:text-white transition-all duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {toastMsg && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-neutral-900 text-white border-b-[5px] border-[#255dfc] px-10 py-3 z-50">
          Mail Sent
        </div>
      )}

      {/* Footer */}
      <hr className="border-t border-[#808080]/50 w-full py-6" />
      <h1 className="pb-10 text-xs sm:text-sm text-[#808080] text-center">
        Copyright © 2025{" "}
        <a
          href="https://github.com/Angad0045"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
        >
          Angad Patil
        </a>
        . All rights reserved.
      </h1>
    </div>
  );
};

export default Contact;
