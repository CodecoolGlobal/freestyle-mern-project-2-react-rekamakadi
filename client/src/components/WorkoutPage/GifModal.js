import { useEffect } from "react";

function GifModal({setShowModal, exercise}) {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => document.body.style.overflow = "unset";
    },[])
    
    const handleModal = (e) => {
        setShowModal(false);
    }

    const handleFavorite = (e) => {
        
    }

    return(
        <div className="gif-modal1 container1 input-container1" onClick={handleModal}>
            <div className="gif-container1">
                <label onClick={handleFavorite}>{exercise.name}</label><br/>{/*<input type="checkbox">{isChecked ? filled : empty}</input>*/}
                <img src={exercise.gifUrl} alt={exercise.name}></img><br/>
                <label className="gif-details1">{exercise.equipment} - {exercise.bodyPart} - {exercise.target}</label>
            </div>
        </div>
    )
}

export default GifModal