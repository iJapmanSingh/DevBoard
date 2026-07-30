import axios from "axios";

export async function getLeetCodeData(username) {
    try {

        const response = await axios.get(
            `https://alfa-leetcode-api.onrender.com/${username}/solved`
        );

        return {
            username,
            solved: response.data.solvedProblem || 0,
            easy: response.data.easySolved || 0,
            medium: response.data.mediumSolved || 0,
            hard: response.data.hardSolved || 0,
            rating: response.data.contestRating || 0,
        };

    } catch (error) {

        console.log(
            "LeetCode API Error:",
            error.response?.status,
            error.response?.data
        );

        return {
            username,
            solved: 0,
            easy: 0,
            medium: 0,
            hard: 0,
            rating: 0,
        };
    }
}






// import axios from "axios";

// export async function getLeetCodeData(username) {
//     try {
//         const response = await axios.get(
//             // `https://alfa-leetcode-api.onrender.com/${username}`
//             `https://alfa-leetcode-api.onrender.com/${username}/solved`
//         );

//         console.log(response.data);

//         return {
//             username,
//             solved: response.data.solvedProblem,
//             easy: response.data.easySolved,
//             medium: response.data.mediumSolved,
//             hard: response.data.hardSolved,
//             rating: response.data.contestRating || 0,
//         };

//     } catch (error) {
//         console.log("LeetCode API Error:", error.response?.status);
    
//         return {
//             username,
//             solved: 0,
//             easy: 0,
//             medium: 0,
//             hard: 0,
//             rating: 0,
//         };
//     }
// }



// import axios from "axios";

// export async function getLeetCodeData(username) {
//     try {
//         const response = await axios.get(
//             `https://alfa-leetcode-api.onrender.com/${username}/solved`
//         );

//         return {
//             username,
//             solved: response.data.solvedProblem,
//             easy: response.data.easySolved,
//             medium: response.data.mediumSolved,
//             hard: response.data.hardSolved,
//         };

//     } catch (error) {
//         throw error;
//     }
// }