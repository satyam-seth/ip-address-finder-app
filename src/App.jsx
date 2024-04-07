import { useState, useEffect } from "react";
import Map from "./components/Map";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  console.log(data)

  return (
    <>
      <h1>IP Address Finder</h1>
      {data === null ? (
          <p>Loading...</p>
        ) :
        <div>
            <table border={1}>
              <tbody>
                {Object.keys(data).map((key, index) => (
                  <tr key={index}>
                    <td>{key}</td>
                    <td>{data[key]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          <Map lat={data.latitude} lng={data.longitude} />
        </div>
      }
    </>
  );
}

export default App;
