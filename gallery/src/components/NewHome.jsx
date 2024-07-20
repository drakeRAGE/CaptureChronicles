import React from 'react';

const PageHotspot = ({ hotspot, lists, mobileBackgroundImage, desktopBackgroundImage }) => (
  <div className="page-elem page-hotspot" id="app">
    <header className="site-header site-header--light" id="site-header">
      <div className="site-header__inner">
        <div className="site-header__logo">
          <a href="/" className="site-header__logo-link">
            <img src="/img/logo/small.png" alt="ShotHotspot logo" width="120" height="32" />
          </a>
        </div>
        <nav className="site-header__nav">
          <ul className="site-header__nav-list">
            <li className="site-header__nav-item">
              <a href="/explore" className="site-header__nav-link">Explore</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <page-hotspot hotspot={hotspot} lists={lists} />
    <modal />
  </div>
);

const pageData = {
  mobileImage: "https://farm6.staticflickr.com/5182/5841208094_7a8e1293c9_z.jpg",
  desktopImage: "https://farm6.staticflickr.com/5182/5841208094_7a8e1293c9_b.jpg",
  hotspot: {
    id: "3299",
    name: "Grand Prismatic Spring",
    location: "Yellowstone National Park, WY 82190, USA",
    author: {
      display_name: "Photo-Locations",
      slug: "Photo-Locations",
      img_url: ""
    },
    photos: [
      // ...
    ],
    types: [42,1],
    tags: "prismatic, geyser, grand, yellowstone, spring, wyoming, midway, excelsior, yellowstonenationalpark, basin, details, nationalpark, steam, national, park, grandprismaticspring, sunset, hot, landscape, shadow, thermal",
    description: "",
    slug: "yellowstone-national-park-wy-82190-usa/grand-prismatic-spring",
    radius: "146",
    lng: "-110.838182",
    lat: "44.525785"
  },
  lists: [
    // ...
  ]
};

const NewHome = () => (
  <PageHotspot {...pageData} />
);

export default NewHome;