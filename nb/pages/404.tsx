import Link from 'next/link';

// ********************************************************************************
const Custom404 = () =>
  <main>
    <h1>404 - The page you asked for does not exist!</h1>
    <iframe
      src='https://giphy.com/embed/yFfPrA6TaURfa'
      width='100%'
      height='362'
      frameBorder='0'
      allowFullScreen
    />
    <Link href='/' passHref>
      <button className='center-btn-green'>Go Back</button>
    </Link>
  </main>;

export default Custom404;