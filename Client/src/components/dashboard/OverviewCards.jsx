import StatCard from "./StatCard";

function OverviewCards({ dashboardData }) {
    if (!dashboardData) return null;

    const cards = [
        {
            title: "LeetCode",
            icon: "💻",
            primaryValue: dashboardData.leetcode.solved,
            primaryLabel: "Problems Solved",
            secondaryValue: dashboardData.leetcode.rating || "N/A",
            secondaryLabel: "Contest Rating",
        },

        {
            title: "Codeforces",
            icon: "🏆",
            primaryValue: dashboardData.codeforces.solved,
            primaryLabel: "Problems Solved",
            secondaryValue: dashboardData.codeforces.rating,
            secondaryLabel: "Current Rating",
        },

        {
            title: "Overall",
            icon: "🎯",
            primaryValue: dashboardData.overall.problemsSolved,
            primaryLabel: "Total Problems Solved",
        },

        {
            title: "Tasks",
            icon: "✅",
            primaryValue: dashboardData.tasks.total,
            primaryLabel: "Total Tasks",
            secondaryValue: dashboardData.tasks.pending,
            secondaryLabel: "Pending Tasks",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
            {cards.map((card) => (
                <StatCard
                    key={card.title}
                    {...card}
                />
            ))}
        </div>
    );
}

export default OverviewCards;






// import StatCard from "./StatCard";

// function OverviewCards({ dashboardData }) {

//     if (!dashboardData) return null;

//     const cards = [
//         {
//             title: "LeetCode",
//             value: dashboardData.leetcode.solved,
//             label: "Problems Solved",
//             icon: "💻",
//         },

//         {
//             title: "Codeforces",
//             value: dashboardData.codeforces.rating,
//             label: "Current Rating",
//             icon: "🏆",
//         },

//         {
//             title: "Tasks",
//             value: dashboardData.tasks?.total || 0,
//             label: "Total Tasks",
//             icon: "✅",
//         },

//         {
//             title: "Notes",
//             value: dashboardData.notes?.total || 0,
//             label: "Total Notes",
//             icon: "📝",
//         },
//     ];

//     return (
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">

//             {cards.map((card) => (

//                 <StatCard
//                     key={card.title}
//                     title={card.title}
//                     value={card.value}
//                     label={card.label}
//                     icon={card.icon}
//                 />

//             ))}

//         </div>
//     );
// }

// export default OverviewCards;