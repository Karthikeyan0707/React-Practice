import {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  // useRemoveAlbumMutation,
} from "../store/indexStore";
import Skeleton from "./Skeleton";
// import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import AlbumsListItems from "./AlbumsListItems";

function AlbumsList({ user }) {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  // useFetchAlbumsQuery(user);
  // const results= useFetchAlbumsQuery(user);
  // console.log(data, error, isLoading);
  // console.log(results);
  const [addAlbum, results] = useAddAlbumMutation();
  // console.log(results);

  // const [removeAlbum, removeAlbumResults] = useRemoveAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;

  if (isFetching) {
    content = <Skeleton className="h-10 w-full" times={3} />;
  } else if (error) {
    content = <div>Error loading albums.</div>;
  } else {
    content = data.map((album) => {
      return <AlbumsListItems key={album.id} album={album} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
        <Button loading={results.isLoading} onClick={handleAddAlbum}>
          + Add Albums
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;
