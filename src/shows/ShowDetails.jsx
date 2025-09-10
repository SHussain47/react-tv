import "./shows.css";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";
import { useState } from "react";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  if (!show) {
    return (
      <section>
        <h2>Select a Show</h2>
      </section>
    );
  }

  return (
    <section className="show-details">
      <div className="episode-list">
        <EpisodeList
          name={show.name}
          episodes={show.episodes}
          selectedEpisode={selectedEpisode}
          setSelectedEpisode={setSelectedEpisode}
        />
      </div>
      <div>
        <EpisodeDetails episode={selectedEpisode} />
      </div>
    </section>
  );
}
