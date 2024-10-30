const UserProfile = () => {
  return (
    <>
      <div className="flex flex-col h-screen bg-gray-100">
        <div className="bg-white text-white shadow w-full p-2 flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center">
              <img
                src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png"
                alt="Logo"
                className="w-28 h-18 mr-2"
              />
              <h2 className="font-bold text-xl">Nombre de la Aplicación</h2>
            </div>
            <div className="md:hidden flex items-center">
              <button id="menuBtn">
                <i className="fas fa-bars text-gray-500 text-lg"></i>
              </button>
            </div>
          </div>

          <div className="space-x-5">
            <button>
              <i className="fas fa-bell text-gray-500 text-lg"></i>
            </button>
            <button>
              <i className="fas fa-user text-gray-500 text-lg"></i>
            </button>
          </div>
        </div>

        <div className="flex-1 flex flex-wrap">
          <div
            className="p-2 bg-white w-full md:w-60 flex flex-col md:flex hidden"
            id="sideNav"
          >
            <nav>{/* Navigation links */}</nav>
            <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mt-2"></div>
            <p className="mb-1 px-5 py-3 text-left text-xs text-cyan-500">
              Copyright WCSLAT@2023
            </p>
          </div>

          <div className="flex-1 p-4 w-full md:w-1/2">
            <div className="relative max-w-md w-full">
              <input
                className="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline"
                type="search"
                placeholder="Buscar..."
              />
            </div>

            {/* Content Sections */}
            <div className="mt-8 flex flex-wrap space-x-0 space-y-2 md:space-x-4 md:space-y-0">
              {/* Section 1 */}
              <div className="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
                <h2 className="text-gray-500 text-lg font-semibold pb-1">
                  Usuarios
                </h2>
                <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
                <div
                  className="chart-container"
                  style={{
                    position: "relative",
                    height: "150px",
                    width: "100%",
                  }}
                >
                  <canvas id="usersChart"></canvas>
                </div>
              </div>
              {/* Section 2 */}
              <div className="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
                <h2 className="text-gray-500 text-lg font-semibold pb-1">
                  Comercios
                </h2>
                <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
                <div
                  className="chart-container"
                  style={{
                    position: "relative",
                    height: "150px",
                    width: "100%",
                  }}
                >
                  <canvas id="commercesChart"></canvas>
                </div>
              </div>
            </div>

            {/* Additional Sections like Table */}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
