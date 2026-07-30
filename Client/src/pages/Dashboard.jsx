import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import WelcomeCard from "../components/dashboard/WelcomeCard";
// import StatsSection from "../components/dashboard/StatsSection";
import OverviewCards from "../components/dashboard/OverviewCards";
import { fetchDashboard } from "../services/dashboardService";

function Dashboard() {
    const [dashboardData, setDashboardData] = useState(null);
    const [loading, setLoading] = useState(true);

    // "Inside useEffect, we define an async function called 
    // loadDashboard(), and then we explicitly invoke it using 
    // loadDashboard(). Inside that function, we call fetchDashboard(), 
    // wait for the response, update the state, and React automatically 
    // re-renders the component."

    useEffect(() => {
        async function loadDashboard() {
            try {
                const data = await fetchDashboard();
                setDashboardData(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        loadDashboard();
    }, []);

    return (
        <DashboardLayout>
            <WelcomeCard name="Japman" />

            {loading ? (
                <p>Loading Dashboard...</p>
            ) : (
                // <StatsSection dashboardData={dashboardData} />
                <OverviewCards
                    dashboardData={dashboardData}
                />
            )}
        </DashboardLayout>
    );
}

export default Dashboard;

// import DashboardLayout from "../layouts/DashboardLayout";
// import WelcomeCard from "../components/dashboard/WelcomeCard"
// import StatsSection from "../components/dashboard/StatsSection";

// function Dashboard() {
//     return (
//       <DashboardLayout>

//         {/* <h1>Dashboard</h1>

//         <p>Welcome to DevBoard🚀</p> */}

//         <WelcomeCard name = "Japman"/>

//         <StatsSection />


//       </DashboardLayout>
//     );
//   }
  
//   export default Dashboard;