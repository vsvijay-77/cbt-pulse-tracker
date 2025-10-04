import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface TrainingLocation {
  state: string;
  district: string;
  address: string;
  trainings: number;
  participants: number;
  lastTraining: string;
  trainingTypes: string[];
  partnerOrg: string;
  coords: { lat: number; lng: number };
}

interface MapProps {
  locations: TrainingLocation[];
}

const Map = ({ locations }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Initialize map centered on India
    map.current = L.map(mapContainer.current).setView([20.5937, 78.9629], 5);

    // Add OpenStreetMap tiles (free, no token required)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map.current);

    // Custom marker icon
    const createCustomIcon = (size: number) => {
      return L.divIcon({
        className: 'custom-marker',
        html: `
          <div style="
            width: ${size}px;
            height: ${size}px;
            background: hsl(215 85% 45%);
            border: 3px solid white;
            border-radius: 50%;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            animation: pulse 2s infinite;
          "></div>
        `,
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
      });
    };

    // Add markers for each training location
    locations.forEach((location) => {
      const markerSize = Math.min(40, 20 + location.trainings / 3);
      
      const marker = L.marker([location.coords.lat, location.coords.lng], {
        icon: createCustomIcon(markerSize)
      }).addTo(map.current!);

      // Create popup content
      const trainingTypesList = location.trainingTypes.map(type => 
        `<span style="display: inline-block; background: hsl(215 85% 95%); color: hsl(215 85% 35%); padding: 2px 8px; border-radius: 4px; font-size: 10px; margin: 2px;">${type}</span>`
      ).join('');
      
      const popupContent = `
        <div style="font-family: system-ui; padding: 12px; min-width: 280px;">
          <div style="border-bottom: 2px solid hsl(215 85% 45%); padding-bottom: 8px; margin-bottom: 12px;">
            <h4 style="font-weight: 700; font-size: 16px; margin: 0 0 4px 0; color: hsl(215 85% 25%);">${location.state}</h4>
            <p style="font-size: 12px; color: hsl(215 15% 45%); margin: 0; font-weight: 500;">${location.district} District</p>
          </div>
          
          <div style="display: flex; flex-direction: column; gap: 10px; font-size: 12px;">
            <div>
              <div style="display: flex; align-items: start; gap: 8px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="hsl(215 85% 45%)" stroke-width="2" style="margin-top: 2px; flex-shrink: 0;">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span style="color: hsl(215 15% 45%); line-height: 1.4;">${location.address}</span>
              </div>
            </div>
            
            <div style="background: hsl(215 85% 97%); padding: 8px; border-radius: 6px; border-left: 3px solid hsl(215 85% 45%);">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="hsl(215 85% 45%)" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span style="font-weight: 600; color: hsl(215 85% 25%);"><strong>${location.trainings}</strong> Trainings Conducted</span>
              </div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="hsl(185 65% 45%)" stroke-width="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span style="font-weight: 600; color: hsl(185 65% 35%);"><strong>${location.participants}</strong> Participants Trained</span>
              </div>
            </div>
            
            <div>
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="hsl(145 65% 45%)" stroke-width="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span style="color: hsl(215 15% 45%);"><strong>Last Training:</strong> ${location.lastTraining}</span>
              </div>
            </div>
            
            <div>
              <div style="display: flex; align-items: start; gap: 8px; margin-bottom: 6px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="hsl(25 95% 55%)" stroke-width="2" style="margin-top: 2px; flex-shrink: 0;">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                <div style="flex: 1;">
                  <span style="color: hsl(215 15% 45%); font-weight: 600; display: block; margin-bottom: 4px;">Training Types:</span>
                  <div style="display: flex; flex-wrap: wrap; gap: 4px;">${trainingTypesList}</div>
                </div>
              </div>
            </div>
            
            <div style="background: hsl(185 65% 97%); padding: 8px; border-radius: 6px; margin-top: 4px;">
              <div style="display: flex; align-items: start; gap: 8px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="hsl(185 65% 45%)" stroke-width="2" style="margin-top: 2px; flex-shrink: 0;">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <div style="flex: 1;">
                  <span style="color: hsl(215 15% 45%); font-weight: 600; font-size: 11px;">Partner Organization:</span>
                  <p style="margin: 2px 0 0 0; color: hsl(185 65% 35%); font-weight: 500; line-height: 1.3;">${location.partnerOrg}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      marker.bindPopup(popupContent, {
        maxWidth: 350,
        className: 'custom-popup'
      });
    });

    // Add custom styles for animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse {
        0%, 100% {
          transform: scale(1);
          opacity: 1;
        }
        50% {
          transform: scale(1.1);
          opacity: 0.8;
        }
      }
      .custom-marker {
        background: transparent !important;
        border: none !important;
      }
      .custom-popup .leaflet-popup-content-wrapper {
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      }
      .custom-popup .leaflet-popup-tip {
        background: white;
      }
    `;
    document.head.appendChild(style);

    // Cleanup
    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, [locations]);

  return (
    <div className="relative w-full h-full min-h-[500px] rounded-lg overflow-hidden shadow-card">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute top-4 left-4 bg-card/95 backdrop-blur px-4 py-2 rounded-lg shadow-lg border border-border z-[1000]">
        <p className="text-sm font-semibold text-foreground">India Training Coverage Map</p>
        <p className="text-xs text-muted-foreground">Click markers for details</p>
      </div>
    </div>
  );
};

export default Map;