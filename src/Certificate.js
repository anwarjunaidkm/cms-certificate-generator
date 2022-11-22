import React, { useEffect } from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

import { Container } from "react-bootstrap";
import { BiSidebar } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Progress } from "reactstrap";
import {
  seal,
  Edison,
  osperb,
  xanicon,
  upline,
  downline,
  side,
} from "./Components/images/image";
import { singleviewApi } from "./Store/Student/useApi";
import { map } from "lodash";
import { useState } from "react";
function Certificate() {
  const params = useParams();
  const dispatch = useDispatch();
  const [store, setStore] = useState(0);
  const { single } = useSelector((state) => ({
    single: state.StudentReducer.singleview,
  }));
  const [student_courses, setStudentCourses] = useState(
    single?.student_courses
  );

  // console.log(single);
  // const student_courses = single.student_courses
  const courseCount = student_courses.length;

  useEffect(() => {
    let a = 0
    student_courses?.map((item, key) => {
    
      a += (parseFloat(item.progress))
    //   console.log((parseFloat(item.progress) / 2));

    //   console.log(typeof(item.progress));
    //   console.log("store : ", store);
    });
    setStore(a/2)

  }, [student_courses]);

  useEffect(() => {
    dispatch(singleviewApi(params.id));
  }, []);
  return (
    <Container>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <img
          style={{ marginTop: 0, paddingBottom: "15px" }}
          src={side}
          alt=""
        />
      </div>
      <div className="certy-banner">
        <h1 className="certi" style={{ fontSize: "30px" }}>
          CERTIFICATE OF ACHIEVEMENT{" "}
        </h1>
        <h5 className="certyID">CertificateId : {single.id} </h5>

        <h2 className="name_student">{single.full_name}</h2>
        <h3 className="completed-name">
          has completed the following profession:{" "}
          <span className="nameofcourse">Web development </span>{" "}
        </h3>
        <Rating name="read-only" value={store/courseCount} readOnly />
        <h2 style={{ color: "#939393", fontWeight: "lighter" }}>
          ------------------------------
        </h2>
        {/* <h2 className="certi ">9 / 10</h2> */}
        {/* <Progress className="my-3" color="success" striped value="25" /> */}
        <h3 className="certy-content">
          This is to certify that{" "}
          <span className="content-name"> Mr/Mrs {single.full_name} </span>has
          successfully completed the
        </h3>
        <h3 className="certy-content">
          profession in <span className="content-name">Web development </span>{" "}
          started on {single.start_date}
        </h3>
        <h3 className="certy-content">and completed on {single.end_date}.</h3>
        <h3 style={{ fontWeight: "lighter" }} className="certy-content">
          We wish you the best for your future endeavors.
        </h3>

        <img style={{ margin: "12px" }} src={seal} alt="" />
        <h3 className="nameofceo">Ashik Sharaf koori</h3>
        <h3 className="ceofont">Founder & CEO, edisonvalley</h3>
        <h3 className="website">www.edisonvalley.com</h3>
        <div>
          <img style={{ margin: "12px" }} src={Edison} alt="" />
          <img
            style={{
              height: "100px",
              width: "100px",
              objectFit: "contain",
              margin: "12px",
            }}
            src={osperb}
            alt=""
          />
          <img style={{ margin: "12px" }} src={xanicon} alt="" />
        </div>

        <div className="gradecard">
          <h2 className="name_student">Score Card</h2>

          <h3 className="nameofcourse">Web development </h3>

          <Rating name="read-only" value={5} readOnly />
          <div>
            {map(student_courses, (item, key) => (
              <h3 style={{ color: "#235A92" }}>
                {item.course.course_name} :
                <Rating name="read-only" value={item.progress / 2} readOnly />
              </h3>
            ))}

            <h1>{store/courseCount}</h1>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Certificate;
