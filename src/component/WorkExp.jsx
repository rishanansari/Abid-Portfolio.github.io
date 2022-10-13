import React from 'react'
import relaible from "../images/web dev.jpg"
import theem from "../images/theem.jpg"
import youtube from "../images/macivil.jpeg"

const WorkExp = () => {
  return (
    <>
<div className='works'>
<div className='work_exp'>
<h2>Work Experience</h2>
</div>
<div className='works_img'>
  <img src={relaible} alt="relaible info" style={{width:"20%",height:"10%"}}/>
  <div>
  <h2>Relaible Infosys</h2>
  <p> June-2021 to Sept-2022</p>
  <p>1+ Years of Experience as a Software Engineer at Reliable Infosys Thane. Worked 
on HTML5, CSS, JavaScript and React-Js.
</p>
</div>
</div>
<div className='works_img'>
  <img src={theem} alt="relaible info" style={{width:"20%",height:"10%"}}/>
  <div>
  <h2>Theem College of Engineering</h2>
  <p> March-2017 to June-2021</p>
  <p>4+ Years of Experience as an Assistance Professor at Theem College of Engineering,Boisar.
</p>
</div>
</div>
<div className='works_img'>
  <img src={youtube} alt="relaible info" style={{width:"20%",height:"10%"}}/>
  <div>
  <h2>MA Civil Lecture</h2>
  <p> Sept-2019 till Present</p>
  <p>Give Information to the Students Regarding all the Official Circular / Examination / Results / Study Materials for Mumbai University / MSBTE. 
</p>
</div>
</div>


</div>



    </>
  )
}

export default WorkExp;
