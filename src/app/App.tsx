import {Routes, Route} from "react-router-dom";
import {HomePage} from "../pages/home/ui/HomePage.tsx";
import {MoviesShowsPage} from "../pages/movies-shows/ui/MoviesShowsPage.tsx";
import {SupportPage} from "../pages/support/ui/SupportPage.tsx";
import {SubscriptionsPage} from "../pages/subscriptions/ui/SubscriptionsPage.tsx";
import {MovieDetailsPage} from "../pages/movie-details/ui/MovieDetailsPage.tsx";
import {ShowDetailsPage} from "../pages/show-details/ui/ShowDetailsPage.tsx";
import {routes} from "../shared/constants/routes.ts";

export function App() {
  return (
    <Routes>
      <Route path={routes.home} element={<HomePage />} />
      <Route path={routes.moviesShows} element={<MoviesShowsPage />} />
      <Route path={routes.support} element={<SupportPage />} />
      <Route path={routes.subscriptions} element={<SubscriptionsPage />} />
      <Route path={routes.movieDetails} element={<MovieDetailsPage />}/>
      <Route path={routes.showDetails} element={<ShowDetailsPage />} />
    </Routes>
  )
}
