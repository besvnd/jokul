import React, { useLayoutEffect, useState } from "react";
import classNames from "classnames";

import { useFullscreenMenu } from "../../contexts/fullscreenMenuContext";
import { useNavigationLinks } from "./useNavigationLinks";
import { FullScreenMenu } from "./components/FullScreenMenu";
import { Home } from "./components/Home";
import "./header.scss";

export const Header = ({ className }: { className?: string }) => {
    const { setMenuIsOpen } = useFullscreenMenu();
    const [collapsed, setCollapsed] = useState(false);

    const closeMenu = () => setMenuIsOpen("");
    const handleScroll = () => {
        setCollapsed(window.scrollY > 96);
    };

    useLayoutEffect(() => {
        setMenuIsOpen("");
        window && window.addEventListener("scroll", handleScroll);

        return () => window && window.removeEventListener("scroll", handleScroll);
    }, [setMenuIsOpen]);

    const { profileDocPages, getStartedDocPages, componentDocPages, PageType } = useNavigationLinks();
    const componentClassName = classNames(
        {
            "jkl-portal-header": true,
            "jkl-portal-header--collapsed": collapsed,
        },
        className,
    );

    return (
        <header className={componentClassName}>
            <Home className="jkl-portal-header__title" closeMenu={closeMenu}>
                Jøkul
            </Home>
            <nav className="jkl-portal-header__navigation">
                <ul className="jkl-portal-header__navigation-list">
                    <li className="jkl-portal-header__navigation-item">
                        <FullScreenMenu
                            filterable
                            title="Profilen vår"
                            items={profileDocPages}
                            activePath={PageType.PROFIL}
                        />
                    </li>
                    <li className="jkl-portal-header__navigation-item">
                        <FullScreenMenu
                            filterable
                            title="Komponenter"
                            items={componentDocPages}
                            activePath={PageType.KOMPONENTER}
                        />
                    </li>
                    <li className="jkl-portal-header__navigation-item">
                        <FullScreenMenu title="Kom i gang" items={getStartedDocPages} activePath={PageType.KOMIGANG} />
                    </li>
                </ul>
            </nav>
        </header>
    );
};
