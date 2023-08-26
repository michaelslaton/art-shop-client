import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { lightSwitch } from '../../../redux/slices/lightsSlice';
import './lightSwitchButton.css';

const LightSwitchButton: React.FC = () => {
  const lightsOn = useAppSelector((state)=>state.lights.lightsOn)
  const dispatch = useAppDispatch();

  return (
    <>
      <button className={`lightSwitch ${ lightsOn ? "" : "dark"}`} onClick={()=> dispatch(lightSwitch())}>
        O
      </button>
    </>
  );
}

export default LightSwitchButton;