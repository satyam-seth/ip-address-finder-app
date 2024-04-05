import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h1>IP Address Finder</h1>
      <div>
        {data === null ? (
          <p>Loading...</p>
        ) : (
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
        )}
      </div>
    </>
  );
}

export default App;
