// src/pages/overlay.js
import { useRouter } from 'next/router';
import Image from 'next/image';

const Overlay = () => {
  const router = useRouter();
  const { img } = router.query;

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      {img && <Image src={`/${img}`} alt="Overlay Image" layout="fill" objectFit="contain" />}
    </div>
  );
};

export default Overlay;
