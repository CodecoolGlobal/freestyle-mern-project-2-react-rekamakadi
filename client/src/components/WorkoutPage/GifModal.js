import { useEffect } from "react";

function GifModal({setShowModal, exercise}) {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => document.body.style.overflow = "unset";
    },[])
        
    const handleModal = (e) => {
        setShowModal(false);
    }

    const handleFavorite = (postOrDelete, e) => {
        e.stopPropagation();
        exercise.favorite = !exercise.favorite;
        fetch('http://localhost:3001/api/exercises/favorite', {
            method: postOrDelete,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(exercise)
        })
        .then(res => {
            if (res.ok && postOrDelete === 'DELETE') {
                e.target.checked = false;
                console.log('success')
            }
        })
        .catch(err => console.error(err))
    }

    return(
        <div className="gif-modal1 container1 input-container1">
            <div className="gif-container1">
                <label>{exercise.name}</label><br/>
                <input 
                    className="check"
                    type="checkbox"
                    checked={exercise.favorite}
                    onChange={(e) => e.target.checked ? handleFavorite("POST", e) : handleFavorite("DELETE", e)}
                />
                <img onClick={handleModal} src={exercise.gifUrl} alt={exercise.name}></img><br/>
                <label className="gif-details1">{exercise.equipment} - {exercise.bodyPart} - {exercise.target}</label>
            </div>
        </div>
    )
}

export default GifModal