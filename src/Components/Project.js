import React, { useEffect, useState } from "react";
import "../Components/Project.css";

function Project() {
    const [name, setName] = useState("");
    const [on, setOn] = useState(false);
    const [area, setArea] = useState("");
    const [update, setUpdate] = useState({ tittle: "", about_tittle: "" });
    const [data, setData] = useState([]);
    const [empty, setEmpty] = useState(false);

    const handleChange = (event) => {
        setName(event.target.value);
    };
    const allData = {
        id: data.length + 1,
        name: name,
        area: area,
    };

    const handleSubmit = () => {
        // setChack({ tittle: name, about_tittle: area });
        setName("");
        setArea("");
        setOn(false);
        setData(allData);
        if (name.length > 0 && area.length > 0) {
            setData([...data, allData]);
            setEmpty(false);
        } else {
            setData(data);
            setEmpty(true);
            // alert(`Your Fill Is Almost Empty...`);
        }
        // console.log(empty);
    };

    const handleArea = (event) => {
        setArea(event.target.value);
    };
    const handleClickPlus = () => {
        if (on === false) {
            setOn(true);
        } else {
            setOn(false);
        }
    };
    const handleBlur = () => {
        if (empty === true) {
            setEmpty(false);
        } else {
            setEmpty(true);
        }
    };

    const handleDelete = (id) => {
        setData((pre) => {
            return pre.filter((data) => data.id !== id);
        });
        // setData(data);
    };

    const handleUpdate = (id) => {
        setOn(true);

        data.map((item, index) => {
            if (item.id === id) {
                setName(item.name);
                setArea(item.area);
            }
        });

        // setData((pre) => {
        //     return pre.filter((data) => data.id !== id);
        // });
    };

    return (
        <div className="all">
            <div className="container">
                <div className="cr">
                    <i class="fa-brands fa-cc-diners-club "></i>
                    <h1>CRUD Project</h1>
                </div>
                <div>
                    <div onClick={handleClickPlus} className="icon">
                        <i className="fa-solid fa-circle-plus" title="Add Menu"></i>
                    </div>
                    {on && (
                        <div>
                            <div className="mb-3 pt-2">
                                <label for="exampleFormControlInput1" class="form-label te">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter Tittle"
                                    value={name}
                                    required
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label te tt">
                                    About Title
                                </label>
                                <textarea
                                    class="form-control"
                                    id="exampleFormControlTextarea1"
                                    placeholder="About Title Area"
                                    rows="1"
                                    type="text"
                                    onChange={handleArea}
                                    value={area}
                                ></textarea>

                                <div>
                                    <button onClick={handleSubmit} className="btn btn-primary mt-2 bt dis">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className={empty ? "hole" : ""} onClick={handleBlur}></div>
                <div className={empty === false ? "am" : "am_1"}>
                    <div className="alert">
                        <span>Your Title/About Title Almost Empty....</span>
                        <br />
                        <span>Plz Fill The Option...!</span>
                    </div>
                </div>
                <div>
                    <table class="table table-dark text-start">
                        <thead>
                            <tr>
                                <th scope="col">Task No.</th>
                                <th scope="col">Tittle</th>
                                <th scope="col">Tittle Description: </th>
                            </tr>
                        </thead>
                    </table>
                </div>
                {data.map((item, index) => (
                    <div className="crud" key={index}>
                        <table class="table table-striped table-hover table-b table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Task# {item.id}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        Tittle: <span className="over ">{item.name}</span>
                                    </th>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        Tittle Description: <span className="over">{item.area}</span>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                        <div id="paa">
                            <button onClick={() => handleUpdate(item.id)} className="pa btn btn-success">
                                Update
                            </button>
                            <button onClick={() => handleDelete(item.id)} className="pa btn btn-danger mx-2">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
