import Logo from "../../../assets/logo.png"
import moment from 'moment';
const Header = () => {
    return (
        <div>
            <img src={Logo} alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, quia.</p>
            <p>
                {moment().format('MMMM d YYYY,  a')}
            </p>
        </div>
    );
};

export default Header;