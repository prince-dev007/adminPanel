import "./Dashboard.css";
import $ from "jquery";
import Sidebar from '../assets/img/sidebar.png';
import Chart1 from '../assets/img/chart1.png'
import Chart2 from '../assets/img/chart2.png'
import Post from '../assets/img/post.png';
import Post2 from '../assets/img/124903.jpg';
import Post3 from '../assets/img/product3.jpg';
import User from '../assets/img/user.jpg'
function Dashboard() {
  $(document).ready(function () {
    window.$(".sidenav ").sidenav();
    window.$(".dropdown-trigger").dropdown();
  });

  return (
    <>
      <nav>
        <div class="nav-wrapper ">
          <a href="#Admin" class="brand-logo center">
            Admin Panel
          </a>
          <a href="#Admin" class="right sidenav-trigger" data-target="slide-out">
            <i class="material-icons">menu</i>
          </a>
          <ul class="right hide-on-med-and-down">
            <li></li>
            <li>
              <a class="dropdown-trigger" href="#Admin" data-target="dropdown1">
                Profile<i class="material-icons right">arrow_drop_down</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <ul id="dropdown1" class="dropdown-content">
        <li>
          <a href="#Admin">Settings</a>
        </li>
        <li class="divider"></li>
        <li>
          <a href="#Admin">Logout</a>
        </li>
      </ul>

      <ul id="slide-out" class="sidenav sidenav-fixed">
        <li>
          <div class="user-view">
            <div class="background">
              <img src={Sidebar } alt="Admin" />
            </div>
            <a href="#user">
              <img class="circle" src={User} alt="Admin" />
            </a>
            <a href="#name">
              <span class="white-text name">Prince Singh</span>
            </a>
            <a href="#email">
              <span class="white-text email">admin123@gmail.com</span>
            </a>
          </div>
        </li>

        <li>
          <a  href="#Admin">
            <i class="material-icons blue-text">dashboard</i>Dashboard
          </a>
        </li>
        <li>
          <a href="#Admin">
            <i class="material-icons blue-text">dns</i>Category
          </a>
        </li>
        <li>
          <a href="#Admin">
            <i class="material-icons blue-text">domain</i>Subcategory
          </a>
        </li>
        <li>
          <a href="#Admin">
            <i class="material-icons blue-text">perm_data_setting</i>Settings
          </a>
        </li>
      
        <li>
          <div class="divider"></div>
        </li>
        <li>
          <a class="waves-effect" href="#Admin">
          <i class="material-icons blue-text">help</i>Help
          </a>
        </li>
       
        <li>
          <a class="waves-effect" href="#Admin">
          <i class="material-icons blue-text">power_settings_new</i>Logout
          </a>
        </li>
      </ul>

      <div class="container-fluid main">
          <div class="row">
                <div class="col l4 m4 s12">
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={Chart1} alt="Admin" />
                </div>
                <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">Total Category<i class="material-icons right">more_vert</i></span>
                <p><a href="#Admin">View</a></p>
                </div>
                <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
            </div>
            </div>
            <div class="col l4 m4 s12">
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                <img class="activator"  alt="Admin" src={Chart2}/>
                </div>
                <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">Total Subcategory<i class="material-icons right">more_vert</i></span>
                <p><a href="#Admin">View</a></p>
                </div>
                <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
            </div>
            </div>
            <div class="col l4 m4 s12">
            <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
        <img class="activator"  src={Chart2} alt="Admin"/>
        </div>
        <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">Total Products<i class="material-icons right">more_vert</i></span>
        <p><a href="#Admin">View</a></p>
        </div>
        <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
        <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
         </div>
            </div>
          </div>
          
          <div class="row">
              <div class="col l6 s12">
                    <div class="card">
                        <ul class="collection with-header blue">
                                <li class="collection-header blue">
                                <h5 class="white-text">Recent Category Added</h5> 
                                </li>
                                <li class="collection-item avatar">
                                <img src={Post} class="circle" alt="Admin"/>
                                <span class="title">Guitars</span>
                                <p>Classical Guitars<br/> </p>
                                <a href="#Admin" class="secondary-content"><i class="material-icons">grade</i></a>
                                </li>
                                <li class="collection-item avatar">
                                <img src={Post2}  alt="Admin" class="circle"/>
                                <span class="title">Guitars</span>
                                <p>Electronic Guitars<br/> </p>
                                <a href="#Admin" class="secondary-content"><i class="material-icons">grade</i></a>
                                </li>
                                <li class="collection-item avatar">
                                <img src={Post3}  alt="Admin" class="circle"/>
                                <span class="title">Guitars</span>
                                <p>Acoustic Guitars<br/> </p>
                                <a href="#Admin" class="secondary-content"><i class="material-icons">grade</i></a>
                                </li>
                            </ul>
                        </div>
                  </div>
                  <div class="col l6 s12">
                  <div class="card">
                        <ul class="collection with-header blue">
                                <li class="collection-header blue">
                                <h5 class="white-text">Recent Products Added</h5> 
                                </li>
                                <li class="collection-item avatar">
                                <img src={Post}  class="circle" alt="Admin"/>
                                <span class="title">Guitars</span>
                                <p>First Line <br/>
                                    Second Line
                                </p>
                                <a href="#Admin" class="secondary-content"><i class="material-icons">grade</i></a>
                                </li>
                                <li class="collection-item avatar">
                                <img src={Post2}  alt="Admin" class="circle"/>
                                <span class="title">Guitars</span>
                                <p>First Line <br/>
                                    Second Line
                                </p>
                                <a href="#Admin" class="secondary-content"><i class="material-icons">grade</i></a>
                                </li>
                                <li class="collection-item avatar">
                                <img src={Post3} alt="Admin"class="circle"/>
                                <span class="title">Guitars</span>
                                <p>First Line <br/>
                                    Second Line
                                </p>
                                <a href="#Admin" class="secondary-content"><i class="material-icons">grade</i></a>
                                </li>
                            </ul>
                        </div>
                  </div>
              </div>
          </div>
    </>
  );
}

export default Dashboard;
