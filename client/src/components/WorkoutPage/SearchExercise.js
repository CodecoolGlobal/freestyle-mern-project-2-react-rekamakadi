import React, { useState } from 'react';
import { options, fetchData } from './fetchData';
import ExerciseList from './ExerciseList';
import './WorkoutPage.css';
import GifModal from './GifModal';

function SearchExercise() {
    const [search, setSearch] = useState('')
    const [exercise, setExercise] = useState(null)
    const [searchedExercises, setSearchedExercises] = useState(undefined)
    const [showModal, setShowModal] = useState(false)
    // const [bodyParts, setBodyParts] = useState([])
    
    // useEffect(() => {
    //     const fetchExercisesData = async () => {
    //         const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options);
    //         setBodyParts(['all', ...bodyPartsData])
    //     }
    // }, [])

    const handleSearch = async (e) => {
        e.preventDefault();
        if (search) {
            const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', options);
            setSearchedExercises(exerciseData.filter((exercise) => (
                 exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            )));
            console.log(searchedExercises)
            setSearch('');
        }
    }

    return (
        <>
            <form
                onSubmit={handleSearch}
                action=""
                className="container">
                <div className="input-container">
                    <div className="input-content">
                        <div className="input-dist">
                            <div className="input-type">
                                <input
                                    value={search}
                                    onChange={(e) => {
                                        setSearch(e.target.value.toLowerCase());
                                    } }
                                    placeholder='target / bodypart / equipment'
                                    type='text'
                                    className="input-is" />
                                <button type="submit" className="input-is">
                                    Search exercises
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
                {searchedExercises && <ExerciseList
                    searchedExercises={searchedExercises} 
                    setShowModal={setShowModal}
                    setExercise={setExercise}/>}
                {showModal && <GifModal
                    setShowModal={setShowModal}
                    exercise={exercise}/>}                    
        </>
    );
}

export default SearchExercise;