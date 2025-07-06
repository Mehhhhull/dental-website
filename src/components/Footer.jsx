import { span } from "framer-motion/client";
import { FaInstagram, FaMapMarkedAlt, FaPhone, FaTelegram, FaWhatsapp } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md";

const socialLinks = [
  { icon: <FaInstagram className="text-xl" />, href: "#" },
  { icon: <FaWhatsapp className="text-xl" />, href: "#" },
  { icon: <FaTelegram className="text-xl" />, href: "#" },
];
const clinicHours = [
  { day: 'Sunday-Thursday', time: '9AM-8PM' },
  { day: 'Friday', time: '4AM-9PM' },
  { day: 'Saturday', time: 'CLOSED' },
];

const contactImfo = [
  {
    icon: <FaPhone className="mr-4 text-white/70" />
  text: <a href="#" className="hover:text-sky-300 transition-colors" >
  +1 234 567 890
  
  </a>
  },
    {
    icon: <MdOutlineEmail className="mr-4 text-white/70" />
  text: <a href="#" className="hover:text-sky-300 transition-colors" >
   info@khutkhutiadental.com
  
  </a>
  },
    {
    icon: <FaMapMarkedAlt className="mr-4 text-white/70" />
  text:<span> 123 Dental AVenue, City, Country</span>

  },
]
const Footer = () => {
  return (
   <footer></footer>
  )
}

export default Footer
