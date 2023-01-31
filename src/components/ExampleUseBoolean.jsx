import React from 'react';
import useBoolean from './ExampleBoolean';

const ExampleUSeBoolean = () => {
    const [lista, setLista] = useState([]);
    
    const [loading, setLoading] = useBoolean(false);

    const [error, setError] = useBoolean(false);

    useEffect(() => {
        setError.on
    }, []);
    
    return (
        <div>
            
        </div>
    );
}

export default ExampleUSeBoolean;
