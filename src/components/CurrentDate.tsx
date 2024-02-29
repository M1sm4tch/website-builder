"use client"
import React, { useState, useEffect } from 'react';

function CurrentDate() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000); 

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div>
      {formattedDate}
    </div>
  );
}

export default CurrentDate;
