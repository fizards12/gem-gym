import React, { Suspense } from "react";
import Loading from "../components/loading";

function lazyLoadPage(pageName) {
  const Page = React.lazy(() => import(`../pages/${pageName}.jsx`));
  return (props) => (
    <Suspense fallback={<Loading />}>
      <Page {...props} />
    </Suspense>
  );
}

export default lazyLoadPage;
