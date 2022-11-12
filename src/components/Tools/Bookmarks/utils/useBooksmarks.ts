import { useCallback, useEffect, useRef, useState } from "react";
import { tips } from "./tips";
import { initializeBookmarks } from "./bookmarks";
  
const useBookmarks = (args: any) => {
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
    const tipsClicked = useCallback((e: any) => {
      args.showTips(tips);
      }, []);      
    return {bookmarkRef, isActive, toolDismissed, tipsClicked}
};

export default useBookmarks;
