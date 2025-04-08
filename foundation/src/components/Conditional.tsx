type Props = {
    title: string;
    isActive: boolean;
}

const engines = [
    {id: '1', name: 'Unreal Engine'},
    {id: '2', name: 'Unity'},
    {id: '3', name: 'Godot'},
];

// const result = true && 'Hello World';
// console.log(result);

export const Conditional = ({title, isActive}: Props) => {
    const NOTIFICATION_STATES = {
        info: 'Did you know? ...',
        warning: 'Be careful here ...',
        error: 'Something went wrong ...',
    };

    if (!engines.length) {
        return <p className="text-center font-bold text-red-800 text-2xl">Sorry, the list is empty.</p>;
    } else {
        return (
            <article className="bg-indigo-50 p-2 rounded-md mt-2 max-w-1/2">
                <h5 className="text-2xl text-indigo-700">{title}</h5>
                {
                    isActive 
                        ? <p className="bg-emerald-300 text-emerald-700 text-center rounded-2xl w-[80px]">Active</p> 
                        : <p className="bg-red-300 text-red-700 text-center rounded-2xl w-[80px]">Inactive</p>
                }
                <p>
                    {NOTIFICATION_STATES['info']}
                </p>
                <p>
                    {NOTIFICATION_STATES['warning']}
                </p>
                <p>
                    {NOTIFICATION_STATES['error']}
                </p>
                <ul>
                    {
                        engines.map((engine) => (
                            <li key={engine.id} className="font-bold text-md">
                                {engine.name}
                            </li>
                        ))
                    }
                </ul>
            </article>
        )
    }
    
}
