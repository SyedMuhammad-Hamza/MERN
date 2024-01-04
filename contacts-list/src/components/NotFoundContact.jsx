import React from "react";

const NotFoundContact = () => {
  return (
    <div className="flex m-auto h-[80vh] items-center gap-4 justify-center">
      <div>
        <img src="/contact.png" />
      </div>
      <h1 className="text-2xl font-semibold text-white">Contact not found</h1>
    </div>
  );
};

export default NotFoundContact;
