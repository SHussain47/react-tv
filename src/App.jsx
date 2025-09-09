import { useState } from "react";
import { data } from "./shows/data";
import ShowSelection from "./shows/ShowSelection";
import ShowDetails from "./shows/ShowDetails";

export default function App() {
  const [shows, setShows] = useState(data);
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection
          shows={shows}
          selectedShow={selectedShow}
          setSelectedShow={setSelectedShow}
        />
      </header>
      
      <main>
        {/* <ShowDetails /> */}
      </main>
    </>
  );
}
