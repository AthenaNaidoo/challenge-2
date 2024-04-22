import { Link } from "react-router-dom";

export function Finished () {
  return (
    <main>
        <div>
          <h1>Thank you for using my App</h1>
          <p>your purchase has be completed!!!</p>
          <Link to='/'>Go back to Homepage</Link>
        </div>
    </main>
  );
};