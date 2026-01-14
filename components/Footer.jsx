import { FaFacebook, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img src="/logo-white.jpg" alt="Logo" className='w-54 h-32'  />
            <div className="flex gap-4">
              <FaFacebook className="text-2xl hover:text-blue-200 cursor-pointer transition-colors duration-300" />
              <FaTwitter className="text-2xl hover:text-blue-200 cursor-pointer transition-colors duration-300" />
              <FaLinkedin className="text-2xl hover:text-blue-200 cursor-pointer transition-colors duration-300" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {['About Us', 'Careers', 'Investors', 'Contact'].map((item) => (
                <li key={item} className="hover:text-blue-200 cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              {['FAQs', 'Privacy Policy', 'Terms of Use', 'Documentation'].map((item) => (
                <li key={item} className="hover:text-blue-200 cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
            <div className="flex items-center mb-3">
              <FaMapMarkerAlt className="mr-3 text-4xl hover:text-blue-200 cursor-pointer transition-colors duration-300" />
              <p>NO 203, 2ND Floor, Sumadhura Mani Residency, Plot no 4748/15, New Bhoiguda, Hyderabad, 500003</p>
            </div>
            <div className="flex items-center mb-5">
              <a 
                href="mailto:akcellbiomedd@gmail.com" 
                className="flex items-center"
              >
                <FaEnvelope className="mr-3 text-2xl hover:text-blue-200 cursor-pointer transition-colors duration-300 " />
                <span className='hover:text-blue-200 cursor-pointer transition-colors duration-300'>akcellbiomedd@gmail.com</span>
              </a>
            </div>
            <div className="flex items-center">
              <a 
                href="tel:+919071202929" 
                className="flex items-center"
              >
                <FaPhoneAlt className="mr-3 text-2xl hover:text-blue-200 cursor-pointer transition-colors duration-300" />
                <span className='hover:text-blue-200 cursor-pointer transition-colors duration-300'>+91 90712 02929</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p>© 2026 AkcellBioMedd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}