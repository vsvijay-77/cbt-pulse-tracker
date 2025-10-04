import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface TrainingLocation {
  state: string;
  trainings: number;
  participants: number;
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
      const popupContent = `
        <div style="font-family: system-ui; padding: 8px;">
          <h4 style="font-weight: 600; font-size: 14px; margin: 0 0 8px 0; color: hsl(215 85% 25%);">${location.state}</h4>
          <div style="display: flex; flex-direction: column; gap: 4px; font-size: 12px; color: hsl(215 15% 45%);">
            <div style="display: flex; align-items: center; gap: 6px;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="hsl(215 85% 45%)" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span><strong>${location.trainings}</strong> Trainings</span>
            </div>
            <div style="display: flex; align-items: center; gap: 6px;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="hsl(185 65% 45%)" stroke-width="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span><strong>${location.participants}</strong> Participants</span>
            </div>
          </div>
        </div>
      `;

      marker.bindPopup(popupContent, {
        maxWidth: 250,
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