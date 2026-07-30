import StatCard from "./StatCard";

function StatsSection({ dashboardData }) {

    if (!dashboardData) {
        return <h2>Loading Dashboard...</h2>;
    }

    const stats = [
        {
            title: "🏆 Codeforces",
            stats: [
                {
                    label: "Username",
                    value: dashboardData.codeforces.username,
                },
                {
                    label: "Rating",
                    value: dashboardData.codeforces.rating,
                },
                {
                    label: "Rank",
                    value: dashboardData.codeforces.rank,
                },
                {
                    label: "Max Rating",
                    value: dashboardData.codeforces.maxRating,
                },
                {
                    label: "Max Rank",
                    value: dashboardData.codeforces.maxRank,
                },
            ],
        },

        {
            title: "💻 LeetCode",
            stats: [
                {
                    label: "Username",
                    value: dashboardData.leetcode.username,
                },
                {
                    label: "Solved",
                    value: dashboardData.leetcode.solved,
                },
                {
                    label: "Easy",
                    value: dashboardData.leetcode.easy,
                },
                {
                    label: "Medium",
                    value: dashboardData.leetcode.medium,
                },
                {
                    label: "Hard",
                    value: dashboardData.leetcode.hard,
                },
            ],
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
            {stats.map((stat) => (
                <StatCard
                    key={stat.title}
                    title={stat.title}
                    stats={stat.stats}
                />
            ))}
        </div>
    );
}

export default StatsSection;

// import StatCard from "./StatCard";

// function StatsSection() {
//     const stats = [
//         {
//             title: "LeetCode",
//             primaryValue: "320",
//             primaryLabel: "Problems Solved",
//         },
//         {
//             title: "GitHub",
//             primaryValue: "25",
//             primaryLabel: "Repositories",
//         },
//         {
//             title: "Codeforces",
//             primaryValue: "1520",
//             primaryLabel: "Rating",
//         },
//     ];
//     return (
//         <div>
//             {stats.map((stat) => (

//                 <StatCard
//                     key = {stat.title}
//                     title={stat.title}
//                     primaryValue={stat.primaryValue}
//                     primaryLabel={stat.primaryLabel}
//                 />

//             ))}

            
//         </div>
//     );
// }

// export default StatsSection;