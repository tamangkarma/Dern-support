import React, { useEffect, useState } from "react";
import axios from "axios";

export const Quotes = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await axios.get("http://localhost:3000/user/quotes"); 
        if (res.data && res.data.quote) {
          setQuote(res.data.quote);
        } else {
          setError("No quote available for your request.");
        }
      } catch (err) {
        console.error(err);
        setError("Error fetching quote.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-6 text-primary">Quotes</h2>
      {quote ? (
        <div className="bg-white shadow p-6 rounded-lg max-w-md w-full">
          <h3 className="text-xl font-semibold mb-2">Your Quote</h3>
          <p className="text-gray-700">{quote.message}</p>
          <p className="mt-2 font-bold">Estimated Cost: Rs {quote.amount}</p>
        </div>
      ) : (
        <p className="text-red-500">{error}</p>
      )}
    </div>
  );
};
