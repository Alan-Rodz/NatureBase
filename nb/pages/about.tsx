import Image from 'next/image';

// ********************************************************************************
const About = () =>
  <main>
    <div className='center-screen'>
      <div className='card'>
        <Image src='/logo.png' width={200} height={200} alt='plantImage' />
        <h3><br /></h3>
        <h3 className='text-success'>NatureBase - Plant Database</h3>
        <h4 className='text-success'>This is a revamp of an app I made in October 2019</h4>
        <h4 className='text-success'>Tech Stack: React + NextJS + TypeScript + Firebase</h4>
        <form action='https://new-naturebase.vercel.app/'>
          <button className='center-btn-green' >Go to Plant Catalogue</button>
        </form>
        <form action='https://www.linkedin.com/in/alan-rodriguez-16b074192/'>
          <button className='center-btn-green' >Go to my LinkedIn</button>
        </form>
      </div>
    </div>
  </main>;

export default About;
