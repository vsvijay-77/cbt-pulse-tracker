import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { toast } from 'sonner';

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
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isMapInitialized, setIsMapInitialized] = useState(false);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) {
      toast.error('Please enter your Mapbox token');
      return;
    }

    try {
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [78.9629, 20.5937], // Center of India
        zoom: 4,
      });

      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      map.current.on('load', () => {
        // Add markers for each training location
        locations.forEach((location) => {
          const el = document.createElement('div');
          el.className = 'marker';
          el.style.width = '30px';
          el.style.height = '30px';
          el.style.borderRadius = '50%';
          el.style.backgroundColor = 'hsl(var(--primary))';
          el.style.border = '3px solid white';
          el.style.cursor = 'pointer';
          el.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';

          const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<div style="padding: 8px;">
              <h4 style="font-weight: bold; margin-bottom: 4px;">${location.state}</h4>
              <p style="font-size: 12px; margin: 2px 0;">${location.trainings} trainings</p>
              <p style="font-size: 12px; margin: 2px 0;">${location.participants} participants</p>
            </div>`
          );

          new mapboxgl.Marker(el)
            .setLngLat([location.coords.lng, location.coords.lat])
            .setPopup(popup)
            .addTo(map.current!);
        });

        toast.success('Map loaded successfully!');
      });

      setIsMapInitialized(true);
    } catch (error) {
      toast.error('Failed to initialize map. Please check your token.');
      console.error(error);
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (!isMapInitialized) {
    return (
      <div className="flex flex-col gap-4 p-8 bg-card rounded-lg border border-border">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Setup Mapbox</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Enter your Mapbox public token to view the interactive map.{' '}
            <a 
              href="https://mapbox.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Get your token here
            </a>
          </p>
        </div>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="pk.eyJ1IjoiZXhhbXBsZS..."
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="flex-1"
          />
          <Button onClick={initializeMap}>Load Map</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[500px]">
      <div ref={mapContainer} className="absolute inset-0 rounded-lg" />
    </div>
  );
};

export default Map;
