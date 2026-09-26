import { useState } from 'react';

const Content = () => {
    const [name, setName] = useState('hana');

    const handleNameChange = () => {
        const names = ['hana', 'farah', 'xz'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
    }

    return (
        <main>
            <p>
                Hello {name}!
            </p>
            <button onClick={handleNameChange}>click it</button>
        </main>
    )
}

export default Content