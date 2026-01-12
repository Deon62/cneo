import './BlockchainNetworkIllustration.css';

const BlockchainNetworkIllustration = ({ className = '' }) => {
  return (
    <div className={`blockchain-illustration ${className}`}>
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="blockchain-svg"
      >
        {/* Connection paths - showing community bonds */}
        <g className="connections" strokeLinecap="round" strokeLinejoin="round">
          <path d="M120 320 Q160 280 200 260" stroke="#2563EB" strokeOpacity="0.15" strokeWidth="2" />
          <path d="M280 320 Q240 280 200 260" stroke="#2563EB" strokeOpacity="0.15" strokeWidth="2" />
          <path d="M200 260 Q200 200 200 160" stroke="#2563EB" strokeOpacity="0.2" strokeWidth="2" />
          <path d="M200 160 Q160 140 140 100" stroke="#2563EB" strokeOpacity="0.15" strokeWidth="2" />
          <path d="M200 160 Q240 140 260 100" stroke="#2563EB" strokeOpacity="0.15" strokeWidth="2" />
          <path d="M140 100 Q180 70 200 50" stroke="#1E3A8A" strokeOpacity="0.12" strokeWidth="1.5" />
          <path d="M260 100 Q220 70 200 50" stroke="#1E3A8A" strokeOpacity="0.12" strokeWidth="1.5" />
          
          {/* Cross connections */}
          <path d="M120 320 Q200 300 280 320" stroke="#2563EB" strokeOpacity="0.08" strokeWidth="1.5" />
          <path d="M140 100 Q200 120 260 100" stroke="#1E3A8A" strokeOpacity="0.1" strokeWidth="1.5" />
        </g>

        {/* Base level - Youth starting point */}
        <g className="float-1">
          <circle cx="120" cy="320" r="22" fill="#1E3A8A" fillOpacity="0.85" />
          <circle cx="120" cy="308" r="8" fill="#EEE9DA" />
        </g>
        
        <g className="float-2">
          <circle cx="280" cy="320" r="22" fill="#1E3A8A" fillOpacity="0.85" />
          <circle cx="280" cy="308" r="8" fill="#EEE9DA" />
        </g>

        {/* Middle level - Growing */}
        <g className="float-3">
          <circle cx="200" cy="260" r="26" fill="#2563EB" fillOpacity="0.9" />
          <circle cx="200" cy="246" r="9" fill="#EEE9DA" />
        </g>

        {/* Upper level - Rising */}
        <g className="float-1">
          <circle cx="140" cy="100" r="20" fill="#2563EB" fillOpacity="0.85" />
          <circle cx="140" cy="88" r="7" fill="#EEE9DA" />
        </g>
        
        <g className="float-2">
          <circle cx="260" cy="100" r="20" fill="#2563EB" fillOpacity="0.85" />
          <circle cx="260" cy="88" r="7" fill="#EEE9DA" />
        </g>

        {/* Center rising figure */}
        <g className="float-3">
          <circle cx="200" cy="160" r="28" fill="#2563EB" />
          <circle cx="200" cy="145" r="10" fill="#EEE9DA" />
        </g>

        {/* Top - Elevated / Achievement */}
        <g className="pulse">
          <circle cx="200" cy="50" r="24" fill="#F59E0B" />
          <circle cx="200" cy="38" r="9" fill="#EEE9DA" />
        </g>

        {/* Rising arrows / growth indicators */}
        <g className="arrows">
          <path 
            d="M200 210 L200 190 M192 198 L200 190 L208 198" 
            stroke="#2563EB" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            strokeOpacity="0.4"
            className="float-2"
          />
          <path 
            d="M200 120 L200 100 M192 108 L200 100 L208 108" 
            stroke="#2563EB" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            strokeOpacity="0.4"
            className="float-1"
          />
          <path 
            d="M200 75 L200 62 M194 68 L200 62 L206 68" 
            stroke="#F59E0B" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            strokeOpacity="0.5"
            className="float-3"
          />
        </g>

        {/* Subtle sparkles around top figure */}
        <g className="sparkles">
          <circle cx="170" cy="40" r="3" fill="#F59E0B" fillOpacity="0.4" className="float-1" />
          <circle cx="230" cy="45" r="2.5" fill="#F59E0B" fillOpacity="0.35" className="float-2" />
          <circle cx="180" cy="65" r="2" fill="#F59E0B" fillOpacity="0.3" className="float-3" />
          <circle cx="225" cy="30" r="2" fill="#F59E0B" fillOpacity="0.3" className="float-1" />
        </g>
      </svg>
    </div>
  );
};

export default BlockchainNetworkIllustration;
