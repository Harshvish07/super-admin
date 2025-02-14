// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Sidebar from "./components/Side-bar";
// import Dashboard from "./components/Dashboard";
// import SearchBar from "./components/Search-Bar";

// export default function App() {
//   return (
//     <Router>
//       <div className="flex min-h-screen  bg-gray-100">
//         <Sidebar />

//         <main className="flex-1 pt-1">
//           <SearchBar />
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Side-bar";
import Dashboard from "./components/Dashboard";
import SearchBar from "./components/Search-Bar";
import EmployerPage from "./components/EmployerPage";
import CandidatePage from "./components/CandidatePage";
import JobsPage from "./components/JobsPage";
import RevenuePage from "./components/RevenuePage";

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 pt-1">
          <SearchBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/view-employer" element={<EmployerPage />} />
            <Route path="/view-candidate" element={<CandidatePage />} />
            <Route path="/view-jobs-posted" element={<JobsPage />} />
            <Route path="/view-revenue" element={<RevenuePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
