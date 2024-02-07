import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = props => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="61" y="268" rx="0" ry="0" width="2" height="1" />
    <rect x="109" y="331" rx="0" ry="0" width="1" height="5" />
    <rect x="206" y="337" rx="0" ry="0" width="9" height="2" />
    <rect x="203" y="337" rx="0" ry="0" width="3" height="0" />
    <rect x="198" y="332" rx="0" ry="0" width="4" height="4" />
    <circle cx="132" cy="105" r="102" />
    <rect x="-1" y="221" rx="11" ry="11" width="280" height="24" />
    <rect x="2" y="261" rx="10" ry="10" width="280" height="85" />
    <rect x="2" y="362" rx="9" ry="9" width="89" height="27" />
    <rect x="125" y="356" rx="18" ry="18" width="155" height="40" />
  </ContentLoader>
);

export default Skeleton;
