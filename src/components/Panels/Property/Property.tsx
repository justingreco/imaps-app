
import {  CalciteScrim,
  CalciteTab,
  CalciteTabNav,
  CalciteTabs,
  CalciteTabTitle,
  CalcitePanel,
  CalciteButton,
  CalciteAction,
} from "@esri/calcite-components-react";
import React from "react";
import "./Property.css";
import PropertySearch from "./PropertySearch/PropertySearch";
import PropertyTable from "./PropertyTable/PropertyTable";
import PropertyInfo from "./PropertyInfo/PropertyInfo";
import useProperty from "./utils/useProperty";
function Property(args: any) {
  const { 
    condos,
    feature,
    infoDisabled,
    searching,
    setSearching,
    activeTab,
    isActive,
    condosSelected,
    featureSelected,
    panelDismissed,
    clearSearch,
    tipsClicked
  } = useProperty(args);

  return (
    <CalcitePanel
      id="search-panel"
      heading="Property Search"
      hidden={!isActive}
      closed={!isActive ? true : undefined}
      dismissed={!isActive ? true : undefined}
      dismissible
      onCalcitePanelDismiss={panelDismissed}
    >
      <CalciteAction icon="lightbulb"  text="Tips" slot="header-actions-end" onClick={tipsClicked}></CalciteAction>
      <div className="property">
        {args.view && (
          <div className="row"><PropertySearch
            view={args.view}
            searchingChanged={(isSearching: boolean) =>
              setSearching(isSearching)
            }
            condosSelected={condosSelected}
          ></PropertySearch>
          <CalciteButton iconEnd="trash" color="neutral" scale="m"
            onClick={() => {
              clearSearch(args.view);
            }}
          ></CalciteButton>
          </div>
        )}
        <CalciteTabs position="below" layout="center" scale="l">
          <CalciteTabNav slot="tab-nav">
            <CalciteTabTitle active={activeTab === "list" ? true : undefined}>
              List
            </CalciteTabTitle>
            <CalciteTabTitle
              active={activeTab === "info" ? true : undefined}
              disabled={infoDisabled === true ? true : undefined}
            >
              Info
            </CalciteTabTitle>
          </CalciteTabNav>
          <CalciteTab>
            {args.view && (
              <PropertyTable
                view={args.view}
                condos={condos}
                featureSelected={featureSelected}
              ></PropertyTable>
            )}
          </CalciteTab>
          <CalciteTab>
            {args.view && (
              <PropertyInfo view={args.view} feature={feature}></PropertyInfo>
            )}
          </CalciteTab>
          <CalciteScrim
            loading
            hidden={!searching ? true : undefined}
          ></CalciteScrim>
        </CalciteTabs>
      </div>
    </CalcitePanel>
  );
}

export default React.memo(Property);
