import About from "../components/About";
import { Suspense } from "react";

const LazyLoadingSuspense = () => {
  return (
    <div>
      <Suspense fallback={<h1>Loading with...</h1>}>
        <About />
      </Suspense>
      <h2>This is lazyLoading Componet with Suspense</h2>
    </div>
  );
};

export default LazyLoadingSuspense;
