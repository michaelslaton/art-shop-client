import { useAppDispatch } from '../../redux/hooks';
import { lightSwitch } from '../../redux/slices/lightsSlice';
import './lightSwitchButton.css';

const LightSwitchButton: React.FC = () => {
    const dispatch = useAppDispatch();

    return (
        <>
            <button onClick={()=> dispatch(lightSwitch())}>Light Switch</button>
        </>
    );
}

export default LightSwitchButton;