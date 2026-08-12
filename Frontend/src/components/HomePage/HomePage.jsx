import Content from "./Content";
import Gallery3D from "./Gallery3D";
import HistoryHome from "./HistoryHome";
import Home from "./Home";

function HomePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f3d79e] via-[#f3d8ad] to-red-300 dark:bg-black dark:bg-none">
      <Home />
      <Gallery3D />
      <HistoryHome />
    </div>
  );
}

export default HomePage;