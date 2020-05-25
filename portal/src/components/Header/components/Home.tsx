import React from "react";
import { Link } from "gatsby";
import { useLocation } from "../../../contexts/locationContext";

interface Props {
    className: string;
    closeMenu: () => void;
}

export const Home: React.FC<Props> = ({ className, children, closeMenu }) => {
    const { currentSection } = useLocation();

    return currentSection === "" ? (
        <button className={className} onClick={closeMenu}>
            {children}
        </button>
    ) : (
        <Link to="/" className={className}>
            {children}
        </Link>
    );
};
