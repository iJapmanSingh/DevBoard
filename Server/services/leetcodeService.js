import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient("https://leetcode.com/graphql");

const query = gql`
query getUserProfile($username: String!) {
  matchedUser(username: $username) {
    submitStats {
      acSubmissionNum {
        difficulty
        count
      }
    }

    profile {
      ranking
    }
  }

  userContestRanking(username: $username) {
    rating
  }
}
`;

export async function getLeetCodeData(username) {
    try {

        const data = await client.request(query, {
            username,
        });

        const stats =
            data?.matchedUser?.submitStats?.acSubmissionNum || [];

        const getCount = (difficulty) => {
            const obj = stats.find(
                (x) => x.difficulty === difficulty
            );
            return obj ? obj.count : 0;
        };

        return {
            username,
            solved: getCount("All"),
            easy: getCount("Easy"),
            medium: getCount("Medium"),
            hard: getCount("Hard"),
            rating: Math.round(
                data?.userContestRanking?.rating || 0
            ),
        };

    } catch (error) {

        console.error(
            "LeetCode GraphQL Error:",
            error.response?.errors || error.message
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