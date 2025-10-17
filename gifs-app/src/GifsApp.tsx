import CustomHeader from "./components/CustomHeader";
import SearchBar from "./components/SearchBar";
import PreviousSearches from "./components/PreviousSearches";
import GifsList from "./components/GifsList";
import useGifs from "./hooks/useGifs";

const GifsApp = () => {
  const { gifs, previousSearches, handleTermClicked, handleSearch } = useGifs();

  return (
    <>
      <CustomHeader
        title="Gif's Searcher"
        description="Discover and Share the perfect gif"
      />
      <SearchBar placeholder="Search anything" onClickSearch={handleSearch} />
      <PreviousSearches
        title="Previous Searches"
        data={previousSearches}
        onLabelClicked={handleTermClicked}
      />

      <GifsList gifs={gifs} />
    </>
  );
};

export default GifsApp;
