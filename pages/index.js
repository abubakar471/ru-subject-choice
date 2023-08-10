import React, { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import dynamic from "next/dynamic"
import Link from "next/link"
import axios from "axios"

const Home = () => {
  const subjects = [
    {
      id: 1,
      name: 'Computer Science & Engineering'
    },
    {
      id: 2,
      name: 'Elecetrical And Electronic Engineering'
    },
    {
      id: 3,
      name: 'Mathematics'
    },
    {
      id: 4,
      name: 'Physics'
    },
    {
      id: 5,
      name: 'Chemistry'
    },
    {
      id: 6,
      name: 'Oceanography'
    },
    {
      id: 7,
      name: 'Applied Physics'
    },
    {
      id: 8,
      name: 'Software Engineering'
    },
    {
      id: 9,
      name: 'Agricultural Research & Biotechnology'
    },
    {
      id: 10,
      name: 'Botanical Studies',
    },
    {
      id: 11,
      name: 'Zoology'
    },
    {
      id: 12,
      name: 'Soil Science'
    }
  ];

  const [selSub, setSelSub] = useState([]);
  const [ok, setOk] = useState(false);

  const handleChoice = (id) => {
    const condition = selSub.find(s => s.id === id);
    if(condition){
     return;
    }
    const data = subjects.filter(s => s.id === id);
    setSelSub(prevSelSub => [...prevSelSub, ...data]);
  }

  const handleRemove = (id) => {
    const data = selSub.filter(s => s.id !== id);
    setSelSub(data);
  }

  const handleSubmit = async () => {
    const { data } = await axios.post('https://ru-subject-choice.netlify.app/api/submit');

    if (data.ok) {
      setOk(true);
    };


  }

  const fetchRes = async () => {
    const { data } = await axios.get('https://ru-subject-choice.netlify.app/api/submit');
    if(data.ok){
      setOk(data.ok);
    }
  }
  // useEffect(() => {
  //   fetchRes();
  // }, [])

  return (
    <>
      <div>
        <Navbar />

        <marquee>subject choice for unit C & A notice | fill up your subject choice form by logging in to your profile</marquee>

        <div className="container">
          <div className="sidebar">
            <Link className="item" href="#">Home</Link>
            <Link className="item" href="https://abubakar471.github.io/ru.ac.bd">Profile</Link>
            <Link className="item" href="#">Notice</Link>
            <Link className="item" href="#">Log out</Link>
          </div>

          <div>
            <div className="user-info">
              <img className="user-img" src="/user.jpg" alt="user" />

              <div className="user-details">
                <h3>Name : Md. Abu Bakar Siddique</h3>
                <h3>Father's Name : Md. Mobarak Hossain</h3>
                <h3>Mother's Name : Karniz Fatema</h3>

                <table className="table">

                  <tr>
                    <td>Exam</td>
                    <td>Year</td>
                    <td>Grade</td>
                    <td>Board</td>
                  </tr>
                  <tr>
                    <td>HSC</td>
                    <td>2021</td>
                    <td>5:00</td>
                    <td>Chittagong</td>
                  </tr>

                  <tr>
                    <td>SSC</td>
                    <td>2019</td>
                    <td>4.83</td>
                    <td>Chittagong</td>
                  </tr>
                </table>
              </div>

            </div>

              <section style={{display : "flex", justifyContent : "center"}}>
                <table className="table" border="2px">
                  <tr>
                    <td>applicant id</td>
                    <td>applicant roll</td>
                    <td>position</td>
                    <td>status</td>
                  </tr>
                  <tr>
                    <td>C-85548</td>
                    <td>88525</td>
                    <td>6976</td>
                    <td>waiting</td>
                  </tr>
                </table>
              </section>

            {/* <section>
              <h1 className="sub-choice-title">Subject Choice Order</h1>

              {
                ok ? (<div className="choice-done">subject choice completed</div>) : (
                  <>
                    <div className="subject-choice-box">
                      <div className="box-1">
                        {
                          subjects.map(s => (
                            <div onClick={() => handleChoice(s.id)}
                              className="item" key={s.id}>{s.name}</div>
                          ))
                        }
                      </div>

                      <div> <h1 className="arrow"> {`>`} </h1></div>

                      <div className="box-2">
                        {selSub.length === 0 && <div style={{ color: "red" }}>please select your subject order</div>}

                        {
                          selSub.map(s => (
                            <div onClick={() => handleRemove(s.id)}
                              className="item" key={s.id}>{s.name}</div>
                          ))
                        }
                      </div>
                    </div>

                    <div className="btn-group">
                      <button className="reset" onClick={() => setSelSub([])}>Reset</button>
                      <button className="submit" onClick={handleSubmit}>Submit</button>
                    </div>
                  </>
                )
              }
            </section> */}
          </div>
        </div>


      </div>
    </>
  )
}

export default dynamic(() => Promise.resolve(Home), { ssr: false })