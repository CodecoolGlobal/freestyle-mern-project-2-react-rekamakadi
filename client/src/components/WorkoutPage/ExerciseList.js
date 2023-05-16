import React from 'react';


function ExerciseList({searchedExercises, setShowModal, setExercise}) {
    return (
        <div className="container">
            <div className="input-container">
                <div className="input-dist">
                    <div className="input-type">
                        <table>
                            {/*<thead className="input-is">
                                <tr>
                                    <th>Name</th>
                                    <th>Equipment</th>
                                    <th>Bodypart</th>
                                    <th>Target</th>
                                </tr>
                            </thead>*/}
                            <tbody className="input-is">
                                    {searchedExercises.map(exercise => (
                                    <tr className="table-cell"
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
        </div>
    );
}

export default ExerciseList;