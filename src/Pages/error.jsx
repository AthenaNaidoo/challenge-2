//error message page 

import { Link } from "react-router-dom";

export function Error () {
  return (
    <main>
        <div>
          <h1>404 Error</h1>
          <p>page not found...</p>
          <Link to='/'>Go back to Homepage</Link>
        </div>
    </main>
  );
};
