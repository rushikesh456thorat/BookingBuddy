


const useApiCall = () => {
  

  const ApiCall = async (prompt ) => {

    console.log(prompt)
    try {
      const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key={Put Your Api Key}", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({"contents":[{"parts":[{"text":" You are a chatbot that specializes in booking tickets and providing museum information. Please respond only  in langauge in which  input is  given with relevant information about museums (such as location, hours, exhibits, and events) or details regarding ticket booking (including prices, availability, and booking process). If the query is not related to museums or ticket booking, respond with \"I can't respond.\" "+prompt}]}]}),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      
      
      return data.candidates[0].content.parts[0].text;
      
      
    } catch (error) {
      console.error("API Call failed:", error);
    }
  };

  return { ApiCall };
};

export default useApiCall;
