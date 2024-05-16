import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const page = () => {
  return (
    <div className="flex items-center justify-center h-fit py-10 bg-blue-300">
      <div className="flex flex-col md:flex-row bg-white w-[89%] rounded-lg p-8 lg:max-w-[1500px]">
        {/* Contact Information Section */}
        <div className="flex flex-col gap-10 md:w-1/2 p-4">
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt size={25} className="mr-2" />
              <p className="text-xl">
                Main St, Dough, Lahinch, Co. Clare, V95 X5RH
              </p>
            </div>

            <div className="flex items-center mb-4">
              <FaEnvelope size={25} className="mr-2" />
              <p className="text-xl">caiminkenny@gmail.com</p>
            </div>

            <div className="flex items-center">
              <FaPhone size={25} className="mr-2" />
              <p className="text-xl">085 225 3096</p>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-4">Hours of Operations</h2>
            <span className="text-xl">Monday: 10:30am - 6pm</span>
            <span className="text-xl">Tuesday: 10:30am - 6pm</span>
            <span className="text-xl">Wednesday: 10:30am - 6pm</span>
            <span className="text-xl">Thursday: 10:30am - 6pm</span>
            <span className="text-xl">Friday: 10:30am - 6pm</span>
            <span className="text-xl">Saturday: 10:30am - 6pm</span>
            <span className="text-xl">Sunday: 11am - 6pm</span>
          </div>
        </div>

        {/* Contact Form Section*/}
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <form action="">
            <div className="mb-4">
              <label htmlFor="name" className="block font-bold mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border border-blue-300 p-2 w-full"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block font-bold mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-blue-300 p-2 w-full"
                placeholder="Your Email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block font-bold mb-1">
                Subject
              </label>
              <input
                type="subject"
                id="subject"
                className="border border-blue-300 p-2 w-full"
                placeholder="Subject"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-bold mb-1">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                className="border border-blue-300 p-2 w-full h-32"
                style={{ resize: "none" }}
              />
            </div>
            <button className="bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-500">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
