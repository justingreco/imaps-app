import React from "react";
import { useEffect, useRef, useState } from "react";
import { initializeBookmarks } from "./utils/bookmarks";
import "./Bookmarks.css";
export const Bookmarks = (args: any) => {
  const bookmarkRef = useRef() as any;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const loaded = useRef(false);
  const [bookmarks, setBookmarks] = useState<__esri.Bookmarks>();
  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;
      setBookmarks(initializeBookmarks(bookmarkRef.current, args.view));
    }
    return () => {
      bookmarks && bookmarks.destroy();
    };
  }, []); // only after first render

  return <div ref={bookmarkRef}></div>;
};

export default React.memo(Bookmarks);
