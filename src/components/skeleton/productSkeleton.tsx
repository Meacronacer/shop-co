import ContentLoader from "react-content-loader";

const ProductSkeleton = () => (
  <ContentLoader
    speed={2}
    width="100%"
    height="100%"
    viewBox="0 0 295 413"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="265" rx="0" ry="0" width="280" height="28" />
    <rect x="0" y="311" rx="0" ry="0" width="295" height="22" />
    <rect x="0" y="380" rx="0" ry="0" width="54" height="36" />
    <rect x="70" y="380" rx="0" ry="0" width="54" height="36" />
    <rect x="0" y="0" rx="0" ry="0" width="295" height="295" />
    <rect x="3" y="345" rx="0" ry="0" width="295" height="22" />
    <rect x="140" y="380" rx="17" ry="17" width="54" height="36" />
  </ContentLoader>
);

export default ProductSkeleton;
