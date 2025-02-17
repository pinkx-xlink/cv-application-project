import "../styles/InputFieldsList.css"

export default function InputFieldsList({inputFields, selectedId, dispatch}) {
    return (
        <section className='input-fields-list'>
        <ul>
          {inputFields.map((inputField) => (
            <li key={inputField.id}>
              <button
                onClick={() => {
                  dispatch({
                    type: 'CHANGED_SELECTION',
                    inputFieldId: inputField.id,
                  });
                }}> 
                {selectedId === inputField.id ? <b>{inputField.name}</b> : inputField.name }
                {inputField.name}
              </button>
            </li>
          ))}
        </ul>
      </section>
    )
}