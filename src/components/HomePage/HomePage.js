import './HomePage.css';
import 'semantic-ui-css/semantic.min.css'
import {BottomSide} from '../BottomSide/BottomSide';
import {NavBarHome} from '../NavBarHome/NavBarHome';
import { Provider } from 'react-redux';
import store from '../../store';



//Create function component
export const HomePage =(props) =>{
  return (

    <div className="container-fluid">
      <Provider store={store} >
        <div className="UpSide">
          <NavBarHome/>
        </div>
        <div className="BottomSide">
          <BottomSide/>
        </div>
      </Provider>
    </div>
  );
}

