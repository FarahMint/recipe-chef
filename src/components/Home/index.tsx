import React from 'react';

// COMPONENTS
import LandingPage from "./LandingPage";
import CategoryList from "../Category/CategoryList";


export default function Home(): JSX.Element {
    return (
      <>
        <LandingPage />
        <CategoryList />
      </>
    )
}
