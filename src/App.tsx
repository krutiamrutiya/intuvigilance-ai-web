import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import RouteConfig from "@routes/index";
import { CustomLoader } from "@components/index";

function App() {
  return (
    <Suspense fallback={<CustomLoader className="custom-loader" />}>
      <Toaster position="top-center" reverseOrder={false} />
      <RouteConfig />
    </Suspense>
  );
}

export default App;
