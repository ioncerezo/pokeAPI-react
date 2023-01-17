function TypeBadge ({type}){
    let style = ''
    const styles= [
        ['normal', "bg-neutral-300 text-neutral-800 text-xs font-medium px-2 py-0.5 rounded  border border-neutral-500"],
        ['steel', "bg-neutral-200 text-neutral-600 text-xs font-medium px-2 py-0.5 rounded  border border-neutral-500"],
        ['water', 'bg-blue-400 text-blue-50 text-xs font-medium px-2 py-0.5 rounded  border border-blue-700'],
        ['rock', 'bg-stone-300 text-stone-800 text-xs font-medium px-2 py-0.5 rounded border border-stone-500'],
        ['fire', 'bg-orange-700 text-red-50 text-xs font-medium px-2 py-0.5 rounded border border-red-900'],
        ['ice', 'bg-sky-200 text-sky-800 text-xs font-medium px-2 py-0.5 rounded border border-sky-500'],
        ['grass', 'bg-lime-400 text-lime-900 text-xs font-medium px-2 py-0.5 rounded border border-lime-900'],
        ['electric', 'bg-yellow-300 text-yellow-700 text-xs font-medium px-2 py-0.5 rounded border border-yellow-600'],
        ['poison', 'bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-0.5 rounded border border-indigo-500'],
        ['psychic', 'bg-purple-100 text-purple-800 text-xs font-medium px-2 py-0.5 rounded border border-purple-500'],
        ['fairy', 'bg-pink-100 text-pink-800 text-xs font-medium px-2 py-0.5 rounded  border border-pink-500'],
        ['fighting', 'bg-amber-300 text-amber-800 text-xs font-medium px-2 py-0.5 rounded  border border-amber-500'],
        ['ground', 'bg-amber-600 text-orange-50 text-xs font-medium px-2 py-0.5 rounded  border border-amber-800'],
        ['flying', 'bg-sky-300 text-sky-800 text-xs font-medium px-2 py-0.5 rounded  border border-sky-800'],
        ['bug', 'bg-lime-300 text-lime-800 text-xs font-medium px-2 py-0.5 rounded  border border-lime-800'],
        ['ghost', 'bg-violet-300 text-violet-800 text-xs font-medium px-2 py-0.5 rounded  border border-violet-500'],
        ['dragon', 'bg-indigo-300 text-indigo-800 text-xs font-medium px-2 py-0.5 rounded  border border-indigo-500'],
        ['dark', 'bg-zinc-700 text-zinc-100 text-xs font-medium px-2 py-0.5 rounded  border border-zinc-900']
    ]

    for (let i = 0; i < styles.length; i++) {
        if (styles[i][0] === type){
            style = styles[i][1]
        }
    }
    
    
    return(
    <div>
        <span className={style}>{type}</span>
    </div>
    )
}

export default TypeBadge