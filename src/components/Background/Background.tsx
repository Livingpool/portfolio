import { useEffect, useState } from 'react'
import './background.css'

const Background = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const hueRotation = scrollY % 360;

  return (
    <div className='background'>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1440 560">
        <g mask="url(&quot;#SvgjsMask1028&quot;)" fill='#ffcccc'>
          <path style={{filter: `hue-rotate(${hueRotation}deg)`}} d="M1335.435163148824 397.29863630117273L1440.4295865082147 437.717067565452 1426.742264633064 340.3267119144783z" className="shape-float2"></path>
          <path style={{filter: `hue-rotate(${hueRotation + 30}deg)`}} d="M160.90424728809924 241.6147357996808L187.34449960186566 333.82285361750763 279.5526174196925 307.38260130374124 253.11236510592607 215.17448348591438z" className="shape-float2"></path>
          <path style={{filter: `hue-rotate(${hueRotation + 90}deg)`}} d="M55.70430796061051 447.08872750858035L72.93271637799272 511.3860230557981 120.00160350782828 429.8603190911981z" className="shape-float1"></path>
          <path style={{filter: `hue-rotate(${hueRotation + 180}deg)`}} d="M32.987,147.823C54.113,146.951,72.695,135.759,84.069,117.935C96.511,98.436,103.747,74.278,92.979,53.806C81.592,32.159,57.422,19.742,32.987,20.823C10.176,21.832,-7.01,38.985,-18.464,58.737C-29.966,78.571,-37.427,102.621,-25.96,122.476C-14.495,142.327,10.082,148.768,32.987,147.823" className="shape-float3"></path>
          <path style={{filter: `hue-rotate(${hueRotation + 270}deg)`}} d="M1150.855,542.691C1174.489,542.809,1195.498,529.245,1207.839,509.089C1220.808,487.907,1226.794,461.015,1213.832,439.829C1201.274,419.303,1174.918,415.9,1150.855,415.947C1126.902,415.994,1100.7,419.579,1088.302,440.074C1075.586,461.093,1082.064,487.547,1094.851,508.523C1107.05,528.536,1127.417,542.574,1150.855,542.691" className="triangle-float2"></path>   
          <path style={{filter: `hue-rotate(${hueRotation + 300}deg)`}} d="M1331.2482390506307 262.8777690141154L1385.776886228627 172.1268603154454 1295.0259775299571 117.59821313744897 1240.4973303519607 208.34912183611897z" className="triangle-float1"></path>     
        </g>
      </svg>
    </div>
  )
}

export default Background