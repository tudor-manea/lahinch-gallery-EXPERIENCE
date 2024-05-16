import Hero from './components/Hero';
import Image from 'next/image';
import infoImage from "@/public/11th-Hole.jpg";
import audioImage from "@/public/Ascent.jpg";
import experienceImage from "@/public/Arranmor-Island.jpg";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="w-full bg-black text-white py-10">
        <h1 className='text-center text-3xl font-bold mb-5'>
          Features
        </h1>
        <div className="w-[89%] m-auto lg:max-w-[1500px] 
        flex flex-col gap-10">

          {/* FIRST IMAGE */}

          <div className='grid grid-cols-1 lg:grid-cols-2 
          items-center justify-items-center lg:justify-items-stretch mb-10 lg:mb-0'>
            <Image src={infoImage} height={300} width={300} 
            alt="info" className="mb-5 lg:mb-0 rounded-md"/>

            <div className="text-center">
              <h1 className='text-5xl font-bold text-blue-300 mb-3'>Access Exclusive Info.</h1>
              <p className='font-bold leading-6'>
                Get access to exclusive information about the gallery 
                and the artists. Learn about their inspirations, 
                techniques, and the stories behind their masterpieces. 
                Stay updated with the latest exhibitions, events, and 
                special offers available only to our members.</p>
            </div>
          </div>

          {/* SECOND IMAGE */}

          <div className='grid grid-cols-1 lg:grid-cols-2 
          items-center justify-items-center lg:justify-items-stretch mb-10 lg:mb-0'>
            

            <div className="text-center">
              <h1 className='text-5xl font-bold text-blue-300 mb-3'>Audio Snippets from Artists.</h1>
              <p className='font-bold leading-6'>
                Listen to exclusive audio snippets from the artists themselves. 
                Hear them discuss their inspirations, techniques, and the stories 
                behind their masterpieces. Stay connected with the latest insights 
                and personal reflections directly from the creators.</p>
            </div>
            <Image src={audioImage} height={300} width={300} 
            alt="audio" className="mb-4 lg:mb-0 rounded-md lg:justify-self-end order-first lg:order-last"/>
          </div>

          {/* THIRD IMAGE */}

          <div className='grid grid-cols-1 lg:grid-cols-2 
          items-center justify-items-center lg:justify-items-stretch mb-10 lg:mb-0'>
            <Image src={experienceImage} height={300} width={300} 
            alt="perspective" className="mb-5 lg:mb-0 rounded-md"/>

            <div className="text-center">
              <h1 className='text-5xl font-bold text-blue-300 mb-3'>A New Perspective.</h1>
              <p className='font-bold leading-6'>
                Discover a new perspective on art with our curated collections. 
                Explore the unique viewpoints of various artists and gain 
                insights into their creative processes. Experience the 
                transformative power of art through exclusive exhibitions, 
                events, and special offers available only to our members.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home