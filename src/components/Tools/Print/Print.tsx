import {
  CalciteButton,
  CalciteCheckbox,
  CalciteInput,
  CalciteLabel,
  CalciteLink,
  CalciteLoader,
  CalciteOption,
  CalciteRadioButton,
  CalciteRadioButtonGroup,
  CalciteSelect,
  CalcitePanel,
  CalciteAction,
  CalciteTooltip,
} from "@esri/calcite-components-react";
import React, { useCallback } from "react";
import "./Print.css";
import {
  getScales,
  exportClicked,
} from "./utils/print";

import { collapsePanel } from "../../Shell/utils/shell";
import usePrint from "./utils/usePrint";
function Print(args: any) {
  const { isActive, title, setSelectedLayout, layouts,  selectedFormat,
    setSelectedFormat, formats, setScaleType,
    scaleType, customScaleSelect, setCustomScale,
    customScale, userDefined, selectedProperty,
    selectedLayout, attributes, legend, setJobs, jobs, jobRef, tipsClicked } = usePrint(args);
  const toolDismissed = useCallback((e: any) => {
    args.toolDismissed();
  }, []);
  return (
    <CalcitePanel
      id="print-panel"
      heading="Print"
      data-panel="print"
      hidden={!isActive}
      closed={!isActive ? true : undefined}
      closable
      onCalcitePanelClose={toolDismissed}
    >
      <CalciteAction id="tip" icon="lightbulb"  text="Tips" slot="header-actions-end" onClick={tipsClicked}></CalciteAction>
      <CalciteAction
        id="collapseTool"
        icon="chevron-up"
        text=""
        slot="header-actions-end"
        onClick={collapsePanel}
      ></CalciteAction>
      <CalciteTooltip label="Show Tip" referenceElement="tip">Show Tip</CalciteTooltip>
      <CalciteTooltip label="Collapse" referenceElement="collapseTool">Collapse</CalciteTooltip>      
      <div id="print-container">
        <CalciteLabel>
          Title
          <CalciteInput ref={title} maxLength={50}></CalciteInput>
        </CalciteLabel>
        <CalciteLabel>
          Page size
          <CalciteSelect
            label={""}
            onCalciteSelectChange={(e) =>
              setSelectedLayout(e.target.selectedOption.value)
            }
          >
            {layouts.map((layout, i) => {
              return (
                <CalciteOption
                  key={i}
                  label={layout.label}
                  value={JSON.stringify(layout)}
                ></CalciteOption>
              );
            })}
          </CalciteSelect>
        </CalciteLabel>
        <CalciteLabel>
          File format
          <CalciteSelect
            label={""}
            onCalciteSelectChange={(e) =>
              setSelectedFormat(e.target.selectedOption.value)
            }
          >
            {formats.map((format, i) => {
              return (
                <CalciteOption
                  key={i}
                  label={format}
                  value={format}
                ></CalciteOption>
              );
            })}
          </CalciteSelect>
        </CalciteLabel>
        <CalciteRadioButtonGroup
          name="scale-radio"
          onCalciteRadioButtonGroupChange={(e) => {
            setScaleType(e.detail);
          }}
        >
          <CalciteLabel layout="inline">
            <CalciteRadioButton
              checked={scaleType === "current" ? true : undefined}
              value="current"
            ></CalciteRadioButton>
            Current Scale
          </CalciteLabel>
          <CalciteLabel layout="inline">
            <CalciteRadioButton
              checked={scaleType === "custom" ? true : undefined}
              value="custom"
            ></CalciteRadioButton>
            Custom Scale
          </CalciteLabel>
        </CalciteRadioButtonGroup>
        {scaleType === "custom" && (
          <CalciteLabel>
            Scale
            <CalciteSelect
              ref={customScaleSelect}
              label={""}
              onCalciteSelectChange={(e) =>
                setCustomScale(e.target.selectedOption.value)
              }
            >
              {args?.view &&
                getScales(args?.view).map((scale, i) => {
                  return (
                    <CalciteOption
                      key={i}
                      label={scale.label}
                      value={scale.scale}
                    ></CalciteOption>
                  );
                })}
            </CalciteSelect>
          </CalciteLabel>
        )}
        {scaleType === "custom" && customScale === "custom" && (
          <CalciteInput
            ref={userDefined}
            type="number"
            prefixText={`1" = `}
            suffixText={`'`}
            min={1}
            max={50000}
          ></CalciteInput>
        )}
        <br />
        {selectedProperty && (
          <CalciteLabel layout="inline">
            <CalciteCheckbox
              ref={attributes}
              value="attributes"
            ></CalciteCheckbox>
            Include attributes?
          </CalciteLabel>
        )}
        <CalciteLabel layout="inline">
          <CalciteCheckbox ref={legend} value="legend"></CalciteCheckbox>Include
          Legend?
        </CalciteLabel>
        <CalciteLabel layout="inline">
          <CalciteCheckbox value="showFrame"></CalciteCheckbox>Show map frame?
        </CalciteLabel>
        <CalciteButton
          width="full"
          onClick={() => {exportClicked(
            args.view, 
            args.exportUrl,
            scaleType,
            customScale,
            userDefined?.current?.value,
            selectedLayout,
            selectedFormat,
            selectedProperty,
            title.current?.value,
            attributes.current?.checked,
            legend.current?.checked,
            jobRef,
            jobs,
            setJobs
            )}}
        >
          Export
        </CalciteButton>
        <hr></hr>
        <h4>Exported files</h4>
        {jobs.length <= 0 && <p>Your exported files will appear here</p>}
        <div id="printJobs">
          {jobs.map((job: any) => {
            return (
              <div key={`printjob_${job.submitted}`} className="print-job">
                {job.loading && (
                  <div>
                    <CalciteLoader
                      scale="s"
                      inline
                      active
                      label={""}
                    ></CalciteLoader>
                    <span className="loader-text">{`${
                      job.title !== "" ? job.title : "untitled"
                    }`}</span>
                  </div>
                )}
                {job.url && !job.loading && (
                  <div>
                    <CalciteLink
                      target="_blank"
                      icon-start="download"
                      href={job.url}
                    >{`${
                      job.title !== "" ? job.title : "untitled"
                    }`}</CalciteLink>
                    <CalciteButton
                      appearance="transparent"
                      icon-start="x"
                      scale="s"
                      onClick={() => {
                        jobRef.current = jobs.filter(
                          (item) => item.title !== job.title
                        );
                        setJobs(jobs.filter((item) => item !== job));
                      }}
                    ></CalciteButton>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </CalcitePanel>
  );
}

export default React.memo(Print);



