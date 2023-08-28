import { useState, useEffect, useRef } from "react";
import { useAppSelector } from "../../../../redux/hooks";
import "./navDropdown.css";

type NavDropdownProps = {
  children: JSX.Element;
  title: string;
}

const NavDropdown: React.FC<NavDropdownProps> = ({ children, title }) => {
  const [isHovering, setIsHovering] = useState(false);
  const lightsOn = useAppSelector((state)=>state.lights.lightsOn);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      function handler(event: Event) {
        if(!dropdownRef.current?.contains(event.target as HTMLInputElement)) setIsHovering(false);
      };

      window.addEventListener('click', handler);
      return () => window.removeEventListener('click', handler);
  }, []);

  return (
    <div ref={dropdownRef} className="navbar__dropdown">
      <button
        className={`navbar__button ${ isHovering ? "active" : ""} ${ lightsOn ? "" : "dark"}`}
        onClick={()=> {
          setIsHovering(!isHovering)}
          }>
          {title}
      </button>
      <div className={`navbar__dropdown-menu ${ isHovering ? "active" : ""} ${ lightsOn ? "" : "dark"}`}
        onMouseLeave={()=>setIsHovering(false)}>
          {children}
      </div>
    </div>
  )
}

export default NavDropdown;