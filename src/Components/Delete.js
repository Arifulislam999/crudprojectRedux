import React, { useState } from "react";
import "../Components/Delete.css";

function Delete() {
    const [on, setON] = useState(true);
    return (
        <div className="delete">
            <p>
                Are You Sure.To Delete This Item....!
                <br />
                <button className="yes btn btn-success">Yes</button>
                <button className="no btn btn-danger" type="button">
                    No
                </button>
            </p>
        </div>
    );
}

export default Delete;
