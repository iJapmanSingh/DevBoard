import axios from "axios";

export async function getCodeforcesData(handle) {
    try {
        // Fetch user info and submissions simultaneously
        const [infoResponse, statusResponse] = await Promise.all([
            axios.get(
                `https://codeforces.com/api/user.info?handles=${handle}`
            ),
            axios.get(
                `https://codeforces.com/api/user.status?handle=${handle}`
            ),
        ]);

        const user = infoResponse.data.result[0];
        const submissions = statusResponse.data.result;

        // Store unique accepted problems
        const solvedProblems = new Set();

        submissions.forEach((submission) => {
            if (submission.verdict === "OK") {
                const problemId =
                    `${submission.problem.contestId}-${submission.problem.index}`;

                solvedProblems.add(problemId);
            }
        });

        return {
            username: user.handle,
            rating: user.rating || 0,
            rank: user.rank || "Unrated",
            maxRating: user.maxRating || 0,
            maxRank: user.maxRank || "Unrated",
            solved: solvedProblems.size,
        };
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch Codeforces data");
    }
}



// import axios from "axios";

// export async function getCodeforcesData(handle) {
//     try {
//         const response = await axios.get(
//             `https://codeforces.com/api/user.info?handles=${handle}`
//         );

//         const user = response.data.result[0];

//         return {
//             username: response.data.result[0].handle,
//             rating: response.data.result[0].rating,
//             rank: response.data.result[0].rank,
//             maxRating: response.data.result[0].maxRating,
//             maxRank: response.data.result[0].maxRank,
//         };
//     } catch (error) {
//         throw new Error("Failed to fetch Codeforces data");
//     }
// }