


const useApiCall = () => {
  

  const ApiCall = async (prompt ) => {

    console.log(prompt)
    try {
      const res = await fetch("", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({query:prompt}),
      });

      const data = await res.json();
      console.log(data)
      if (data.error) {
        throw new Error(data.error);
      }

      
      
      return data.response;
      
      
    } catch (error) {
      
      console.error("API Call failed:", error);
    }
  };

  return { ApiCall };
};

export default useApiCall;
