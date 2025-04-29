import { ShikhboIcon } from "../Icons/Icons"

const Footer = () => {
  return (
    <footer className=" bg-[#0d1117] border-t  border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <a href="#" className="flex items-center  text-white mb-4">
              <ShikhboIcon className="w-8 h-8 mr-2" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
                shikhbo.com
              </span>
            </a>
            <p className=" text-gray-400 text-sm">Learn AI development, together.</p>
          </div>

          {["Platform", "Resources", "Company"].map((category, index) => (
            <div key={index}>
              <h3 className=" text-white font-medium mb-4">{category}</h3>
              <ul className="space-y-2">
                {[...Array(5)].map((_, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className=" text-gray-400  hover:text-white text-sm transition-colors"
                    >
                      {category} Link {i + 1}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200  mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className=" text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} shikhbo.ai, Inc. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <a
              href="#"
              className=" text-gray-400  hover:text-white transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className=" text-gray-400  hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className=" text-gray-400  hover:text-white transition-colors"
            >
              Security
            </a>
            <a
              href="#"
              className=" text-gray-400  hover:text-white transition-colors"
            >
              Status
            </a>
            <a
              href="#"
              className=" text-gray-400  hover:text-white transition-colors"
            >
              Help
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
