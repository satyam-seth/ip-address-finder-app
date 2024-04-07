import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const Map = (props) => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'YOUR_API_KEY',
        libraries: ['places']
    });
    
    const mapContainerStyle = {
      width: '100vw',
      height: '100vh',
    };
    
      if (loadError) {
        return <div>Error loading maps</div>;
      }
    
      if (!isLoaded) {
        return <div>Loading maps</div>;
      }

      return (
        <div>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={props}
          >
            <Marker position={props} />
          </GoogleMap>
        </div>
      );
}

export default Map;