import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/action";
Modal.setAppElement("#root");

const EditTask = ({ task }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState(task.task);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const editedTask = {
      id: task.id,
      task: input,
      isDone: task.isDone,
    };
    dispatch(editTask(editedTask));
    closeModal();
  };
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Edit task</h2> */}

        <form onSubmit={handleSubmit}>
          <label htmlFor="">Edit task: </label>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </div>
  );
};

export default EditTask;
