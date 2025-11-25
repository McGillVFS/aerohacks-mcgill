import { useEffect } from "react";

export default function StructuredData({ data }) {
  useEffect(() => {
    if (!data) return;

    const scriptId = 'structured-data';
    let script = document.getElementById(scriptId);
    
    if (script) {
      script.textContent = JSON.stringify(data);
    } else {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    }

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [data]);

  return null;
}