/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { useThemeConfig } from "@docusaurus/theme-common";
import useHideableNavbar from "@theme/hooks/useHideableNavbar";
import useLockBodyScroll from "@theme/hooks/useLockBodyScroll";
import useThemeContext from "@theme/hooks/useThemeContext";
import useWindowSize, { windowSizes } from "@theme/hooks/useWindowSize";
import IconMenu from "@theme/IconMenu";
import Logo from "@theme/Logo";
import NavbarItem from "@theme/NavbarItem";
import SearchBar from "@theme/SearchBar";
import Toggle from "@theme/Toggle";
import clsx from "clsx";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.css"; // retrocompatible with v1

const DefaultNavItemPosition = "right"; // If split links by left/right
// if position is unspecified, fallback to right (as v1)

function splitNavItemsByPosition(items) {
  const leftItems = items.filter(
    (item) => (item.position ?? DefaultNavItemPosition) === "left"
  );
  const rightItems = items.filter(
    (item) => (item.position ?? DefaultNavItemPosition) === "right"
  );
  return {
    leftItems,
    rightItems,
  };
}

function removeSearchFromNavbar(items) {
  for (var i = 0; i < items.length; i++) {
    if (items[i].type === "search") {
      items.splice(i, 1);
    }
  }
  return items;
}

function Navbar() {
  const {
    navbar: { items, hideOnScroll, style },
    colorMode: { disableSwitch: disableColorModeSwitch },
  } = useThemeConfig();
  filteredItems = removeSearchFromNavbar(items);
  const [sidebarShown, setSidebarShown] = useState(false);
  const { isDarkTheme, setLightTheme, setDarkTheme } = useThemeContext();
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);
  useLockBodyScroll(sidebarShown);
  const showSidebar = useCallback(() => {
    setSidebarShown(true);
  }, [setSidebarShown]);
  const hideSidebar = useCallback(() => {
    setSidebarShown(false);
  }, [setSidebarShown]);
  const onToggleChange = useCallback(
    (e) => (e.target.checked ? setDarkTheme() : setLightTheme()),
    [setLightTheme, setDarkTheme]
  );
  const windowSize = useWindowSize();
  useEffect(() => {
    if (windowSize === windowSizes.desktop) {
      setSidebarShown(false);
    }
  }, [windowSize]);
  const hasSearchNavbarItem = filteredItems.some(
    (item) => item.type === "search"
  );
  const { leftItems, rightItems } = splitNavItemsByPosition(filteredItems);
  return (
    <nav
      ref={navbarRef}
      className={clsx("navbar", "navbar--fixed-top", {
        "navbar--dark": style === "dark",
        "navbar--primary": style === "primary",
        "navbar-sidebar--show": sidebarShown,
        [styles.navbarHideable]: hideOnScroll,
        [styles.navbarHidden]: hideOnScroll && !isNavbarVisible,
      })}
    >
      <div className="navbar__inner">
        <div className="navbar__items">
          {filteredItems != null && filteredItems.length !== 0 && (
            <button
              aria-label="Navigation bar toggle"
              className="navbar__toggle clean-btn"
              type="button"
              tabIndex={0}
              onClick={showSidebar}
              onKeyDown={showSidebar}
            >
              <IconMenu />
            </button>
          )}
          <Logo
            className="navbar__brand"
            imageClassName="navbar__logo"
            titleClassName="navbar__title"
          />
          {leftItems.map((item, i) => (
            <NavbarItem {...item} key={i} />
          ))}
        </div>
        <div className="navbar__items navbar__items--right">
          {rightItems.map((item, i) => (
            <NavbarItem {...item} key={i} />
          ))}
          {!disableColorModeSwitch && (
            <Toggle
              className={styles.displayOnlyInLargeViewport}
              checked={isDarkTheme}
              onChange={onToggleChange}
            />
          )}
          {hasSearchNavbarItem && <SearchBar />}
        </div>
      </div>
      <div
        role="presentation"
        className="navbar-sidebar__backdrop"
        onClick={hideSidebar}
      />
      <div className="navbar-sidebar">
        <div className="navbar-sidebar__brand">
          <Logo
            className="navbar__brand"
            imageClassName="navbar__logo"
            titleClassName="navbar__title"
            onClick={hideSidebar}
          />
          {!disableColorModeSwitch && sidebarShown && (
            <Toggle checked={isDarkTheme} onChange={onToggleChange} />
          )}
        </div>
        <div className="navbar-sidebar__items">
          <div className="menu">
            <ul className="menu__list">
              {filteredItems.map((item, i) => (
                <NavbarItem
                  mobile
                  {...item} // TODO fix typing
                  onClick={hideSidebar}
                  key={i}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
