import Wrapper from "./Wrapper";

export default function Footer() {
    return (<Wrapper>
        <div className="mt-10">
      <footer className="bg-white text-gray-600 py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Left Section */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold text-blue-600">MORENT</h2>
              <p className="mt-2 text-sm">
                Our vision is to provide convenience <br />
                and help increase your sales business.
              </p>
            </div>
  
            {/* Right Section */}
            <div className="mt-6 md:mt-0 flex flex-wrap justify-center md:justify-between w-full md:w-auto">
              {/* About Links */}
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="font-semibold">About</h3>
                <ul className="mt-2 text-sm space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      How it works
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Featured
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Partnership
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Business Relation
                    </a>
                  </li>
                </ul>
              </div>
  
              {/* Community Links */}
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="font-semibold">Community</h3>
                <ul className="mt-2 text-sm space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Events
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Podcast
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Invite a friend
                    </a>
                  </li>
                </ul>
              </div>
  
              {/* Social Links */}
              <div>
                <h3 className="font-semibold">Socials</h3>
                <ul className="mt-2 text-sm space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Discord
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="mt-8 border-t pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>©2022 MORENT. All rights reserved</p>
            <div className="space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-600">
                Privacy & Policy
              </a>
              <a href="#" className="hover:text-blue-600">
                Terms & Condition
              </a>
            </div>
          </div>
        </div>
      </footer>
      </div>
      </Wrapper>
    );
  }