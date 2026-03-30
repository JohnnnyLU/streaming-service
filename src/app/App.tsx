import {Routes, Route, Navigate} from "react-router-dom";
import {HomePage} from "../pages/home";
import {MoviesShowsPage} from "../pages/movies-shows";
import {SupportPage} from "../pages/support";
import {SubscriptionsPage} from "../pages/subscriptions";
import {MovieDetailsPage} from "../pages/movie-details";
import {ShowDetailsPage} from "../pages/show-details";
import {routes} from "../shared/constants/routes.ts";
import {MainLayout} from "./layouts/MainLayout.tsx";

export function App() {
  return (
    <Routes>
      <Route path={routes.root} element={<MainLayout />}>
        <Route index element={<Navigate to={routes.home} replace />} />

        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.moviesShows} element={<MoviesShowsPage />} />
        <Route path={routes.support} element={<SupportPage />} />
        <Route path={routes.subscriptions} element={<SubscriptionsPage />} />
        <Route path={routes.movieDetails} element={<MovieDetailsPage />} />
        <Route path={routes.showDetails} element={<ShowDetailsPage />} />
      </Route>
    </Routes>
  )
}
