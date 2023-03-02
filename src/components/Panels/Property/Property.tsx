
import {  CalciteScrim,
  CalciteTab,
  CalciteTabNav,
  CalciteTabs,
  CalciteTabTitle,
  CalcitePanel,
  CalciteButton,
  CalciteAction,
  CalciteTooltip,
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
      closable
      onCalcitePanelClose={panelDismissed}
    >
      <CalciteAction id="tip" icon="lightbulb"  text="Tips" slot="header-actions-end" onClick={tipsClicked}></CalciteAction>
      <CalciteTooltip label="Show Tip" referenceElement="tip">Show Tip</CalciteTooltip>
      <div className="property">
        {args.view && (
          <div className="row"><PropertySearch
            view={args.view}
            searchingChanged={(isSearching: boolean) =>
              setSearching(isSearching)
            }
            condosSelected={condosSelected}
          ></PropertySearch>
          <CalciteButton id="clearSelection" iconEnd="trash" appearance="transparent" scale="m" kind="neutral"
            onClick={() => {
              clearSearch(args.view);
            }}
          ></CalciteButton>
          <CalciteTooltip referenceElement="clearSelection" label="Clear Selection">Clear Selection</CalciteTooltip>
          </div>
        )}
        <CalciteTabs position="bottom" layout="center" scale="l">
          <CalciteTabNav  slot="title-group">
            <CalciteTabTitle  selected={activeTab === "list" ? true : undefined}>
              List
            </CalciteTabTitle>
            <CalciteTabTitle
              disabled={infoDisabled === true ? true : undefined}
              selected={activeTab === "info" ? true : undefined}
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
