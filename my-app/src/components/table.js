import { useEffect, useState } from "react";

export default function TableItem() {
  let [data, setData] = useState([]);
  useEffect(() => {
    fecthData();
    console.log(data);
  }, []);

  let fecthData = () => {
    fetch("http://localhost:3000/api/users", {
      headers: {
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwibmFtZSI6InRlc3Q0IiwiRW1haWwiOiJ0ZXN0NEBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTY2OTc5NTA1NH0.LBNPJg4io9csBF6tIyRctLyvoESYFLcMzgiSe8IFpF8",
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log(res);
          return res.json();
        }
      })
      .then((result) => {
        console.log(result, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
        setData(result);
      });
  };

  return (
    <>
      <div className="justify-between items-center z-0 text-white rounded-lg p-5 m-10 mt-5 mb-5 h-96 ">
        {/* {loading && <h1>Loading...</h1>}
        {error && <h1>Error...</h1>} */}
        <table className="table table-auto w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Username</th>
              <th>email</th>
              <th>role</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, i) => {
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.role}</td>
                  <td><button className="btn bg-indigo-700 mr-2">detail</button> <button className="btn bg-red-700">delete</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
