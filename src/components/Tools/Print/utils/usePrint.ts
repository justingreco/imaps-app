import { useEffect, useRef, useState } from "react";
import {
    getFormats,
    getLayouts,
  } from "../utils/print";
  
const usePrint = (args: any) => {

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
    const [scaleType, setScaleType] = useState("current");
    const [customScale, setCustomScale] = useState<any>();
    const [selectedProperty, setSelectedProperty] = useState<__esri.Graphic>();
    const [selectedLayout, setSelectedLayout] = useState<any>();
    const [selectedFormat, setSelectedFormat] = useState<string>();
    const [jobs, setJobs] = useState<any[]>([]);
  
    useEffect(() => {
      if (!loaded.current) {
        loaded.current = true;
        getLayouts().then((layouts: any) => {
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
    return {isActive, title, setSelectedLayout, layouts, 
        selectedFormat,
        setSelectedFormat, formats, setScaleType,
        scaleType, customScaleSelect, setCustomScale,
        customScale, userDefined, selectedProperty,
        selectedLayout, attributes, legend, setJobs, jobs, jobRef};
};

export default usePrint;