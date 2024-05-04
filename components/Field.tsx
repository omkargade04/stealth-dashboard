import React from "react";

interface FieldProps {
  first: string;
  second: string;
}

const Field: React.FC<FieldProps> = ({ first, second }) => {
  // Function to check if the link is the specific one to be styled
  const isBlueLink = (link: string) => {
    return link === "https://tiny.url/asknakdna";
  };

  return (
    <main>
      <div className="flex justify-between m-4 flex-col md:flex-row">
        <h2 className="text-slate-400 text-xl font-semibold">{first}</h2>
        <a
          href={second}
          className={`text-lg font-semibold ${
            isBlueLink(second) ? "text-blue-500" : "text-slate-400"
          }`}
        >
          {second}
        </a>
      </div>
    </main>
  );
};

export default Field;
