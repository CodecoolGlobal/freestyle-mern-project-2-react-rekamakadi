import React, { useState } from 'react';


function ExerciseList({searchedExercises, setShowModal, setExercise}) {

    const [exercisePerPage, setExercisePerPage] = useState(15);
    const numOfTotalPages = Math.ceil(searchedExercises.length / exercisePerPage);
    const pages = [...Array(numOfTotalPages + 1).keys()].slice(1);
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastExercise = currentPage * exercisePerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
    const visibleExercises = searchedExercises.slice(indexOfFirstExercise, indexOfLastExercise);

    const previousPageHandler = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1)
      }
    
      const nextPageHandler = () => {
        if (currentPage !== numOfTotalPages) setCurrentPage(currentPage + 1)
      }

    return (
        <div className="list container1">
            <div className="input-container1">
                <div className="input-dist1">
                    <div className="input-type1">
                        <table className='table'>
                            {/*<thead className="input-is1">
                                <tr>
                                    <th>Name</th>
                                    <th>Equipment</th>
                                    <th>Bodypart</th>
                                    <th>Target</th>
                                </tr>
                            </thead>*/}
                            <tbody className="input-is1">
                                    {visibleExercises.map(exercise => (
                                    <tr className="table-cell1"
                                        key={exercise.id}
                                        onClick={() => {
                                            setShowModal(true);
                                            setExercise(exercise);
                                        }}>
                                        <td>{exercise.name}</td>
                                        {/*<td>{exercise.equipment}</td>
                                        <td>{exercise.bodyPart}</td>
                                        <td>{exercise.target}</td>*/}
                                    </tr>
                                    ))} 
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
                <div className='input-dist1 pagination'>
                    <select className='input-is1' onChange={(e) => setExercisePerPage(e.target.value)}>
                        <option className="input-container1 drop" value="5">5</option>
                        <option className="input-container1 drop" value="15">15</option>
                        <option className="input-container1 drop" value="25">25</option>
                        <option className="input-container1 drop" value="50">50</option>
                        <option className="input-container1 drop" value="75">75</option>
                    </select>
                    <button className='input-is1' onClick={previousPageHandler}>Previous</button>
                    <p className='input-is1'>{pages.map(page => (
                        <span 
                        key={page} 
                        onClick={() => setCurrentPage(page)}
                        className={currentPage === page ? "active" : "page"}
                        >{page} | </span>
                    ))}
                    </p>
                    <button className='input-is1' onClick={nextPageHandler}>Next</button>
                </div>
        </div>
    );
}

export default ExerciseList;