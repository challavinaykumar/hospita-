import React, { useRef } from "react";
import { Link } from "react-router-dom";
import './Nav.css'
import nav_logo from '../Images/hospital_logo.png'


const Nav = () => {
    const bar = useRef()
    const menu_style = useRef()
    const head_scroll = useRef()
    const drop_sub_1 = useRef()
    const drop_sub_2 = useRef()
    const menu_vis = ()=>{
        bar.current.classList.toggle('visible')
        menu_style.current.classList.toggle('fa-x')
    }

    window.onscroll=()=>{
        if(window.scrollY>0){
            head_scroll.current.style.background = '#fff'
            head_scroll.current.style.transition = '0.3s'
            drop_sub_1.current.classList.add('drop_add')
            drop_sub_2.current.classList.add('drop_add')

        }
        else{
            head_scroll.current.style.background = 'none'
            drop_sub_1.current.classList.remove('drop_add')
            drop_sub_2.current.classList.remove('drop_add')
        }
    }
  return (
    <div>
      <header className="d-flex align-items-center justify-content-between" ref={head_scroll}>
        <div className="">
          <img className="logo_img" src={nav_logo} alt="" />
        </div>
        <div className="d-flex align-items-center gap-4">
          <ul className="nav_links " ref={bar}>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/About"}>About</Link>
            </li>
            <li>
              <Link to={"/Ourdoctors"}>Our Doctors</Link>
            </li>
            <li className="drop_menu_main">Departments <i class="fa-solid fa-caret-down" style={{color:'#2A3D53'}}></i>
              <ul className="drop_menu_sub" ref={drop_sub_1}>
                <li><Link className="drop_a" to={'/Pheriperal'}>Peripheral Vascular Sciences</Link></li>
                <li><Link className="drop_a" to={'/Cardiovascular'}>Cardiovascular Sciences / CT Surgeries</Link></li>
                <li><Link className="drop_a" to={'/Pulmonology'}>Pulmonology</Link></li>
              </ul>
            </li>
            <li className="drop_menu_main" >Sugeries <i class="fa-solid fa-caret-down" style={{color:'#2A3D53'}}></i>
              <ul className="drop_menu_sub" ref={drop_sub_2}>
                <li><Link className="drop_a" to={'/venous'}>Venous surgeries</Link></li>
                <li><Link className="drop_a" to={'/Arterial'}>Arterial surgeries</Link></li>
                <li><Link className="drop_a" to={'/Endovascular'}>Endovascular Arterial Procedures</Link></li>
                <li><Link className="drop_a" to={'/Cerebrovascular'}>Cerebrovascular procedures</Link></li>
                <li><Link className="drop_a" to={'Renovascular'}>Renovascular procedures</Link></li>
                <li><Link className="drop_a" to={'/Cardio'}>Cardiovascular procedures</Link></li>
              </ul>
            </li>
            {/* <li>
              <Link to={""}>Sugeries </Link>
            </li> */}
            <li>
              <Link to={"/Contact"}>Contact</Link>
            </li>
          </ul>
          <button className="btn book p-2">Book on ZocDoc</button>
          <div className="" id="menu_btn">
          <i class="fa-solid fa-bars" onClick={menu_vis} ref={menu_style}></i>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;
