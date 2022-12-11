import './HomePage.css';
import 'semantic-ui-css/semantic.min.css'
import {BottomSide} from '../BottomSide/BottomSide';
import {NavBarHome} from '../NavBarHome/NavBarHome';
import Cookies from 'universal-cookie';


//Create function component
export const HomePage =(props) =>{
  return (

    <div className="container-fluid">
      <div className="UpSide">
        <NavBarHome/>
      </div>
      <div className="BottomSide">
        <BottomSide/>
      </div>
  </div>
  );
}

