import React, { useCallback } from "react";
import { useEffect, useRef, useState } from "react";
import { CalcitePanel, CalciteAction } from "@esri/calcite-components-react";
import { initializeBookmarks } from "./utils/bookmarks";
import "./Bookmarks.css";
import { collapsePanel } from "../../Shell/utils/shell";
export const Bookmarks = (args: any) => {
  const bookmarkRef = useRef() as any;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const loaded = useRef(false);
  const [bookmarks, setBookmarks] = useState<__esri.Bookmarks>();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;
      setBookmarks(initializeBookmarks(bookmarkRef.current, args.view));
    }
    return () => {
      bookmarks && bookmarks.destroy();
    };
  }, []); // only after first render
  useEffect(() => {
    setIsActive(args.isActive);
  }, [args.isActive]);
  const toolDismissed = useCallback((e: any) => {
    args.toolDismissed();
  }, []);
  return (
    <CalcitePanel
      id="bookmarks-panel"
      heading="Bookmarks"
      data-panel="bookmarks"
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
      <div ref={bookmarkRef}></div>
    </CalcitePanel>
  );
};

export default React.memo(Bookmarks);
