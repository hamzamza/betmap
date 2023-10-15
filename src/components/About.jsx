import Navbar from "./navbar/Navbar";

function About() {
    return ( 
        <div>
            <Navbar about={true}/>
            <section id="about" class="bg-white  m-24 text-lg font-medium">

  <p className="text-gray-800 mb-4">Our company is a hotel booking platform for Morocco. We are currently in beta and are working hard to bring you the best deals and the most comprehensive selection of hotels in the country.</p>
  <p className="text-gray-800 mb-4">Our platform is designed to make booking a hotel in Morocco as easy and stress-free as possible, with features such as instant confirmation and a user-friendly interface. We are also committed to providing 24/7 customer support to ensure that your experience with us is a pleasant one.</p>
  <h3 className="text-blue-700 text-2xl font-bold mb-4">Meet the Team</h3>
  <ul className="list-inside">
    <li className="mb-4">
      <h4 className="text-blue-700 text-2xl font-bold mb-2">John Doe</h4>
      <p className="text-gray-800">John is the CEO and founder of our company. He has years of experience in the travel industry and is passionate about making Morocco more accessible to travelers.</p>
    </li>
    <li className="mb-4">
      <h4 className="text-blue-700 text-2xl font-bold mb-2">Hamza douaij</h4>
      <p className="text-gray-800">Jane is the CTO and lead developer of our platform. She has a background in computer science and is constantly working to improve the user experience on our website.</p>
    </li>
  </ul>
  <p className="text-gray-800 mb-4">Join us on <a href="https://github.com/hamzamza" className="text-blue-700" target={"_blank"}>GitHub</a> and help us to improve our service.</p>
</section>

        </div>
     );
}

export default About;