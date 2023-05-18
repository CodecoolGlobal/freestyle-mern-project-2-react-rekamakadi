import React from 'react';


function ExerciseList({searchedExercises, setShowModal, setExercise}) {
    return (
        <div className="container1">
            <div className="input-container1">
                <div className="input-dist1">
                    <div className="input-type1">
                        <table>
                            {/*<thead className="input-is1">
                                <tr>
                                    <th>Name</th>
                                    <th>Equipment</th>
                                    <th>Bodypart</th>
                                    <th>Target</th>
                                </tr>
                            </thead>*/}
                            <tbody className="input-is1">
                                    {searchedExercises.map(exercise => (
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
        </div>
    );
}

export default ExerciseList;