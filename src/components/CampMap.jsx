import { useState } from 'react'

const CampMap = () => {
  const [selectedArea, setSelectedArea] = useState(null)

  const mapAreas = [
    {
      id: 'mcallister',
      name: 'McAllister Scouting Center',
      description: 'Main building with meeting rooms, commercial kitchen, and training facilities',
      coordinates: { top: '25%', left: '40%' },
      link: '/facilities/mcallister'
    },
    {
      id: 'pool',
      name: 'Swimming Pool',
      description: 'Olympic-sized swimming pool with lifeguard facilities',
      coordinates: { top: '35%', left: '30%' },
      link: '/facilities/recreational'
    },
    {
      id: 'cabins',
      name: 'Cabins Area',
      description: 'Tecumseh Lodge, Shawnee Cabin, and Sioux Cabin',
      coordinates: { top: '45%', left: '60%' },
      link: '/facilities/cabins'
    },
    {
      id: 'campsites',
      name: 'Campsites 1-5',
      description: 'Five campsites with shelters, water, and sanitation',
      coordinates: { top: '60%', left: '35%' },
      link: '/facilities/campsites'
    },
    {
      id: 'shelters',
      name: 'Shelter Houses',
      description: 'Six shelter houses for groups and events',
      coordinates: { top: '50%', left: '20%' },
      link: '/facilities/shelters'
    },
    {
      id: 'creek',
      name: 'Wildcat Creek',
      description: 'Canoeing, fishing, and nature activities',
      coordinates: { top: '75%', left: '50%' },
      link: '/facilities/recreational'
    },
    {
      id: 'trails',
      name: 'Nature Trails',
      description: 'Hiking trails throughout the 125-acre property',
      coordinates: { top: '40%', left: '70%' },
      link: '/facilities/recreational'
    },
    {
      id: 'chapel',
      name: 'Outdoor Chapel',
      description: 'Peaceful outdoor worship space',
      coordinates: { top: '55%', left: '75%' },
      link: '/facilities/chapel'
    }
  ]

  return (
    <div className="camp-map">
      <div className="camp-map__container">
        <div className="camp-map__image-container">
          {/* SVG Map Background */}
          <svg 
            className="camp-map__svg" 
            viewBox="0 0 800 600" 
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Interactive map of Franklin L. Cary Camp"
          >
            {/* Background terrain */}
            <defs>
              <pattern id="forest" patternUnits="userSpaceOnUse" width="20" height="20">
                <rect width="20" height="20" fill="#e8f5e8"/>
                <circle cx="5" cy="5" r="2" fill="#4a7c59"/>
                <circle cx="15" cy="15" r="2" fill="#4a7c59"/>
                <circle cx="10" cy="12" r="1.5" fill="#5d8b6a"/>
              </pattern>
              <pattern id="water" patternUnits="userSpaceOnUse" width="30" height="10">
                <rect width="30" height="10" fill="#a8d5f2"/>
                <path d="M0,5 Q7.5,2 15,5 Q22.5,8 30,5" stroke="#7db8e8" strokeWidth="1" fill="none"/>
              </pattern>
            </defs>
            
            {/* Forest background */}
            <rect width="800" height="600" fill="url(#forest)"/>
            
            {/* Wildcat Creek */}
            <path 
              d="M50 450 Q200 480 350 460 Q500 440 650 470 Q750 490 800 500"
              stroke="url(#water)"
              strokeWidth="40"
              fill="none"
            />
            
            {/* Roads */}
            <path d="M0 200 L400 180 L800 200" stroke="#8b8680" strokeWidth="8" fill="none"/>
            <path d="M350 0 L380 180" stroke="#8b8680" strokeWidth="6" fill="none"/>
            
            {/* Buildings - McAllister Center */}
            <rect x="300" y="140" width="80" height="60" fill="#ce1126" stroke="#003f87" strokeWidth="2" rx="4"/>
            <text x="340" y="175" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">McAllister</text>
            
            {/* Pool */}
            <ellipse cx="240" cy="200" rx="30" ry="20" fill="#4a9fff" stroke="#003f87" strokeWidth="2"/>
            <text x="240" y="205" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Pool</text>
            
            {/* Cabins */}
            <rect x="450" y="250" width="25" height="20" fill="#8b4513" stroke="#003f87" strokeWidth="1" rx="2"/>
            <rect x="480" y="250" width="25" height="20" fill="#8b4513" stroke="#003f87" strokeWidth="1" rx="2"/>
            <rect x="465" y="275" width="25" height="20" fill="#8b4513" stroke="#003f87" strokeWidth="1" rx="2"/>
            
            {/* Shelters */}
            <polygon points="150,280 170,280 160,300" fill="#654321" stroke="#003f87" strokeWidth="1"/>
            <polygon points="180,290 200,290 190,310" fill="#654321" stroke="#003f87" strokeWidth="1"/>
            <polygon points="120,320 140,320 130,340" fill="#654321" stroke="#003f87" strokeWidth="1"/>
            
            {/* Chapel */}
            <polygon points="580,320 600,320 590,300 580,320" fill="#8b4513" stroke="#003f87" strokeWidth="2"/>
            <rect x="585" y="325" width="10" height="15" fill="#8b4513"/>
            
            {/* Trails */}
            <path d="M400 250 Q450 280 500 320 Q550 350 600 380" stroke="#8b8680" strokeWidth="3" fill="none" strokeDasharray="5,5"/>
            <path d="M200 300 Q300 330 400 340" stroke="#8b8680" strokeWidth="3" fill="none" strokeDasharray="5,5"/>
          </svg>
          
          {/* Interactive Markers */}
          {mapAreas.map((area) => (
            <button
              key={area.id}
              className={`camp-map__marker ${selectedArea === area.id ? 'camp-map__marker--active' : ''}`}
              style={{
                position: 'absolute',
                top: area.coordinates.top,
                left: area.coordinates.left,
                transform: 'translate(-50%, -50%)'
              }}
              onClick={() => setSelectedArea(selectedArea === area.id ? null : area.id)}
              aria-label={`View information about ${area.name}`}
            >
              <div className="camp-map__marker-dot"></div>
              <div className="camp-map__marker-pulse"></div>
            </button>
          ))}
        </div>
        
        {/* Map Legend */}
        <div className="camp-map__legend">
          <h4>Camp Features</h4>
          <div className="camp-map__legend-items">
            <div className="camp-map__legend-item">
              <div className="camp-map__legend-color" style={{backgroundColor: '#ce1126'}}></div>
              <span>Main Buildings</span>
            </div>
            <div className="camp-map__legend-item">
              <div className="camp-map__legend-color" style={{backgroundColor: '#8b4513'}}></div>
              <span>Cabins & Shelters</span>
            </div>
            <div className="camp-map__legend-item">
              <div className="camp-map__legend-color" style={{backgroundColor: '#4a9fff'}}></div>
              <span>Water Features</span>
            </div>
            <div className="camp-map__legend-item">
              <div className="camp-map__legend-line"></div>
              <span>Trails</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Information Panel */}
      {selectedArea && (
        <div className="camp-map__info">
          {(() => {
            const area = mapAreas.find(a => a.id === selectedArea)
            return (
              <div className="camp-map__info-content">
                <h3>{area.name}</h3>
                <p>{area.description}</p>
                <a href={area.link} className="camp-map__info-link">
                  Learn More →
                </a>
              </div>
            )
          })()}
        </div>
      )}
    </div>
  )
}

export default CampMap