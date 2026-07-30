function StatCard({
    title,
    icon,
    primaryValue,
    primaryLabel,
    secondaryValue,
    secondaryLabel,
}) {
    return (
        <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition duration-300 hover:-translate-y-1">

            <div className="text-4xl">{icon}</div>

            <h2 className="text-lg font-semibold mt-3">
                {title}
            </h2>

            <div className="mt-5 space-y-4">

                <div>
                    <h1 className="text-3xl font-bold text-blue-400">
                        {primaryValue}
                    </h1>

                    <p className="text-slate-400 text-sm">
                        {primaryLabel}
                    </p>
                </div>

                {secondaryLabel && (
                    <div>
                        <h2 className="text-xl font-semibold text-white">
                            {secondaryValue}
                        </h2>

                        <p className="text-slate-400 text-sm">
                            {secondaryLabel}
                        </p>
                    </div>
                )}

            </div>

        </div>
    );
}

export default StatCard;



// function StatCard({
//     title,
//     value,
//     label,
//     icon,
// }) {

//     return (

//         <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition duration-300 hover:-translate-y-1">

//             <div className="text-4xl">
//                 {icon}
//             </div>

//             <h2 className="text-lg font-semibold mt-3">
//                 {title}
//             </h2>

//             <h1 className="text-4xl font-bold text-blue-400 mt-3">
//                 {value}
//             </h1>

//             <p className="text-slate-400 mt-2">
//                 {label}
//             </p>

//         </div>

//     );

// }

// export default StatCard;



























// function StatCard({ title, stats }) {
//     return (
//         <div className="bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-700 hover:border-blue-500 transition-all">

//             <h2 className="text-xl font-bold text-white mb-5">
//                 {title}
//             </h2>

//             <div className="space-y-4">
//                 {stats.map((item) => (
//                     <div
//                         key={item.label}
//                         className="flex justify-between items-center border-b border-slate-700 pb-2"
//                     >
//                         <span className="text-slate-400">
//                             {item.label}
//                         </span>

//                         <span className="text-white font-semibold">
//                             {item.value}
//                         </span>
//                     </div>
//                 ))}
//             </div>

//         </div>
//     );
// }

// export default StatCard;
// function StatCard({title , primaryValue , primaryLabel}){
//     return(
//         <div className="stat-card">
//             <h3>{title}</h3>    
//             <h1>{primaryValue} </h1>
//             <p>{primaryLabel} </p>
//         </div>
//     )
// }
// export default StatCard