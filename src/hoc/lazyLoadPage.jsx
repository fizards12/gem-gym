import React, { Suspense } from "react";
import Loading from "../components/loading";

function lazyLoadPage(importFunc) {
  const Page = React.lazy(importFunc);
  return (props) => (
    <Suspense fallback={<Loading />}>
      <Page {...props} />
    </Suspense>
  );
}

export default lazyLoadPage;
