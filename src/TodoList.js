import { useState, useRef } from "react";

function TodoList() {
  const [job, setJob] = useState("");
  const inputReft = useRef();
  const [id, setID] = useState();
  const [edit, setEdit] = useState(false);
  //const [jobs, setJobs] = useState([])
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("jobs"));
    return storageJobs;
  });
  const handleAdd = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job]; // bảo lưu đc cái job trong tương lai khi mà thêm job mới. add thg mới vào là job
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
    setJob("");
    inputReft.current.focus();
    console.log(jobs);
  };
  const handleDelete = (index) => {
    setJobs((prevJob) => {
      const newJobs = prevJob.filter((item, id) => id !== index);
      localStorage.setItem("jobs", JSON.stringify(newJobs));
      return newJobs;
    });
  };
  const handleEdit = (id) => {
    setJob(jobs[id]);
    setEdit(true);
    setID(id);
    inputReft.current.focus();
  };
  const handleChange = () => {
    setJobs((preJob) => {
      if (job.length > 0) {
        preJob[id] = job;
        localStorage.setItem("jobs", JSON.stringify(preJob));
        return preJob;
      }
    });
    setEdit(false);
    setJob("");
    inputReft.current.focus();
  };

  return (
    <div>
      <div style={{ padding: 20 }}>
        <input
          value={job}
          ref={inputReft}
          onChange={(e) => setJob(e.target.value)}
          onKeyDown={(e) =>
            (e.keyCode === 13 && !edit && handleAdd()) ||
            (e.keyCode === 13 && edit && handleChange())
          }
        />

        {edit ? (
          <button onClick={handleChange}>Change</button>
        ) : (
          <button onClick={handleAdd}>Add</button>
        )}

        <ul>
          {jobs &&
            jobs.map((job, index) => (
              <li key={index}>
                {job}
                <button
                  onClick={() => handleDelete(index)}
                  style={{ marginLeft: 30 }}
                >
                  Remove
                </button>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
