import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import {
    getProfile,
    updateProfile,
} from "../services/profileService";

function Profile() {

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        codeforcesHandle: "",
        leetcodeUsername: "",
        githubUsername: "",
    });

    useEffect(() => {

        async function loadProfile() {

            try {

                const data = await getProfile();

                setFormData({
                    name: data.name || "",
                    codeforcesHandle: data.codeforcesHandle || "",
                    leetcodeUsername: data.leetcodeUsername || "",
                    githubUsername: data.githubUsername || "",
                });

            } catch (error) {

                alert("Failed to load profile");

            } finally {

                setLoading(false);

            }

        }

        loadProfile();

    }, []);

    function handleChange(e) {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    }

    async function handleSubmit(e) {

        e.preventDefault();

        setSaving(true);

        try {

            await updateProfile(formData);

            alert("Profile Updated Successfully");

        } catch (error) {

            alert("Failed to update profile");

        } finally {

            setSaving(false);

        }

    }

    if (loading) {
        return (
            <DashboardLayout>
                <div className="text-white text-xl">
                    Loading...
                </div>
            </DashboardLayout>
        );
    }

    return (

        <DashboardLayout>

            <div className="flex justify-center py-10">

                <div className="w-full max-w-3xl bg-slate-900 rounded-2xl shadow-xl p-8">

                    <h1 className="text-4xl font-bold text-blue-500 mb-2">
                        Profile
                    </h1>

                    <p className="text-slate-400 mb-8">
                        Update your coding profiles.
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >

                        <div>

                            <label className="text-slate-300">
                                Full Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full mt-2 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
                            />

                        </div>

                        <div>

                            <label className="text-slate-300">
                                LeetCode Username
                            </label>

                            <input
                                type="text"
                                name="leetcodeUsername"
                                value={formData.leetcodeUsername}
                                onChange={handleChange}
                                className="w-full mt-2 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
                            />

                        </div>

                        <div>

                            <label className="text-slate-300">
                                Codeforces Handle
                            </label>

                            <input
                                type="text"
                                name="codeforcesHandle"
                                value={formData.codeforcesHandle}
                                onChange={handleChange}
                                className="w-full mt-2 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
                            />

                        </div>

                        <div>

                            <label className="text-slate-300">
                                GitHub Username
                            </label>

                            <input
                                type="text"
                                name="githubUsername"
                                value={formData.githubUsername}
                                onChange={handleChange}
                                className="w-full mt-2 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
                            />

                        </div>

                        <button
                            type="submit"
                            disabled={saving}
                            className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg text-white font-semibold"
                        >
                            {saving ? "Saving..." : "Save Changes"}
                        </button>

                    </form>

                </div>

            </div>

        </DashboardLayout>

    );
}

export default Profile;



// import { useEffect, useState } from "react";
// import DashboardLayout from "../layouts/DashboardLayout";
// import {
//     getProfile,
//     updateProfile,
// } from "../services/profileService";

// function Profile() {

//     const [formData, setFormData] = useState({
//         name: "",
//         codeforcesHandle: "",
//         leetcodeUsername: "",
//         githubUsername: "",
//     });

//     useEffect(() => {

//         async function loadProfile() {

//             const data = await getProfile();

//             setFormData({
//                 name: data.name,
//                 codeforcesHandle: data.codeforcesHandle,
//                 leetcodeUsername: data.leetcodeUsername,
//                 githubUsername: data.githubUsername,
//             });

//         }

//         loadProfile();

//     }, []);

//     function handleChange(e) {

//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });

//     }

//     async function handleSubmit(e) {

//         e.preventDefault();

//         await updateProfile(formData);

//         alert("Profile Updated Successfully");

//     }

//     return (
//         <DashboardLayout>

//             <div className="max-w-2xl bg-slate-800 rounded-xl p-8">

//                 <h1 className="text-3xl font-bold mb-8">
//                     Profile
//                 </h1>

//                 <form
//                     onSubmit={handleSubmit}
//                     className="space-y-5"
//                 >

//                     <input
//                         type="text"
//                         name="name"
//                         placeholder="Name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="w-full p-3 rounded bg-slate-700"
//                     />

//                     <input
//                         type="text"
//                         name="leetcodeUsername"
//                         placeholder="LeetCode Username"
//                         value={formData.leetcodeUsername}
//                         onChange={handleChange}
//                         className="w-full p-3 rounded bg-slate-700"
//                     />

//                     <input
//                         type="text"
//                         name="codeforcesHandle"
//                         placeholder="Codeforces Handle"
//                         value={formData.codeforcesHandle}
//                         onChange={handleChange}
//                         className="w-full p-3 rounded bg-slate-700"
//                     />

//                     <input
//                         type="text"
//                         name="githubUsername"
//                         placeholder="GitHub Username"
//                         value={formData.githubUsername}
//                         onChange={handleChange}
//                         className="w-full p-3 rounded bg-slate-700"
//                     />

//                     <button
//                         type="submit"
//                         className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700"
//                     >
//                         Save Changes
//                     </button>

//                 </form>

//             </div>

//         </DashboardLayout>
//     );
// }

// export default Profile;



// import { useEffect, useState } from "react";
// import DashboardLayout from "../layouts/DashboardLayout";
// import {
//     getProfile,
//     updateProfile,
// } from "../services/profileService";

// function Profile() {

//     const [formData, setFormData] = useState({
//         name: "",
//         codeforcesHandle: "",
//         leetcodeUsername: "",
//         githubUsername: "",
//     });

//     useEffect(() => {

//         async function loadProfile() {

//             const data = await getProfile();

//             setFormData({
//                 name: data.name,
//                 codeforcesHandle: data.codeforcesHandle,
//                 leetcodeUsername: data.leetcodeUsername,
//                 githubUsername: data.githubUsername,
//             });

//         }

//         loadProfile();

//     }, []);

//     function handleChange(e) {

//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });

//     }

//     async function handleSubmit(e) {

//         e.preventDefault();

//         await updateProfile(formData);

//         alert("Profile Updated Successfully");

//     }

//     return (
//         <DashboardLayout>

//             <div className="max-w-2xl bg-slate-800 rounded-xl p-8">

//                 <h1 className="text-3xl font-bold mb-8">
//                     Profile
//                 </h1>

//                 <form
//                     onSubmit={handleSubmit}
//                     className="space-y-5"
//                 >

//                     <input
//                         type="text"
//                         name="name"
//                         placeholder="Name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="w-full p-3 rounded bg-slate-700"
//                     />

//                     <input
//                         type="text"
//                         name="leetcodeUsername"
//                         placeholder="LeetCode Username"
//                         value={formData.leetcodeUsername}
//                         onChange={handleChange}
//                         className="w-full p-3 rounded bg-slate-700"
//                     />

//                     <input
//                         type="text"
//                         name="codeforcesHandle"
//                         placeholder="Codeforces Handle"
//                         value={formData.codeforcesHandle}
//                         onChange={handleChange}
//                         className="w-full p-3 rounded bg-slate-700"
//                     />

//                     <input
//                         type="text"
//                         name="githubUsername"
//                         placeholder="GitHub Username"
//                         value={formData.githubUsername}
//                         onChange={handleChange}
//                         className="w-full p-3 rounded bg-slate-700"
//                     />

//                     <button
//                         type="submit"
//                         className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700"
//                     >
//                         Save Changes
//                     </button>

//                 </form>

//             </div>

//         </DashboardLayout>
//     );
// }

// export default Profile;