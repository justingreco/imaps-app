import "@esri/calcite-components/dist/components/calcite-label";
import "@esri/calcite-components/dist/components/calcite-switch";
import "@esri/calcite-components/dist/components/calcite-dropdown";
import "@esri/calcite-components/dist/components/calcite-dropdown-group";
import "@esri/calcite-components/dist/components/calcite-dropdown-item";
import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-icon";
import "@esri/calcite-components/dist/components/calcite-modal";

import {
  CalciteButton,
  CalciteDropdown,
  CalciteDropdownGroup,
  CalciteDropdownItem,
  CalciteIcon,
  CalciteLabel,
  CalciteModal,
  CalciteSwitch,
} from "@esri/calcite-components-react";
import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { toggleTheme } from "./utils";
function Header() {
  const logo = useRef<HTMLImageElement>(null);
  const ref = useRef<HTMLElement>();

  const disclaimer = useRef<HTMLCalciteModalElement>();
  const [links, setLinks] = useState<any[]>();

  useEffect(() => {
    fetch("./config.json").then((response) => {
      response.json().then((config) => {
        setLinks(config.links);
      });
    });
  }, []);
  return (
    <div slot="header" id="header">
      <div>
        <img ref={logo} alt="imaps" src="logo.svg" className="logo" />
      </div>
      <div id="header-controls">
        <CalciteDropdown
          ref={ref as any}
          placement="bottom-end"
          scale="m"
          width="l"
          type="click"
        >
          <CalciteButton scale="m" slot="dropdown-trigger">
            <CalciteIcon icon="hamburger" scale="m"></CalciteIcon>
          </CalciteButton>
          <CalciteDropdownGroup
            selection-mode="none"
            group-title="About"
            key="disclaimer"
          >
            <CalciteDropdownItem
              onClick={() => {
                if (disclaimer.current) {
                  disclaimer.current.active = true;
                }
              }}
            >
              Disclaimer
            </CalciteDropdownItem>
          </CalciteDropdownGroup>
          {links &&
            links.map((group: any) => {
              return (
                <CalciteDropdownGroup
                  selection-mode="none"
                  group-title={group.title}
                  key={group.title}
                >
                  {group.links.map((link: any) => {
                    return (
                      <CalciteDropdownItem
                        rel="noreferrer"
                        href={link.href}
                        target="_blank"
                        key={link.title}
                      >
                        {link.title}
                      </CalciteDropdownItem>
                    );
                  })}
                </CalciteDropdownGroup>
              );
            })}
          <CalciteDropdownGroup selectionMode="none" group-title="Theme">
            <CalciteDropdownItem>
              <CalciteLabel layout="inline" className="label-wrapper">
                Light
                <CalciteIcon icon="brightness" scale="s"></CalciteIcon>
                <CalciteSwitch
                  onCalciteSwitchChange={() => {
                    const isDark = toggleTheme();
                    if (logo.current) {
                      logo.current.src = isDark ? "logo_dark.svg" : "logo.svg";
                    }
                  }}
                ></CalciteSwitch>
                <CalciteIcon icon="moon" scale="s"></CalciteIcon>
                Dark
              </CalciteLabel>
            </CalciteDropdownItem>
          </CalciteDropdownGroup>
        </CalciteDropdown>
      </div>
      <CalciteModal ref={disclaimer as any} aria-labelledby="modal-title">
        <div slot="header" id="modal-title">
          Disclaimer
        </div>
        <div slot="content">
          iMAPS makes every effort to produce and publish the most current and
          accurate information possible. However, the maps are productions for
          information purposed, and are NOT surveys. No warranties, expressed or
          implied, are provided for the data therein, its use, or its
          interpretation. Register of Deeds documents accessed through this site
          are unofficial. The official records are maintained at the Wake County
          Register of Deeds office. The Wake County Register of Deeds assumes no
          responsibility or liability associated with the use or misused of this
          data.
        </div>
        <CalciteButton
          slot="primary"
          width="full"
          onClick={() => {
            if (disclaimer.current) {
              disclaimer.current.active = false;
            }
          }}
        >
          Close
        </CalciteButton>
      </CalciteModal>
    </div>
  );
}

export default Header;
