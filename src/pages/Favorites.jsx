import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoriteContext from "../store/favorite-context";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoriteContext);

  const content =
    favoritesCtx.totalFavorites === 0 ? (
      <p>You got no favorites yet. Start adding some?</p>
    ) : (
      <MeetupList meetups={favoritesCtx.favorites} />
    );

  if (favoritesCtx.totalFavorites === 0) {
  }

  return (
    <section>
      <h1>My favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
