import React from "react";

const ProfileCard = ({ data }) => {
  const imageUrl = data.Image?.includes("drive.google.com")
    ? `https://drive.google.com/uc?export=view&id=${data.Image.split("id=")[1]}`
    : data.Image;

  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center">
      <img
        src={imageUrl}
        alt={data.Name}
        className="w-32 h-32 object-cover rounded-full mb-4"
      />
      <h2 className="text-xl font-semibold">{data.Name}</h2>
      <p className="text-gray-500">{data.Position}</p>
      <div className="flex gap-4 mt-3 text-blue-500 text-xl">
        {data.Instagram && (
          <a href={data.Instagram} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        )}
        {data.LinkedIn && (
          <a href={data.LinkedIn} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        )}
        {data.GitHub && (
          <a href={data.GitHub} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
