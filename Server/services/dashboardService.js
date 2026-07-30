import Task from "../models/Task.js";
import { getCodeforcesData } from "./codeforcesService.js";
import { getLeetCodeData } from "./leetcodeService.js";

export async function getDashboardData(
    codeforcesHandle,
    leetcodeUsername,
    userId
) {

    console.log("Handle:", codeforcesHandle);
    console.log("Leetcode:", leetcodeUsername);
    console.log("UserId:", userId);

    let codeforces = {
        username: codeforcesHandle,
        rating: 0,
        rank: "Unavailable",
        maxRating: 0,
        maxRank: "Unavailable",
        solved: 0,
    };

    let leetcode = {
        username: leetcodeUsername,
        solved: 0,
        easy: 0,
        medium: 0,
        hard: 0,
        rating: 0,
    };

    // Fetch Codeforces Data
    try {
        console.log("Fetching Codeforces...");
        codeforces = await getCodeforcesData(codeforcesHandle);
        console.log("✅ Codeforces Loaded");
    } catch (error) {
        console.log("❌ Codeforces Error:", error.message);
    }

    // Fetch LeetCode Data
    try {
        console.log("Fetching LeetCode...");
        leetcode = await getLeetCodeData(leetcodeUsername);
        console.log("✅ LeetCode Loaded");
    } catch (error) {
        console.log("❌ LeetCode Error:", error.message);
    }

    // Task Statistics
    const totalTasks = await Task.countDocuments({
        user: userId,
    });

    const completedTasks = await Task.countDocuments({
        user: userId,
        completed: true,
    });

    const recentTasks = await Task.find({
        user: userId,
    });

    return {
        codeforces,
        leetcode,

        overall: {
            problemsSolved:
                (leetcode.solved || 0) +
                (codeforces.solved || 0),
        },

        tasks: {
            total: totalTasks,
            completed: completedTasks,
            pending: totalTasks - completedTasks,
            recent: recentTasks,
        },
    };
}










// import Task from "../models/Task.js";
// import { getCodeforcesData } from "./codeforcesService.js";
// import { getLeetCodeData } from "./leetcodeService.js";

// export async function getDashboardData(
//     codeforcesHandle,
//     leetcodeUsername,
//     userId
// ) {
//     console.log("Handle:", codeforcesHandle);
//     console.log("Leetcode:", leetcodeUsername);
//     console.log("UserId:", userId);

//     console.log("1");
//     const codeforces = await getCodeforcesData(codeforcesHandle);

//     console.log("2");
//     const leetcode = await getLeetCodeData(leetcodeUsername);

//     console.log("3");
//     const totalTasks = await Task.countDocuments({
//         user: userId,
//     });

//     console.log("4");
//     const completedTasks = await Task.countDocuments({
//         user: userId,
//         completed: true,
//     });

//     console.log("5");
//     const recentTasks = await Task.find({
//         user: userId,
//     });

//     console.log("6");

//     return {
//         codeforces,
//         leetcode,
    
//         overall: {
//             problemsSolved:
//                 (leetcode.solved || 0) +
//                 (codeforces.solved || 0),
//         },
    
//         tasks: {
//             total: totalTasks,
//             completed: completedTasks,
//             pending: totalTasks - completedTasks,
//             recent: recentTasks,
//         },
//     };

    // return {
    //     codeforces,
    //     leetcode,
    //     tasks: {
    //         total: totalTasks,
    //         completed: completedTasks,
    //         pending: totalTasks - completedTasks,
    //         recent: recentTasks,
    //     },
    //     notes: {
    //         total: 0,
    //     },
    // };
// }



// import { getCodeforcesData } from "./codeforcesService.js";
// import { getLeetCodeData } from "./leetcodeService.js";


// export async function getDashboardData(
//     codeforcesHandle,
//     leetcodeUsername
// ) {

//     const codeforces =
//         await getCodeforcesData(codeforcesHandle);

//     const leetcode =
//         await getLeetCodeData(leetcodeUsername);

//     return {
//         codeforces,
//         leetcode,
//     };
// }
