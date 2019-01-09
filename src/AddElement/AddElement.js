import React from "react";

const AddElement = (props) => {
    const {userInputs} = props;
    const inputList = userInputs.map(userInput =>{
        return(
            <div className="userInput" key={userInput.id}>
                <div>{userInput.name}</div>
                <div>{userInput.surname}</div>
            </div>
        );
    })

    return(
        <div className="input-list">
            {inputList}
        </div>
    );
};

export default AddElement;