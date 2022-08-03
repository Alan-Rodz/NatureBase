import { useState } from 'react';

import styles from '../styles/FilterPlants.module.css';

// == Interface ===================================================================
interface SearchFunctionalityProps {
    plantNameArray: string[];
    displayPlantInfoFunction: (plantName: string) => Promise<void>;
}

// == Component ===================================================================
export const FilterPlants: React.FC<SearchFunctionalityProps> = ({ plantNameArray, displayPlantInfoFunction }) => {
    // -- State -------------------------------------------------------------------
    const [foundPlants, setFoundPlants] = useState(plantNameArray);
    const [plantName, setPlantName] = useState('');

    // -- Handler -----------------------------------------------------------------
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setPlantName(value)/*update inputValue*/;
        
        if(value) {
            const results = foundPlants.filter((plant) => plant.toLowerCase().startsWith(value.toLowerCase()));
            setFoundPlants(results);
        } else {
            setFoundPlants(plantNameArray)/*show all plants if text field is empty*/;
        }
    };

    // -- UI ----------------------------------------------------------------------
    return (
        <div>
            <input
                type='search'
                value={plantName}
                onChange={handleChange}
                placeholder='Type to filter the list!'
            />
            <ul className={styles.myUL}>
                <br />
                {foundPlants && foundPlants.length > 0 ?
                    (foundPlants.map((plant) => (<li key={plant}><a onClick={() => displayPlantInfoFunction(plant)}>{plant}</a></li>)))
                    :
                    (<h4>No plants named like that!</h4>)}
            </ul>
        </div>
    );
}
