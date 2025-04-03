import React, { useEffect, useRef } from 'react'

const AviatorComp: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
      const sendAuthToken = () => {
          const token = localStorage.getItem("accessToken");

          if (token && iframeRef.current) {
              console.log("🚀 Sending auth token to iframe:", token);
              iframeRef.current.contentWindow?.postMessage({ token }, "*");
          } else {
              console.warn("⚠️ Token not found or iframe not ready.");
          }
      };

      // Listen for the iframe `load` event before sending the token
      const iframe = iframeRef.current;
      if (iframe) {
          iframe.addEventListener("load", sendAuthToken);
      }

      return () => {
          iframe?.removeEventListener("load", sendAuthToken);
      };
  }, [])
  return (
    <div className="flex flex-col  transition-all lg:pt-[110px] ease-in-out duration-100 pt-0">
    <div className="flex items-start justify-start w-full ">
        <div className="w-full md:mt-[0px]   lg:overflow-auto" style={{minHeight: "calc(-110px + 100dvh)"}}>
            <div></div>
            <div className="bg-transparent w-full h-full">
                <div className="  w-full flex h-[calc(100dvh-42px)] lg:h-[calc(100dvh-54px)]">
                <iframe
                ref={iframeRef}
                id="iframe-id"
                src="https://aviator-flame.vercel.app/"
                width="800"
                height="600"
                title="Second Website"
                className="w-full h-full flex-grow no-scrollbar" allowFullScreen={true}
                        aria-hidden="true"
            ></iframe>
                 </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default AviatorComp