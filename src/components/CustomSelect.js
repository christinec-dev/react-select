import React, {useState} from "react";

//Reusable component that will render select items according to props passed to it
export default function CustomSelect(props) {
    //we receive the data needed for the options tag in the select element via props
    const [data] = useState(props.data);
    const [selectedData, updateSelectedData] = useState('');

    //The state of the tag (the currently selected option) is stored locally and updated and sent back as an output when it changes via our local function
    function handleChange(evt) {
        updateSelectedData(evt.target.value);
        
        if (props.onSelectChange)
            props.onSelectChange(selectedData);
    }

    //we loop through the data set via props to construct it before rendering it as part of the select tag.
    let options = data.map(data => (
        <option key={data.id} value={data.id}> 
            {data.name}
        </option>
    ))

    return (
        <select
            name="customSearch"
            className="custom-search-select"
            onChange={handleChange}
        >
            <option className="custom-options">Select Item</option>
            {options}
        </select>
    )

}