import React, { Suspense } from "react";
import Loading from "../components/loading";

function lazyLoadPage(pagePath) {
  const Page = React.lazy(() => import(`${pagePath}`));
  return (props) => (
    <Suspense fallback={<Loading />}>
      <Page {...props} />
    </Suspense>
  );
}

export default lazyLoadPage;
