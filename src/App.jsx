import { useContext } from "react";
import Display from "./components/Display.jsx";
import Player from "./components/Player.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { PlayerContext } from "./context/PlayerContext.jsx";

export default function App() {

  const {audioRef,track} = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex"> {/*height -90% to have space for the player to fit */}
        <Sidebar />
        <Display/>
      </div>
      <Player/>
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
}

