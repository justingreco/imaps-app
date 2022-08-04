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
} from "@esri/calcite-components-react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Print.css";
import {
  getFormats,
  getLayouts,
  getPrintScale,
  getScales,
  getPrintTemplate,
  getTemplateName,
  getCustomElements,
  exportMap,
} from "./utils/print";
import { collapsePanel } from "../../Shell/utils/shell";
function Print(args: any) {
  const loaded = useRef(false);
  const [isActive, setIsActive] = useState(false);

  const customScaleSelect = useRef(null);

  const attributes = useRef<HTMLCalciteCheckboxElement>(null);
  const legend = useRef<HTMLCalciteCheckboxElement>(null);

  const userDefined = useRef<HTMLCalciteInputElement>(null);
  const title = useRef<HTMLCalciteInputElement>(null);
  const jobRef = useRef<any[]>([]);

  const [layouts, setLayouts] = useState<any[]>([]);
  const [formats, setFormats] = useState<any[]>([]);
  const [view, setView] = useState<__esri.MapView>();
  const [scaleType, setScaleType] = useState("current");
  const [customScale, setCustomScale] = useState<any>();
  const [selectedProperty, setSelectedProperty] = useState<__esri.Graphic>();
  const [selectedLayout, setSelectedLayout] = useState<any>();
  const [selectedFormat, setSelectedFormat] = useState<string>();
  const [jobs, setJobs] = useState<any[]>([]);

  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;
      setView(args.view);
      getLayouts().then((layouts) => {
        setLayouts(layouts);
        setSelectedLayout(layouts[0]);
      });
      getFormats(args.exportUrl).then((formats) => {
        setFormats(formats);
        setSelectedFormat(formats[0]);
      });
    }
  }, []);

  useEffect(() => {
    setSelectedProperty(args.selectedProperty);
  }, [args.selectedProperty]);
  useEffect(() => {
    setIsActive(args.isActive);
  }, [args.isActive]);
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
      dismissed={!isActive ? true : undefined}
      dismissible
      onCalcitePanelDismiss={toolDismissed}
    >
      <CalciteAction
        icon="chevron-up"
        text=""
        slot="header-actions-end"
        onClick={collapsePanel}
      ></CalciteAction>
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
              {view &&
                getScales(view).map((scale, i) => {
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
          onClick={() => {
            // let scale = scaleType === 'current' ? view?.scale;
            // scale = scaleType === 'custom' ?
            // userDefined.current.value;
            if (view) {
              const scale: number = getPrintScale(
                scaleType,
                view?.scale,
                customScale,
                userDefined?.current
                  ? parseInt(userDefined.current.value)
                  : undefined
              );
              //exportMap(args.exportUrl, view, view.scale);
              const customElements: any[] = getCustomElements(
                selectedLayout.size,
                scale,
                attributes?.current?.checked,
                selectedProperty
              );
              const template = getTemplateName(
                selectedLayout,
                attributes?.current?.checked,
                legend?.current?.checked
              );

              const printTemplate = getPrintTemplate(
                scale,
                selectedFormat,
                title?.current?.value,
                customElements,
                view,
                template
              );
              const job = {
                title: title.current?.value,
                loading: true,
                submitted: new Date().getTime().toString(),
                href: null,
              };
              setJobs([...jobs, job]);
              jobRef.current = [...jobRef.current, job];
              const oldScale = view.scale;
              if (printTemplate.outScale !== view.scale) {
                view.scale = printTemplate.outScale;
              }
              setTimeout(() => {
                exportMap(
                  args.exportUrl,
                  printTemplate,
                  view,
                  oldScale,
                  selectedFormat as string
                )
                  .then((result) => {
                    setTimeout(() => {
                      //graphics.visible = true;
                      const index = jobRef.current.indexOf(job);
                      jobRef.current[index] = {
                        ...jobRef.current[index],
                        ...{ url: result.url, loading: false },
                      };
                      setJobs([...jobRef.current]);
                    });
                  })
                  .catch((reason) => {
                    console.log(reason);
                    //graphics.visible = true;
                    const index = jobRef.current.indexOf(job);
                    jobRef.current[index] = {
                      ...jobRef.current[index],
                      ...{ error: true, loading: false },
                    };
                    setJobs([...jobRef.current]);
                  });
              }, 1000);
            }
          }}
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
