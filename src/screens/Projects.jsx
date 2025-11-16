const Projects = () => {
  const Project = [
    {
      name: "DevTinder",
      link: "https://github.com/Angad0045/DevTinder",
      img: "DevTinder_2.png",
    },
    {
      name: "MovieGPT",
      link: "https://github.com/Angad0045/MovieRecommender",
      img: "MovieRecommender.png",
    },
    {
      name: "ChessGAME",
      link: "/",
      img: "ChessGame.png",
    },
  ];

  return (
    <>
      <div className="md:px-10 lg:px-32 py-10 w-full bg-gradient-to-b from-neutral-900 to-neutral-950 flex flex-col justify-center items-center">
        <h1 className="font-black text-4xl text-[#155dfc] my-5">My Work</h1>
        <div className="grid grid-flow-row-dense lg:grid-cols-2 my-5">
          {Project.map((P, index) => (
            <div
              key={index}
              className="bg-neutral-900 m-5 cursor-pointer hover:shadow-[0_0_5px_#155dfc,0_0_10px_#155dfc,0_0_20px_#155dfc] transition-shadow duration-300"
            >
              <div className="h-[300px] w-full flex justify-center items-center">
                <img
                  src={P.img}
                  alt="Image"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex justify-center items-center py-5 gap-5">
                <h1 className="font-bold text-2xl text-[#808080]">{P.name}</h1>
                <a href={P.link}>
                  <button className="px-4 py-2 bg-[#155dfc] rounded-xl">
                    Link
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
        <a
          className="w-full flex justify-center items-center"
          href="https://github.com/Angad0045?tab=repositories"
        >
          <button
            className="w-[70%] p-3 m-3 text-[#808080] font-bold border border-[#3f3f3f] rounded-2xl 
          hover:bg-neutral-900 hover:text-white transition-all duration-200"
          >
            Click to view more projects
          </button>
        </a>
      </div>
    </>
  );
};

export default Projects;
